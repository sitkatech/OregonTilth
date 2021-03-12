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
import { FieldInputByCostDto } from 'src/app/shared/models/generated/field-input-by-cost-dto';
import { FieldInputByCostCreateDto } from 'src/app/shared/models/forms/field-input-by-cost/field-input-by-cost-create-dto';
import { FieldUnitTypeDto } from 'src/app/shared/models/generated/field-unit-type-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';

@Component({
  selector: 'field-input-costs',
  templateUrl: './field-input-costs.component.html',
  styleUrls: ['./field-input-costs.component.scss']
})
export class FieldInputCostsComponent implements OnInit {

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
  public richTextTypeID : number = CustomRichTextType.FieldLaborActivityForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addFieldInputByCostRequest: any;
  public model: FieldInputByCostCreateDto;

  public getFieldInputCostsRequest: any;
  public fieldInputByCosts: FieldInputByCostDto[];

  public fieldUnitTypes: Array<FieldUnitTypeDto>;
  private getFieldUnitTypesRequest: any;

  private updateFieldInputByCostRequest: any;
  private deleteFieldInputByCostRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new FieldInputByCostCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getFieldUnitTypesRequest = this.lookupTablesService.getFieldUnitTypes();
      this.getFieldInputCostsRequest = this.workbookService.getFieldInputCosts(this.workbookID);

      forkJoin([this.getWorkbookRequest, this.getFieldUnitTypesRequest, this.getFieldInputCostsRequest]).subscribe(([workbook, fieldLaborActivityCategories, fieldLaborActivities]: [WorkbookDto, FieldLaborActivityCategoryDto[], FieldLaborActivityDto[]] ) => {
          this.workbook = workbook;
          this.fieldUnitTypes = fieldLaborActivityCategories;
          this.fieldInputByCosts = fieldLaborActivities;
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
      {
        headerName: 'Field Labor Category', 
        field: 'FieldLaborActivityCategory',
        editable: true,
        cellEditor: 'agPopupSelectCellEditor',
        cellEditorParams: {
          values: this.fieldUnitTypes.map(x => x.FieldLaborActivityCategoryDisplayName)
        },
        valueFormatter: function (params) {
          return params.value.FieldLaborActivityCategoryDisplayName;
        },
        valueSetter: params => {
          params.data.FieldLaborActivityCategory = this.fieldUnitTypes.find(element => {
            return element.FieldLaborActivityCategoryDisplayName == params.newValue;
          });
          return true;
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Delete', field: 'FieldLaborActivityID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.FieldLaborActivityID, ObjectDisplayName: params.data.FieldLaborActivityName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Field Labor Activity?`)) {
              componentScope.deleteFieldLaborActivity(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteFieldLaborActivity(fieldLaborActivityID: number) {
    this.deleteFieldInputByCostRequest = this.workbookService.deleteFieldLaborActivity(this.workbookID, fieldLaborActivityID).subscribe(fieldLaborActivityDtos => {
      this.fieldInputByCosts = fieldLaborActivityDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Field Labor Activity", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateFieldInputByCostRequest = this.workbookService.updateFieldLaborActivity(dtoToPost).subscribe(fieldLaborActivity => {
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Field Labor Activity", AlertContext.Success));
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
    if (this.addFieldInputByCostRequest && this.addFieldInputByCostRequest.unsubscribe) {
      this.addFieldInputByCostRequest.unsubscribe();
    }
    if (this.getFieldInputCostsRequest && this.getFieldInputCostsRequest.unsubscribe) {
      this.getFieldInputCostsRequest.unsubscribe();
    }
    if (this.getFieldUnitTypesRequest && this.getFieldUnitTypesRequest.unsubscribe) {
      this.getFieldUnitTypesRequest.unsubscribe();
    }
    if (this.updateFieldInputByCostRequest && this.updateFieldInputByCostRequest.unsubscribe) {
      this.updateFieldInputByCostRequest.unsubscribe();
    }
    if (this.deleteFieldInputByCostRequest && this.deleteFieldInputByCostRequest.unsubscribe) {
      this.deleteFieldInputByCostRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addFieldInputByCostRequest = this.workbookService.addFieldLaborActivity(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.fieldInputByCosts = response;
      this.alertService.pushAlert(new Alert("Successfully added Field Labor Activity.", AlertContext.Success));
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new FieldLaborActivityCreateDto({WorkbookID: this.workbookID, FieldLaborActivityCategoryID: this.model.FieldLaborActivityCategoryID});
  }

}

