import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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
import { GridService } from 'src/app/shared/services/grid/grid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { FieldInputCostDto } from 'src/app/shared/models/generated/field-input-cost-dto';
import { FieldInputCostCreateDto } from 'src/app/shared/models/forms/field-input-cost/field-input-cost-create-dto';
import { FieldUnitTypeDto } from 'src/app/shared/models/generated/field-unit-type-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { DecimalEditor } from 'src/app/shared/components/ag-grid/decimal-editor/decimal-editor.component';
import { EditableRendererComponent } from 'src/app/shared/components/ag-grid/editable-renderer/editable-renderer.component';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'field-input-costs',
  templateUrl: './field-input-costs.component.html',
  styleUrls: ['./field-input-costs.component.scss']
})
export class FieldInputCostsComponent implements OnInit {
  @ViewChild('fieldInputCostGrid') fieldInputCostGrid: AgGridAngular;

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private gridService: GridService,
    private utilityFunctionsService: UtilityFunctionsService, 
    private router: Router,
    private route: ActivatedRoute) { }

  private gridApi: any;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.FieldInputCostForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addFieldInputCostRequest: any;
  public model: FieldInputCostCreateDto;

  public getFieldInputCostsRequest: any;
  public fieldInputCosts: FieldInputCostDto[];

  public fieldUnitTypes: Array<FieldUnitTypeDto>;
  private getFieldUnitTypesRequest: any;

  private updateFieldInputCostRequest: any;
  private deleteFieldInputCostRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new FieldInputCostCreateDto({WorkbookID: this.workbookID});
      
      this.refreshData();

    });
  }

  private refreshData() {
    this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
    this.getFieldUnitTypesRequest = this.lookupTablesService.getFieldUnitTypes();
    this.getFieldInputCostsRequest = this.workbookService.getFieldInputCosts(this.workbookID);

    forkJoin([this.getWorkbookRequest, this.getFieldUnitTypesRequest, this.getFieldInputCostsRequest]).subscribe(([workbook, fieldUnitTypes, fieldInputCosts]: [WorkbookDto, FieldUnitTypeDto[], FieldInputCostDto[]]) => {
      this.workbook = workbook;
      this.fieldUnitTypes = fieldUnitTypes;
      this.fieldInputCosts = fieldInputCosts;
      this.defineColumnDefs();
      this.cdr.markForCheck();
    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Field Input', 
        field: 'FieldInputCostName',
        editable: true,
        cellEditor: 'agTextCellEditor',
        cellRendererFramework: EditableRendererComponent,
        sortable: true, 
        filter: true,
        resizable: true
      },
      {
        headerName: 'Field Unit', 
        field: 'FieldUnitType',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.fieldUnitTypes.map(x => x.FieldUnitTypeDisplayName)
        },
        valueSetter: params => {
          params.data.FieldUnitType = this.fieldUnitTypes.find(element => {
            return element.FieldUnitTypeDisplayName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.FieldUnitType ? params.data.FieldUnitType.FieldUnitTypeDisplayName : '';
        },
        cellRendererFramework: EditableRendererComponent,
        sortable: true, 
        filter: true,
        resizable: true
      },
      {
        headerName: 'Cost Per Field Unit', 
        field: 'CostPerFieldUnit',
        editable: true,
        cellEditorFramework: DecimalEditor,
        cellRendererFramework: EditableRendererComponent,
        valueFormatter: this.gridService.currencyFormatter,
        resizable: true
      },
      {
        headerName: 'Notes', 
        field: 'Notes',
        editable: true,
        cellEditor: 'agTextCellEditor',
        cellRendererFramework: EditableRendererComponent,
        filter: true,
        resizable: true
      },
      {
        headerName: 'Delete', field: 'FieldInputCostID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.FieldInputCostID, ObjectDisplayName: params.data.FieldInputCostName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Field Input?`)) {
              componentScope.deleteFieldInputCost(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, resizable: true
      },
    ]
  }

  deleteFieldInputCost(fieldInputCostID: number) {
    this.deleteFieldInputCostRequest = this.workbookService.deleteFieldInputCost(this.workbookID, fieldInputCostID).subscribe(fieldInputCostDtos => {
      var rowToRemove = this.gridApi.getRowNode(fieldInputCostID.toString());
      this.gridApi.applyTransaction({remove:[rowToRemove.data]})
      this.alertService.pushAlert(new Alert("Successfully deleted Field Input Cost", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateFieldInputCostRequest = this.workbookService.updateFieldInputCost(dtoToPost).subscribe(fieldInputCost => {
      this.isLoadingSubmit = false;
      data.node.setData(fieldInputCost);
      this.gridApi.flashCells({
        rowNodes: [data.node],
        columns: [data.column],
      });
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
    if (this.addFieldInputCostRequest && this.addFieldInputCostRequest.unsubscribe) {
      this.addFieldInputCostRequest.unsubscribe();
    }
    if (this.getFieldInputCostsRequest && this.getFieldInputCostsRequest.unsubscribe) {
      this.getFieldInputCostsRequest.unsubscribe();
    }
    if (this.getFieldUnitTypesRequest && this.getFieldUnitTypesRequest.unsubscribe) {
      this.getFieldUnitTypesRequest.unsubscribe();
    }
    if (this.updateFieldInputCostRequest && this.updateFieldInputCostRequest.unsubscribe) {
      this.updateFieldInputCostRequest.unsubscribe();
    }
    if (this.deleteFieldInputCostRequest && this.deleteFieldInputCostRequest.unsubscribe) {
      this.deleteFieldInputCostRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldInputCostForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addFieldInputCostRequest = this.workbookService.addFieldInputCost(this.model).subscribe(response => {
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
    this.model = new FieldInputCostCreateDto({WorkbookID: this.workbookID, FieldUnitTypeID: this.model.FieldUnitTypeID});
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  getRowNodeId(data)  {
    return data.FieldInputCostID.toString();
  }

  public exportToCsv() {
    let columnsKeys = this.fieldInputCostGrid.columnApi.getAllDisplayedColumns(); 
    let columnIds: Array<any> = []; 
    columnsKeys.forEach(keys => 
      { 
        let columnName: string = keys.getColId(); 
        columnIds.push(columnName); 
      });
    columnIds.splice(-1, 1); // remove the delete column from the download
    this.utilityFunctionsService.exportGridToCsv(this.fieldInputCostGrid, 'Field-Input-Costs.csv', columnIds);
  }  

}

