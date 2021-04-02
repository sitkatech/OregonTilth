import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilityFunctionsService } from 'src/app/services/utility-functions.service';
import { UserService } from 'src/app/services/user/user.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WorkbookService } from 'src/app/services/workbook/workbook.service';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';
import { ColDef } from 'ag-grid-community';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { CropCreateDto } from 'src/app/shared/models/forms/crops/crop-create-dto';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { EditableRendererComponent } from 'src/app/shared/components/ag-grid/editable-renderer/editable-renderer.component';

@Component({
  selector: 'crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.scss']
})
export class CropsComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private alertService: AlertService,
    private route: ActivatedRoute) { }

  private gridApi: any;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.CropsForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;

  public model: CropCreateDto;
  private addCropRequest: any;

  public getCropsRequest: any;
  public crops: CropDto[];

  private updateCropRequest: any;
  private deleteCropRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new CropCreateDto({WorkbookID: this.workbookID});
      
      this.refreshData();

    });
  }

  private refreshData() {
    this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
    this.getCropsRequest = this.workbookService.getCrops(this.workbookID);

    forkJoin([this.getWorkbookRequest, this.getCropsRequest]).subscribe(([workbook, crops]: [WorkbookDto, CropDto[]]) => {
      this.workbook = workbook;
      this.crops = crops;
      this.defineColumnDefs();
      this.cdr.markForCheck();
    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Crop', 
        field: 'CropName',
        editable: true,
        cellEditor: 'agTextCellEditor',
        cellRendererFramework: EditableRendererComponent,
        sortable: true, 
        filter: true
      },
      {
        headerName: 'Delete', field: 'CropID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.CropID, ObjectDisplayName: params.data.CropName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Crop?`)) {
              componentScope.deleteCrop(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteCrop(cropID: number) {
    this.deleteCropRequest = this.workbookService.deleteCrop(this.workbookID, cropID).subscribe(cropDtos => {
      this.crops = cropDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Crop", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateCropRequest = this.workbookService.updateCrop(dtoToPost).subscribe(crop => {
      data.node.setData(crop);
      this.gridApi.flashCells({
        rowNodes: [data.node],
        columns: [data.column],
      });
      this.isLoadingSubmit = false;
    }, error => {
      this.refreshData();
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    })

  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    if (this.getWorkbookRequest && this.getWorkbookRequest.unsubscribe) {
      this.getWorkbookRequest.unsubscribe();
    }
    if (this.addCropRequest && this.addCropRequest.unsubscribe) {
      this.addCropRequest.unsubscribe();
    }
    if (this.getCropsRequest && this.getCropsRequest.unsubscribe) {
      this.getCropsRequest.unsubscribe();
    }
    if (this.updateCropRequest && this.updateCropRequest.unsubscribe) {
      this.updateCropRequest.unsubscribe();
    }
    if (this.deleteCropRequest && this.deleteCropRequest.unsubscribe) {
      this.deleteCropRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addCropRequest = this.workbookService.addCrop(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      var transactionRows = this.gridApi.applyTransaction({add: [response]});
      this.gridApi.flashCells({ rowNodes: transactionRows.add });
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new CropCreateDto({WorkbookID: this.workbookID});
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

}

