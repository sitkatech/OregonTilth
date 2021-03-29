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
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';



@Component({
  selector: 'labor-hours',
  templateUrl: './labor-hours.component.html',
  styleUrls: ['./labor-hours.component.scss']
})
export class LaborHoursComponent implements OnInit {
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
  public richTextTypeID : number = CustomRichTextType.ResultsCropCropUnitLaborHours;
  public workbook: WorkbookDto;
  public roles: Array<RoleDto>;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;

  private getLaborHoursDashboardReportDtosRequest: any;
  public laborHoursDashboardReportDtos: LaborHoursDashboardReportDto[];

  private getLaborActivityCategoriesRequest: any;
  public laborActivityCategoryDtos : FieldLaborActivityCategoryDto[];

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
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
 

  public availableCrops: CropDto[];
  public selectedCrop: CropDto;


  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getLaborHoursDashboardReportDtosRequest = this.resultsService.getLaborHoursDashboardReportDtos(this.workbookID);
      this.getLaborActivityCategoriesRequest = this.lookupTablesService.getFieldLaborActivityCategories();


      forkJoin([this.getWorkbookRequest, this.getLaborHoursDashboardReportDtosRequest]).subscribe(([workbook, laborHoursDashboardReportDtos, laborActivityCategoryDtos]: [WorkbookDto, LaborHoursDashboardReportDto[], FieldLaborActivityCategoryDto[]] ) => {
          this.workbook = workbook;
          this.laborHoursDashboardReportDtos = laborHoursDashboardReportDtos;
          this.laborActivityCategoryDtos = laborActivityCategoryDtos;

          this.availableCrops = laborHoursDashboardReportDtos.map(x => {
            return x.Crop;
          })
          this.selectedCrop = this.availableCrops[0];

          this.formatChartData();
          this.defineColumnDefs();
          this.gridApi.sizeColumnsToFit();
          this.cdr.markForCheck();
      });

    });
  }


  formatChartData() {
    var recordsForChart = this.laborHoursDashboardReportDtos.filter(x => {
      return x.Crop.CropID == this.selectedCrop.CropID;
    })

    this.pieChartData = recordsForChart.map(x => {
      return Math.round( x.LaborActivityHours * 1e2 ) / 1e2
    })

    this.pieChartLabels = recordsForChart.map(x => {
      return x.FieldLaborActivityCategory.FieldLaborActivityCategoryDisplayName;
    })

  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Crop', 
        field: 'Crop',
        valueGetter: params => {
          return params.data.Crop.CropName;
        },
        resizable:true,
        sortable:true,
      },
      {
        headerName: 'Crop Unit', 
        field: 'CropUnit',
        valueGetter: params => {
          return params.data.CropUnit.CropUnitName;
        },
        resizable:true,
        sortable:true,
      },
      {
        headerName: 'Labor Activity Category', 
        field: 'FieldLaborActivityCategory',
        valueGetter: params => {
          return params.data.FieldLaborActivityCategory.FieldLaborActivityCategoryDisplayName;
        },
        
        resizable:true,
        sortable:true,
      },
      {
        headerName: 'Labor Activity Hours', 
        field: 'LaborActivityHours',
        valueGetter: params => {
          return params.data.LaborActivityHours.toFixed(2)
        },
        resizable:true,
        sortable:true,
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
    if (this.getLaborHoursDashboardReportDtosRequest && this.getLaborHoursDashboardReportDtosRequest.unsubscribe) {
      this.getLaborHoursDashboardReportDtosRequest.unsubscribe();
    }
    if (this.getLaborActivityCategoriesRequest && this.getLaborActivityCategoriesRequest.unsubscribe) {
      this.getLaborActivityCategoriesRequest.unsubscribe();
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
    
    this.utilityFunctionsService.exportGridToCsv(this.cropCropUnitGrid, 'Results-Crop-Crop-Unit.csv', columnIds);
  }  

}
