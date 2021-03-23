import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WorkbookService } from 'src/app/services/workbook/workbook.service';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';
import { ColDef } from 'ag-grid-community';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { FieldInputByCropDto } from 'src/app/shared/models/generated/field-input-by-crop-dto';
import { FieldInputByCropCreateDto } from 'src/app/shared/models/forms/field-input-by-crop/field-input-by-crop-create-dto';
import { FieldInputCostDto } from 'src/app/shared/models/generated/field-input-cost-dto';
import { DecimalEditor } from 'src/app/shared/components/ag-grid/decimal-editor/decimal-editor.component';
@Component({
  selector: 'field-input-labor-by-crop',
  templateUrl: './field-input-by-crop.component.html',
  styleUrls: ['./field-input-by-crop.component.scss']
})
export class FieldInputByCropComponent implements OnInit {
  
  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private route: ActivatedRoute) { }

  private gridApi: any;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.FieldInputByCropForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addFieldInputByCropRequest: any;
  public model: FieldInputByCropCreateDto;

  public getFieldInputByCropsRequest: any;
  public fieldInputByCropDtos: FieldInputByCropDto[];

  public cropDtos: CropDto[];
  private getCropDtosRequest: any;

  public fieldInputCostDtos: FieldInputCostDto[];
  private getFieldInputCostDtosRequest: any;

  private updateFieldInputByCropRequest: any;
  private deleteFieldInputByCropRequest: any;

  public columnDefs: ColDef[];

  public dropdownSettings = {};
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new FieldInputByCropCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getCropDtosRequest = this.workbookService.getCrops(this.workbookID);
      this.getFieldInputCostDtosRequest = this.workbookService.getFieldInputCosts(this.workbookID);

      this.getFieldInputByCropsRequest = this.workbookService.getFieldInputByCrops(this.workbookID);

      forkJoin([this.getWorkbookRequest, this.getCropDtosRequest, this.getFieldInputCostDtosRequest,  this.getFieldInputByCropsRequest]).subscribe(([workbookDto, cropDtos, fieldInputCostDtos, fieldInputByCrops]: [WorkbookDto, CropDto[], FieldInputCostDto[], FieldInputByCropDto[]] ) => {
          this.workbook = workbookDto;
          this.cropDtos = cropDtos;
          this.fieldInputCostDtos = fieldInputCostDtos;
          this.fieldInputByCropDtos = fieldInputByCrops;
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

      this.dropdownSettings = {
        singleSelection: false,
        idField: 'FieldInputCostID',
        textField: 'FieldInputCostName',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 10,
        allowSearchFilter: true
      };

    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Crop', 
        field: 'Crop',
        editable: true,
        valueFormatter: function (params) {
          return params.value.CropName;
        },
        valueSetter: params => {
          params.data.Crop = this.cropDtos.find(element => {
            return element.CropName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.Crop.CropName;
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.cropDtos.map(x => x.CropName)
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Field Input', 
        field: 'FieldInputCost',
        editable: true,
        valueFormatter: function (params) {
          return params.value.FieldInputCostName;
        },
        valueSetter: params => {
          params.data.FieldInputCost = this.fieldInputCostDtos.find(element => {
            return element.FieldInputCostName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.FieldInputCost.FieldInputCostName;
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.fieldInputCostDtos.map(x => x.FieldInputCostName)
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Occurrences', 
        field: 'Occurrences',
        editable: true,
        cellEditorFramework: DecimalEditor,
        sortable: true, 
        filter: true,
        cellStyle: params => {
          if (params.value) {
              return { backgroundColor: '#ccf5cc'};
          } 
          return {backgroundColor: '#ffdfd6'};
        }
      },
      {
        headerName: 'Delete', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.FieldInputByCropID, ObjectDisplayName: null };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete this record?`)) {
              componentScope.deleteFieldInputByCrop(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteFieldInputByCrop(fieldInputByCropID: number) {
    this.deleteFieldInputByCropRequest = this.workbookService.deleteFieldInputByCrop(this.workbookID, fieldInputByCropID).subscribe(fieldInputByCropDtos => {
      this.fieldInputByCropDtos = fieldInputByCropDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Field Input By Crop", AlertContext.Success));
      this.cdr.detectChanges();
      this.gridApi.redrawRows();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateFieldInputByCropRequest = this.workbookService.updateFieldInputByCrop(dtoToPost).subscribe(fieldInputByCrop => {
      data.node.setData(fieldInputByCrop);
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Field Input By Crop", AlertContext.Success));
    }, error => {
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    })

  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    if (this.getWorkbookRequest && this.getWorkbookRequest.unsubscribe) {
      this.getWorkbookRequest.unsubscribe();
    }
    if (this.addFieldInputByCropRequest && this.addFieldInputByCropRequest.unsubscribe) {
      this.addFieldInputByCropRequest.unsubscribe();
    }
    if (this.getFieldInputByCropsRequest && this.getFieldInputByCropsRequest.unsubscribe) {
      this.getFieldInputByCropsRequest.unsubscribe();
    }
    if (this.updateFieldInputByCropRequest && this.updateFieldInputByCropRequest.unsubscribe) {
      this.updateFieldInputByCropRequest.unsubscribe();
    }
    if (this.deleteFieldInputByCropRequest && this.deleteFieldInputByCropRequest.unsubscribe) {
      this.deleteFieldInputByCropRequest.unsubscribe();
    }
    if (this.getCropDtosRequest && this.getCropDtosRequest.unsubscribe) {
      this.getCropDtosRequest.unsubscribe();
    }
    if (this.getFieldInputCostDtosRequest && this.getFieldInputCostDtosRequest.unsubscribe) {
      this.getFieldInputCostDtosRequest.unsubscribe();
    }

    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldInputByCropForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addFieldInputByCropRequest = this.workbookService.addFieldInputByCrop(this.model).subscribe(response => {
      var transactionRows = this.gridApi.applyTransaction({add: response });
      this.gridApi.flashCells({ rowNodes: transactionRows.add });
      this.isLoadingSubmit = false;
      if(response.length > 0){
        this.alertService.pushAlert(new Alert(`Successfully added ${response.length} Field Input By Crop(s) for Crop '${response[0].Crop.CropName}'.`, AlertContext.Success));
      }else{
        this.alertService.pushAlert(new Alert(`No Field Input By Crop was added.`, AlertContext.Info));
      }
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new FieldInputByCropCreateDto({WorkbookID: this.workbookID});
  }

}