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
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { TransplantProductionInputDto } from 'src/app/shared/models/generated/transplant-production-input-dto';
import { TransplantProductionInputCreateDto } from 'src/app/shared/models/forms/transplant-production-inputs/transplant-production-input-create-dto';
import { TransplantProductionTrayTypeCreateDto } from 'src/app/shared/models/forms/transplant-production-tray-types/transplant-production-tray-type-create-dto';
import { TransplantProductionTrayTypeDto } from 'src/app/shared/models/generated/transplant-production-tray-type-dto';

@Component({
  selector: 'transplant-production-tray-types',
  templateUrl: './transplant-production-tray-types.component.html',
  styleUrls: ['./transplant-production-tray-types.component.scss']
})
export class TransplantProductionTrayTypesComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.TPTrayTypeForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addTransplantProductionTrayTypeRequest: any;
  public model: TransplantProductionTrayTypeCreateDto;

  public getTransplantProductionTrayTypesRequest: any;
  public transplantProductionTrayTypes: TransplantProductionTrayTypeDto[];

  private updateTransplantProductionTrayTypeRequest: any;
  private deleteTransplantProductionTrayTypeRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new TransplantProductionTrayTypeCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getTransplantProductionTrayTypesRequest = this.workbookService.getTransplantProductionTrayTypes(this.workbookID);

      forkJoin([this.getWorkbookRequest,  this.getTransplantProductionTrayTypesRequest]).subscribe(([workbook,  tpTrayTypes]: [WorkbookDto,  TransplantProductionTrayTypeDto[]] ) => {
          this.workbook = workbook;
          this.transplantProductionTrayTypes = tpTrayTypes;
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Tray Type', 
        field: 'TransplantProductionTrayTypeName',
        editable: true,
        cellEditor: 'agTextCellEditor',
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Delete', field: 'TransplantProductionTrayTypeID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.TransplantProductionTrayTypeID, ObjectDisplayName: params.data.TransplantProductionTrayTypeName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Transplant Production Tray Type?`)) {
              componentScope.deleteTransplantProductionTrayType(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteTransplantProductionTrayType(tpInputID: number) {
    this.deleteTransplantProductionTrayTypeRequest = this.workbookService.deleteTransplantProductionTrayType(this.workbookID, tpInputID).subscribe(transplantProductionTrayTypeDtos => {
      this.transplantProductionTrayTypes = transplantProductionTrayTypeDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Transplant Production Tray Type", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateTransplantProductionTrayTypeRequest = this.workbookService.updateTransplantProductionTrayType(dtoToPost).subscribe(tpTrayTypeDto => {
      data.node.setData(tpTrayTypeDto);
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Transplant Production Tray Type", AlertContext.Success));
    }, error => {
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    })

  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    if (this.getWorkbookRequest && this.getWorkbookRequest.unsubscribe) {
      this.getWorkbookRequest.unsubscribe();
    }
    if (this.addTransplantProductionTrayTypeRequest && this.addTransplantProductionTrayTypeRequest.unsubscribe) {
      this.addTransplantProductionTrayTypeRequest.unsubscribe();
    }
    if (this.getTransplantProductionTrayTypesRequest && this.getTransplantProductionTrayTypesRequest.unsubscribe) {
      this.getTransplantProductionTrayTypesRequest.unsubscribe();
    }
    
    if (this.updateTransplantProductionTrayTypeRequest && this.updateTransplantProductionTrayTypeRequest.unsubscribe) {
      this.updateTransplantProductionTrayTypeRequest.unsubscribe();
    }
    if (this.deleteTransplantProductionTrayTypeRequest && this.deleteTransplantProductionTrayTypeRequest.unsubscribe) {
      this.deleteTransplantProductionTrayTypeRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addTransplantProductionTrayTypeRequest = this.workbookService.addTransplantProductionTrayType(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.transplantProductionTrayTypes = response;
      this.alertService.pushAlert(new Alert("Successfully added Transplant Production Tray Type.", AlertContext.Success));
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new TransplantProductionTrayTypeCreateDto({WorkbookID: this.workbookID});
  }

}

