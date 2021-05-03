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
import { CropCropUnitDashboardReportDto as CropCropUnitDashboardReportDto } from 'src/app/shared/models/forms/crop-yield-information/crop-crop-unit-dashboard-report-dto';
import { ResultsService } from 'src/app/services/results/results.service';
import { forkJoin } from 'rxjs';
import { GridService } from 'src/app/shared/services/grid/grid.service';
import { ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { LaborHoursDashboardReportDto } from 'src/app/shared/models/forms/crop-yield-information/labor-hours-dashboard-report-dto';
import { FieldLaborActivityCategoryDto } from 'src/app/shared/models/generated/field-labor-activity-category-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { ChartOptions, ChartType, ChartColor } from 'chart.js';
import { Label } from 'ng2-charts';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { CropUnitDto } from 'src/app/shared/models/generated/crop-unit-dto';
import { VariableCostsDashboardReportDto, ViariableCostForCropPivoted } from 'src/app/shared/models/forms/crop-yield-information/variable-costs-dashboard-report-dto';



@Component({
  selector: 'variable-costs',
  templateUrl: './variable-costs.component.html',
  styleUrls: ['./variable-costs.component.scss']
})
export class VariableCostsComponent implements OnInit {
  @ViewChild('cropCropUnitGrid') cropCropUnitGrid: AgGridAngular;
  
  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private resultsService: ResultsService,
    private alertService: AlertService,
    private lookupTablesService: LookupTablesService,
    private gridService: GridService,
    private router: Router,
    private utilityFunctionsService: UtilityFunctionsService, 
    private route: ActivatedRoute) { }

  private gridApi: any;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public columnDefs: ColDef[];
  public richTextTypeID : number = CustomRichTextType.ResultsCropCropUnitCostsPerCostCategory;
  public workbook: WorkbookDto;
  public roles: Array<RoleDto>;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;

  private getVariableCostsDashboardReportDtosRequest: any;
  public variableCostsDashboardReportDtos: VariableCostsDashboardReportDto[];
  public variableCostsDashboardReportDtosForGrid: VariableCostsDashboardReportDto[];

  public variableCostsPivotedForSelectedCrop : ViariableCostForCropPivoted[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors: Array<any> = [
      { // all colors in order
        backgroundColor: ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#577590', '#1B4332']
      }
  ];
  
 

  public availableCrops: CropDto[];
  public selectedCrop: CropDto;

  public availableCropUnits: CropUnitDto[];
  public selectedCropUnit: CropUnitDto;


  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getVariableCostsDashboardReportDtosRequest = this.resultsService.getVariableCostsDashboardReportDtos(this.workbookID);


      forkJoin([this.getWorkbookRequest, this.getVariableCostsDashboardReportDtosRequest]).subscribe(([workbook, variableCostsDashboardReportDtos]: [WorkbookDto, VariableCostsDashboardReportDto[]] ) => {
          this.workbook = workbook;
          this.variableCostsDashboardReportDtos = variableCostsDashboardReportDtos;
          
          this.initializeDropdowns();
          this.updateGridData();
          this.formatChartData();

          this.defineColumnDefs();
          this.gridApi.sizeColumnsToFit();
          this.cdr.markForCheck();
      });

    });
  }


  private initializeDropdowns() {
    var allCrops = this.variableCostsDashboardReportDtos.map(x => x.Crop);
    this.availableCrops = [];
    this.availableCrops = allCrops.reduce((acc, x) => acc.concat(acc.find(y => y.CropID === x.CropID) ? [] : [x]),
      []);
    this.selectedCrop = this.availableCrops.length > 0 ? this.availableCrops[0] : null;


    var allCropUnits = this.variableCostsDashboardReportDtos.map(x => x.CropUnit);
    this.availableCropUnits = [];
    this.availableCropUnits = allCropUnits.reduce((acc, x) => acc.concat(acc.find(y => y.CropUnitID === x.CropUnitID) ? [] : [x]),
      []);
    this.selectedCropUnit = this.availableCropUnits.length > 0 ? this.availableCropUnits[0] : null;

  }

  dropdownChanged(newValue: any) {
    this.updateGridData();
    this.formatChartData();
  }

  updateGridData() {
    this.variableCostsDashboardReportDtosForGrid = this.variableCostsDashboardReportDtos.filter(x => {
      return x.Crop.CropID == this.selectedCrop.CropID && x.CropUnit.CropUnitID == this.selectedCropUnit.CropUnitID;
    })

    this.variableCostsPivotedForSelectedCrop = [];

    this.variableCostsDashboardReportDtosForGrid.forEach(x => {
      var pivots = [];
      pivots.push(new ViariableCostForCropPivoted({VariableCost: 'Total Field Input Costs', DollarAmount: x.TotalFieldInputCosts}))
      pivots.push(new ViariableCostForCropPivoted({VariableCost: 'Total Labor Costs', DollarAmount: x.TotalLaborCosts}))
      pivots.push(new ViariableCostForCropPivoted({VariableCost: 'Total Machinery Costs', DollarAmount: x.TotalMachineryCosts}))
      pivots.push(new ViariableCostForCropPivoted({VariableCost: 'Total Packaging Costs', DollarAmount: x.TotalPackagingCosts}))
      pivots.push(new ViariableCostForCropPivoted({VariableCost: 'Total Seed or TP Costs', DollarAmount: x.TotalSeedOrTpCosts}))
      this.variableCostsPivotedForSelectedCrop = this.variableCostsPivotedForSelectedCrop.concat(pivots)
    });
  }


  formatChartData() {
    
    this.pieChartData = this.variableCostsPivotedForSelectedCrop.map(x => {
      return Math.round( x.DollarAmount * 1e2 ) / 1e2
    })

    this.pieChartLabels = this.variableCostsPivotedForSelectedCrop.map(x => {
      return x.VariableCost;
    })

  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Variable Costs', 
        field: 'VariableCost',
        valueGetter: params => {
          return params.data.VariableCost;
        },
        resizable:true,
        sortable:true,
      },
      {
        headerName: '', 
        field: 'DollarAmount',
        valueGetter: params => {
          return params.data.DollarAmount.toFixed(2)
        },
        resizable:true,
        sortable:true,
        valueFormatter: this.gridService.currencyFormatter
      },
     
    ]
  }
 

  ngOnDestroy() {

    this.authenticationService.dispose();

    if (this.watchUserChangeSubscription && this.watchUserChangeSubscription.unsubscribe) {
      this.watchUserChangeSubscription.unsubscribe();
    }
    if (this.getWorkbookRequest && this.getWorkbookRequest.unsubscribe) {
      this.getWorkbookRequest.unsubscribe();
    }
    if (this.getVariableCostsDashboardReportDtosRequest && this.getVariableCostsDashboardReportDtosRequest.unsubscribe) {
      this.getVariableCostsDashboardReportDtosRequest.unsubscribe();
    }
    
    this.cdr.detach();
  }

  public exportToCsv() {
    let columnsKeys = this.cropCropUnitGrid.columnApi.getAllDisplayedColumns(); 
    let columnIds: Array<any> = []; 
    columnsKeys.forEach(keys => 
      { 
        let columnName: string = keys.getColId(); 
        columnIds.push(columnName); 
      });
    
    this.utilityFunctionsService.exportGridToCsv(this.cropCropUnitGrid, 'Results-Variable-Costs.csv', columnIds);
  }  

}
