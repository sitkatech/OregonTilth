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
import { LinkRendererComponent } from 'src/app/shared/components/ag-grid/link-renderer/link-renderer.component';
import { RoleDto } from 'src/app/shared/models/generated/role-dto';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { FieldLaborActivityDto } from 'src/app/shared/models/generated/field-labor-activity-dto';
import { FieldLaborActivityCreateDto } from 'src/app/shared/models/forms/field-labor-activities/field-labor-activity-create-dto';
import { FieldLaborActivityCategoryDto } from 'src/app/shared/models/generated/field-labor-activity-category-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { FieldLaborByCropCreateDto } from 'src/app/shared/models/forms/field-labor-by-crop/field-labor-by-crop-create-dto';
import { FieldLaborByCropDto } from 'src/app/shared/models/generated/field-labor-by-crop-dto';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { LaborTypeDto } from 'src/app/shared/models/generated/labor-type-dto';

@Component({
  selector: 'field-labor-by-crop',
  templateUrl: './field-labor-by-crop.component.html',
  styleUrls: ['./field-labor-by-crop.component.scss']
})
export class FieldLaborByCropComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.FieldLaborByCropForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addFieldLaborByCropRequest: any;
  public model: FieldLaborByCropCreateDto;

  public getFieldLaborByCropsRequest: any;
  public fieldLaborByCropDtos: FieldLaborByCropDto[];

  

  public cropDtos: CropDto[];
  private getCropDtosRequest: any;

  public fieldLaborActivityDtos: FieldLaborActivityDto[];
  private getFieldLaborActivityDtosRequest: any;

  public laborTypeDtos: LaborTypeDto[];
  private getLaborTypeDtosRequest: any;

  private updateFieldLaborByCropRequest: any;
  private deleteFieldLaborByCropRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new FieldLaborByCropCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getCropDtosRequest = this.workbookService.getCrops(this.workbookID);
      this.getFieldLaborActivityDtosRequest = this.workbookService.getFieldLaborActivities(this.workbookID);
      this.getLaborTypeDtosRequest = this.lookupTablesService.getLaborTypes();
      this.getFieldLaborByCropsRequest = this.workbookService.getFieldLaborByCrops(this.workbookID);

      forkJoin([this.getWorkbookRequest, this.getCropDtosRequest, this.getFieldLaborActivityDtosRequest, this.getLaborTypeDtosRequest, this.getFieldLaborByCropsRequest]).subscribe(([workbookDto, cropDtos, fieldLaborActivityDtos, laborTypeDtos, fieldLaborByCrops]: [WorkbookDto, CropDto[], FieldLaborActivityDto[], LaborTypeDto[], FieldLaborByCropDto[]] ) => {
          this.workbook = workbookDto;
          this.cropDtos = cropDtos;
          this.fieldLaborActivityDtos = fieldLaborActivityDtos;
          this.laborTypeDtos = laborTypeDtos;
          this.fieldLaborByCropDtos = fieldLaborByCrops;
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

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
        cellEditor: 'agPopupSelectCellEditor',
        cellEditorParams: {
          values: this.cropDtos.map(x => x.CropName)
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Field Labor Activity', 
        field: 'FieldLaborActivity',
        editable: true,
        valueFormatter: function (params) {
          return params.value.FieldLaborActivityName;
        },
        valueSetter: params => {
          params.data.FieldLaborActivity = this.fieldLaborActivityDtos.find(element => {
            return element.FieldLaborActivityName == params.newValue;
          });
          return true;
        },
        cellEditor: 'agPopupSelectCellEditor',
        cellEditorParams: {
          values: this.fieldLaborActivityDtos.map(x => x.FieldLaborActivityName)
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Labor Type', 
        field: 'LaborType',
        editable: true,
        valueFormatter: function (params) {
          return params.value.LaborTypeName;
        },
        valueSetter: params => {
          params.data.LaborType = this.laborTypeDtos.find(element => {
            return element.LaborTypeDisplayName == params.newValue;
          });
          return true;
        },
        cellEditor: 'agPopupSelectCellEditor',
        cellEditorParams: {
          values: this.laborTypeDtos.map(x => x.LaborTypeName)
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Occurrances', 
        field: 'Occurrances',
        editable: true,
        cellEditor: 'agTextCellEditor',
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Delete', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.FieldLaborByCropID, ObjectDisplayName: null };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete this record?`)) {
              componentScope.deleteFieldLaborByCrop(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteFieldLaborByCrop(fieldLaborByCropID: number) {
    this.deleteFieldLaborByCropRequest = this.workbookService.deleteFieldLaborByCrop(this.workbookID, fieldLaborByCropID).subscribe(fieldLaborByCropDtos => {
      this.fieldLaborByCropDtos = fieldLaborByCropDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Field Labor By Crop", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateFieldLaborByCropRequest = this.workbookService.updateFieldLaborByCrop(dtoToPost).subscribe(fieldLaborByCrop => {
      data.node.setData(fieldLaborByCrop);
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Field Labor By Crop", AlertContext.Success));
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
    if (this.addFieldLaborByCropRequest && this.addFieldLaborByCropRequest.unsubscribe) {
      this.addFieldLaborByCropRequest.unsubscribe();
    }
    if (this.getFieldLaborByCropsRequest && this.getFieldLaborByCropsRequest.unsubscribe) {
      this.getFieldLaborByCropsRequest.unsubscribe();
    }
    if (this.updateFieldLaborByCropRequest && this.updateFieldLaborByCropRequest.unsubscribe) {
      this.updateFieldLaborByCropRequest.unsubscribe();
    }
    if (this.deleteFieldLaborByCropRequest && this.deleteFieldLaborByCropRequest.unsubscribe) {
      this.deleteFieldLaborByCropRequest.unsubscribe();
    }
    if (this.getCropDtosRequest && this.getCropDtosRequest.unsubscribe) {
      this.getCropDtosRequest.unsubscribe();
    }
    if (this.getFieldLaborActivityDtosRequest && this.getFieldLaborActivityDtosRequest.unsubscribe) {
      this.getFieldLaborActivityDtosRequest.unsubscribe();
    }
    if (this.getLaborTypeDtosRequest && this.getLaborTypeDtosRequest.unsubscribe) {
      this.getLaborTypeDtosRequest.unsubscribe();
    }

    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addFieldLaborByCropRequest = this.workbookService.addFieldLaborByCrop(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.fieldLaborByCropDtos = response;
      this.alertService.pushAlert(new Alert("Successfully added Field Labor By Crop.", AlertContext.Success));
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new FieldLaborByCropCreateDto({WorkbookID: this.workbookID});
  }

}

