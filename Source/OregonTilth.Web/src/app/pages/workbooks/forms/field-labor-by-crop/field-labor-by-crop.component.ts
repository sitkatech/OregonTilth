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

  // public fieldLaborActivityCategories: Array<FieldLaborActivityCategoryDto>;
  // private getFieldLaborActivityCategoriesRequest: any;

  private updateFieldLaborByCropRequest: any;
  private deleteFieldLaborByCropRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new FieldLaborByCropCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      // this.getFieldLaborActivityCategoriesRequest = this.lookupTablesService.getFieldLaborActivityCategories();
      this.getFieldLaborByCropsRequest = this.workbookService.getFieldLaborActivities(this.workbookID);

      forkJoin([this.getWorkbookRequest, this.getFieldLaborByCropsRequest]).subscribe(([workbook, fieldLaborByCrops]: [WorkbookDto, FieldLaborByCropDto[]] ) => {
          this.workbook = workbook;
          // this.fieldLaborActivityCategories = fieldLaborActivityCategories;
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
        headerName: 'Field Labor Activity', 
        field: 'FieldLaborActivityName',
        editable: true,
        cellEditor: 'agPopupTextCellEditor',
        sortable: true, 
        filter: true,
      },
      // {
      //   headerName: 'Field Labor Category', 
      //   field: 'FieldLaborActivityCategory',
      //   editable: true,
      //   cellEditor: 'agPopupSelectCellEditor',
      //   cellEditorParams: {
      //     values: this.fieldLaborActivityCategories.map(x => x.FieldLaborActivityCategoryDisplayName)
      //   },
      //   valueFormatter: function (params) {
      //     return params.value.FieldLaborActivityCategoryDisplayName;
      //   },
      //   valueSetter: params => {
      //     params.data.FieldLaborActivityCategory = this.fieldLaborActivityCategories.find(element => {
      //       return element.FieldLaborActivityCategoryDisplayName == params.newValue;
      //     });
      //     return true;
      //   },
      //   sortable: true, 
      //   filter: true,
      // },
      {
        headerName: 'Delete', field: 'FieldLaborActivityID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.FieldLaborActivityID, ObjectDisplayName: params.data.FieldLaborActivityName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Field Labor By Crop?`)) {
              componentScope.deleteFieldLaborActivity(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteFieldLaborActivity(fieldLaborByCropID: number) {
    this.deleteFieldLaborByCropRequest = this.workbookService.deleteFieldLaborByCrop(this.workbookID, fieldLaborByCropID).subscribe(fieldLaborByCropDtos => {
      this.fieldLaborByCropDtos = fieldLaborByCropDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Field Labor By Crop", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateFieldLaborByCropRequest = this.workbookService.updateFieldLaborActivity(dtoToPost).subscribe(fieldLaborActivity => {
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
    // if (this.getFieldLaborActivityCategoriesRequest && this.getFieldLaborActivityCategoriesRequest.unsubscribe) {
    //   this.getFieldLaborActivityCategoriesRequest.unsubscribe();
    // }
    if (this.updateFieldLaborByCropRequest && this.updateFieldLaborByCropRequest.unsubscribe) {
      this.updateFieldLaborByCropRequest.unsubscribe();
    }
    if (this.deleteFieldLaborByCropRequest && this.deleteFieldLaborByCropRequest.unsubscribe) {
      this.deleteFieldLaborByCropRequest.unsubscribe();
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

