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

@Component({
  selector: 'field-labor-activities',
  templateUrl: './field-labor-activities.component.html',
  styleUrls: ['./field-labor-activities.component.scss']
})
export class FieldLaborActivitiesComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute) { }

  private gridApi: any;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.FieldLaborActivityForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addFieldLaborActivityRequest: any;
  public model: FieldLaborActivityCreateDto;

  public getFieldLaborActivitiesRequest: any;
  public fieldLaborActivities: FieldLaborActivityDto[];

  public fieldLaborActivityCategories: Array<FieldLaborActivityCategoryDto>;
  private getFieldLaborActivityCategoriesRequest: any;

  private updateFieldLaborActivityRequest: any;
  private deleteFieldLaborActivityRequest: any;

  public columnDefs: ColDef[];

  getRowNodeId(data)  {
    return data.FieldLaborActivityID.toString();
  }
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new FieldLaborActivityCreateDto({WorkbookID: this.workbookID});
      
      this.refreshData();

    });
  }

  private refreshData() {
    this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
    this.getFieldLaborActivityCategoriesRequest = this.lookupTablesService.getFieldLaborActivityCategories();
    this.getFieldLaborActivitiesRequest = this.workbookService.getFieldLaborActivities(this.workbookID);

    forkJoin([this.getWorkbookRequest, this.getFieldLaborActivityCategoriesRequest, this.getFieldLaborActivitiesRequest]).subscribe(([workbook, fieldLaborActivityCategories, fieldLaborActivities]: [WorkbookDto, FieldLaborActivityCategoryDto[], FieldLaborActivityDto[]]) => {
      this.workbook = workbook;
      this.fieldLaborActivityCategories = fieldLaborActivityCategories;
      this.fieldLaborActivities = fieldLaborActivities;
      this.defineColumnDefs();
      this.cdr.markForCheck();
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Field Labor Activity', 
        field: 'FieldLaborActivityName',
        editable: true,
        cellEditor: 'agTextCellEditor',
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Field Labor Category', 
        field: 'FieldLaborActivityCategory',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.fieldLaborActivityCategories.map(x => x.FieldLaborActivityCategoryDisplayName)
        },
        valueFormatter: function (params) {
          return params.value.FieldLaborActivityCategoryDisplayName;
        },
        valueSetter: params => {
          params.data.FieldLaborActivityCategory = this.fieldLaborActivityCategories.find(element => {
            return element.FieldLaborActivityCategoryDisplayName == params.newValue;
          });
          return true;
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Crew', 
        field: 'LaborTypeCrew',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['Yes', 'No']
        },
        valueFormatter: function (params) {
          if(params.value == "Yes" || params.value == true) {
            return "Yes";
          } 
          return "No";
        },
        valueSetter: params => {
          params.data.LaborTypeCrew = params.newValue == "Yes" ? true : false;
          return true;
        },
        valueGetter: params => {
          return params.data.LaborTypeCrew;
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Operator', 
        field: 'LaborTypeOperator',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['Yes', 'No']
        },
        valueFormatter: function (params) {
          if(params.value == "Yes" || params.value == true) {
            return "Yes";
          } 
          return "No";
        },
        valueSetter: params => {
          params.data.LaborTypeOperator = params.newValue == "Yes" ? true : false;
          return true;
        },
        valueGetter: params => {
          return params.data.LaborTypeOperator;
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
    this.deleteFieldLaborActivityRequest = this.workbookService.deleteFieldLaborActivity(this.workbookID, fieldLaborActivityID).subscribe(fieldLaborActivityDtos => {
      var rowToRemove = this.gridApi.getRowNode(fieldLaborActivityID.toString());
      this.gridApi.applyTransaction({remove:[rowToRemove.data]})
      this.alertService.pushAlert(new Alert("Successfully deleted Field Labor Activity", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateFieldLaborActivityRequest = this.workbookService.updateFieldLaborActivity(dtoToPost).subscribe(fieldLaborActivity => {
      data.node.setData(fieldLaborActivity);
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
    if (this.addFieldLaborActivityRequest && this.addFieldLaborActivityRequest.unsubscribe) {
      this.addFieldLaborActivityRequest.unsubscribe();
    }
    if (this.getFieldLaborActivitiesRequest && this.getFieldLaborActivitiesRequest.unsubscribe) {
      this.getFieldLaborActivitiesRequest.unsubscribe();
    }
    if (this.getFieldLaborActivityCategoriesRequest && this.getFieldLaborActivityCategoriesRequest.unsubscribe) {
      this.getFieldLaborActivityCategoriesRequest.unsubscribe();
    }
    if (this.updateFieldLaborActivityRequest && this.updateFieldLaborActivityRequest.unsubscribe) {
      this.updateFieldLaborActivityRequest.unsubscribe();
    }
    if (this.deleteFieldLaborActivityRequest && this.deleteFieldLaborActivityRequest.unsubscribe) {
      this.deleteFieldLaborActivityRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addFieldLaborActivityRequest = this.workbookService.addFieldLaborActivity(this.model).subscribe(response => {
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
    this.model = new FieldLaborActivityCreateDto({WorkbookID: this.workbookID});
  }

}

