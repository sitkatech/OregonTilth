import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WorkbookService } from 'src/app/services/workbook/workbook.service';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';
import { ColDef } from 'ag-grid-community';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { GridService } from 'src/app/shared/services/grid/grid.service';
import { DecimalEditor } from 'src/app/shared/components/ag-grid/decimal-editor/decimal-editor.component';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { CropUnitDto } from 'src/app/shared/models/generated/crop-unit-dto';
import { CropYieldInformationSummaryDto } from 'src/app/shared/models/forms/crop-yield-information/crop-yield-information-summary-dto';
import { CropYieldInformationCreateDto } from 'src/app/shared/models/forms/crop-yield-information/crop-yield-information-create-dto';
import { EditableRendererComponent } from 'src/app/shared/components/ag-grid/editable-renderer/editable-renderer.component';
import { AgGridAngular } from 'ag-grid-angular';
import { UtilityFunctionsService } from 'src/app/services/utility-functions.service';

@Component({
  selector: 'crop-yield-information',
  templateUrl: './crop-yield-information.component.html',
  styleUrls: ['./crop-yield-information.component.scss']
})
export class CropYieldInformationComponent implements OnInit {
  @ViewChild('cropYieldInformationGrid') cropYieldInformationGrid: AgGridAngular;
  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private gridService: GridService,
    private router: Router,
    private utilityFunctionsService: UtilityFunctionsService, 
    private route: ActivatedRoute) { }

  private gridApi: any;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  
  public model: CropYieldInformationCreateDto;
  public richTextTypeID : number = CustomRichTextType.CropYieldInfoForm;

  public getCropYieldInformationDtosRequest: any;
  public cropYieldInformations: CropYieldInformationSummaryDto[];

  public getCropsRequest: any;
  public crops: CropDto[];

  public getCropUnitsRequest: any;
  public cropUnits: CropUnitDto[];

  private addCropYieldInformationRequest: any;
  private updateCropYieldInfoRequest: any;
  private deleteCropYieldInfoRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new CropYieldInformationCreateDto({WorkbookID: this.workbookID});
      
      this.refreshData();

    });
  }

  private refreshData() {
    this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
    this.getCropsRequest = this.workbookService.getCrops(this.workbookID);
    this.getCropUnitsRequest = this.workbookService.getCropUnits(this.workbookID);
    this.getCropYieldInformationDtosRequest = this.workbookService.getCropYieldInformation(this.workbookID);

    forkJoin([this.getWorkbookRequest, this.getCropsRequest, this.getCropUnitsRequest, this.getCropYieldInformationDtosRequest]).subscribe(([workbook, cropDtos, cropUnitDtos, cropYieldInfoDtos]: [WorkbookDto, CropDto[], CropUnitDto[], CropYieldInformationSummaryDto[]]) => {
      this.workbook = workbook;
      this.crops = cropDtos;
      this.cropUnits = cropUnitDtos;
      this.cropYieldInformations = cropYieldInfoDtos;
      this.defineColumnDefs();
      this.cdr.markForCheck();
    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Crop', 
        field: 'Crop',
        valueFormatter: function (params) {
          return params.value ? params.value : '';
        },
        valueSetter: params => {
          params.data.Crop = this.crops.find(element => {
            return element.CropName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.Crop ? params.data.Crop.CropName : '';
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.crops.map(x => x.CropName)
        },
        cellRendererFramework: EditableRendererComponent,
        editable:true,
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      {
        headerName: 'Crop Unit', 
        field: 'Crop',
        valueFormatter: function (params) {
          return params.value ? params.value : '';
        },
        valueSetter: params => {
          params.data.CropUnit = this.cropUnits.find(element => {
            return element.CropUnitName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.CropUnit ? params.data.CropUnit.CropUnitName : '';
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.cropUnits.map(x => x.CropUnitName)
        },
        cellRendererFramework: EditableRendererComponent,
        editable:true,
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      {
        headerName: 'Harvested Yield Per Standard Unit of Space', 
        field:'HarvestedYieldPerStandardUnitOfSpace',
        valueGetter: function(params:any) {
          return params.data.HarvestedYieldPerStandardUnitOfSpace
        },
        editable: true,
        cellEditorFramework: DecimalEditor,
        sortable: true, 
        filter: true,
        cellStyle: params => {
          if (params.value) {
              return { backgroundColor: '#ccf5cc'};
          } 
          return {backgroundColor: '#ffdfd6'};
        },
        cellRendererFramework: EditableRendererComponent,
        width:150,
        resizable: true,
      },
      {
        headerName: 'Marketable Yield Per Standard Unit of Space', 
        field:'MarketableYieldPerStandardUnitOfSpace',
        valueGetter: function(params:any) {
          return params.data.MarketableYieldPerStandardUnitOfSpace
        },
        editable: true,
        cellEditorFramework: DecimalEditor,
        sortable: true, 
        filter: true,
        cellStyle: params => {
          if (params.value) {
              return { backgroundColor: '#ccf5cc'};
          } 
          return {backgroundColor: '#ffdfd6'};
        },
        cellRendererFramework: EditableRendererComponent,
        width:150,
        resizable: true,
      },
      {
        headerName: 'Price Per Crop Unit', 
        field:'PricePerCropUnit',
        valueFormatter: this.gridService.currencyFormatter,
        valueGetter: function(params:any) {
          return params.data.PricePerCropUnit
        },
        editable: true,
        cellEditorFramework: DecimalEditor,
        sortable: true, 
        filter: true,
        cellStyle: params => {
          if (params.value) {
              return { backgroundColor: '#ccf5cc'};
          } 
          return {backgroundColor: '#ffdfd6'};
        },
        cellRendererFramework: EditableRendererComponent,
        width:150,
        resizable: true,
      },
      {
        headerName: 'Packaging Cost Per Crop Unit', 
        field:'PackagingCostPerCropUnit',
        valueFormatter: this.gridService.currencyFormatter,
        valueGetter: function(params:any) {
          return params.data.PackagingCostPerCropUnit
        },
        editable: true,
        cellEditorFramework: DecimalEditor,
        sortable: true, 
        filter: true,
        cellStyle: params => {
          if (params.value || params.value == 0) {
              return { backgroundColor: '#ccf5cc'};
          } 
          return {backgroundColor: '#ffdfd6'};
        },
        cellRendererFramework: EditableRendererComponent,
        width:150,
        resizable: true,
      },
      {
        headerName: 'Delete', field: 'CropYieldInformationID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.CropYieldInformationID, ObjectDisplayName: '' };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete this record?`)) {
              componentScope.deleteCropYieldInformation(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  

  deleteCropYieldInformation(cropYieldInformationID: number) {
    this.deleteCropYieldInfoRequest = this.workbookService.deleteCropYieldInformation(this.workbookID, cropYieldInformationID).subscribe(response => {
      var rowToRemove = this.gridApi.getRowNode(cropYieldInformationID.toString());
      this.gridApi.applyTransaction({remove:[rowToRemove.data]})
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateCropYieldInfoRequest = this.workbookService.updateCropYieldInformation(dtoToPost).subscribe(cropYieldInfoDto => {
      data.node.setData(cropYieldInfoDto);
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
    if (this.addCropYieldInformationRequest && this.addCropYieldInformationRequest.unsubscribe) {
      this.addCropYieldInformationRequest.unsubscribe();
    }
    if (this.getCropsRequest && this.getCropsRequest.unsubscribe) {
      this.getCropsRequest.unsubscribe();
    }

    if (this.updateCropYieldInfoRequest && this.updateCropYieldInfoRequest.unsubscribe) {
      this.updateCropYieldInfoRequest.unsubscribe();
    }
    if (this.deleteCropYieldInfoRequest && this.deleteCropYieldInfoRequest.unsubscribe) {
      this.deleteCropYieldInfoRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(cropYieldInformationForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addCropYieldInformationRequest = this.workbookService.addCropYieldInformation(this.model).subscribe(response => {
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
    this.model = new CropYieldInformationCreateDto({WorkbookID: this.workbookID});
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  getRowNodeId(data)  {
    return data.CropYieldInformationID.toString();
  }
  public exportToCsv() {
    let columnsKeys = this.cropYieldInformationGrid.columnApi.getAllDisplayedColumns(); 
    let columnIds: Array<any> = []; 
    columnsKeys.forEach(keys => 
      { 
        let columnName: string = keys.getColId(); 
        columnIds.push(columnName); 
      });
    columnIds.splice(-1, 1); // remove the delete column from the download
    this.utilityFunctionsService.exportGridToCsv(this.cropYieldInformationGrid, 'Crop-Yield-Information.csv', columnIds);
  }  
}

