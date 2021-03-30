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
import { MachineryDto } from 'src/app/shared/models/generated/machinery-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { MachineryCreateDto } from 'src/app/shared/models/forms/machinery/machinery-create-dto';
import { GridService } from 'src/app/shared/services/grid/grid.service';
import { DecimalEditor } from 'src/app/shared/components/ag-grid/decimal-editor/decimal-editor.component';

@Component({
  selector: 'machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.scss']
})
export class MachineryComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private gridService: GridService,
    private router: Router,
    private route: ActivatedRoute) { }

  private gridApi: any;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addMachineryRequest: any;
  public model: MachineryCreateDto;
  public richTextTypeID : number = CustomRichTextType.MachineryCostForm;

  public getMachineryRequest: any;
  public machineries: MachineryDto[];

  private updateMachineryRequest: any;
  private deleteMachineryRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new MachineryCreateDto({WorkbookID: this.workbookID});
      
      this.refreshData();

    });
  }

  refreshData() {
    this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
    this.getMachineryRequest = this.workbookService.getMachinery(this.workbookID);

    forkJoin([this.getWorkbookRequest, this.getMachineryRequest]).subscribe(([workbook, machineries]: [WorkbookDto, MachineryDto[],] ) => {
        this.workbook = workbook;
        this.machineries = machineries;
        this.defineColumnDefs();
        this.cdr.markForCheck();
    });
  }


  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Machinery', 
        field: 'MachineryName',
        editable: true,
        cellEditor: 'agPopupTextCellEditor',
        resizable:true,
      },
      {
        headerName: 'Hourly Machinery Operating Cost', 
        field: 'StandardMachineryCost',
        editable: true,
        cellEditorFramework: DecimalEditor,
        valueFormatter: this.gridService.currencyFormatter,
        resizable: true,
      },
      {
        headerName: 'Delete', field: 'MachineryID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.MachineryID, ObjectDisplayName: params.data.MachineryName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the '${field.ObjectDisplayName}' Machinery?`)) {
              componentScope.deleteMachinery(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  

  deleteMachinery(machineryID: number) {
    this.deleteMachineryRequest = this.workbookService.deleteMachinery(this.workbookID, machineryID).subscribe(machineryDtos => {
      var rowToRemove = this.gridApi.getRowNode(machineryID.toString());
      this.gridApi.applyTransaction({remove:[rowToRemove.data]})
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateMachineryRequest = this.workbookService.updateMachinery(dtoToPost).subscribe(machinery => {
      data.node.setData(machinery);
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
    if (this.addMachineryRequest && this.addMachineryRequest.unsubscribe) {
      this.addMachineryRequest.unsubscribe();
    }
    if (this.getMachineryRequest && this.getMachineryRequest.unsubscribe) {
      this.getMachineryRequest.unsubscribe();
    }

    if (this.updateMachineryRequest && this.updateMachineryRequest.unsubscribe) {
      this.updateMachineryRequest.unsubscribe();
    }
    if (this.deleteMachineryRequest && this.deleteMachineryRequest.unsubscribe) {
      this.deleteMachineryRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(machineryForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addMachineryRequest = this.workbookService.addMachinery(this.model).subscribe(response => {
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
    this.model = new MachineryCreateDto({WorkbookID: this.workbookID});
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  getRowNodeId(data)  {
    return data.MachineryID.toString();
  }
}

