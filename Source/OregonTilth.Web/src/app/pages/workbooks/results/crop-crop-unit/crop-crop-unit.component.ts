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
import { CropCropUnitDashboardReportDto } from 'src/app/shared/models/forms/crop-yield-information/crop-crop-unit-dashboard-report-dto';
import { ResultsService } from 'src/app/services/results/results.service';
import { forkJoin } from 'rxjs';
import { GridService } from 'src/app/shared/services/grid/grid.service';
import { ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'crop-crop-unit',
  templateUrl: './crop-crop-unit.component.html',
  styleUrls: ['./crop-crop-unit.component.scss']
})
export class CropCropUnitComponent implements OnInit {
  @ViewChild('cropCropUnitGrid') cropCropUnitGrid: AgGridAngular;
  
  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private resultsService: ResultsService,
    private alertService: AlertService,
    private gridService: GridService,
    private router: Router,
    private utilityFunctionsService: UtilityFunctionsService, 
    private route: ActivatedRoute) { }

  private gridApi: any;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public columnDefs: ColDef[];
  public richTextTypeID : number = CustomRichTextType.ResultsCropCropUnit;
  public workbook: WorkbookDto;
  public roles: Array<RoleDto>;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;

  private getcropYieldInformationDashboardReportDtosRequest: any;
  public cropYieldInformationDashboardReportDtos: CropCropUnitDashboardReportDto[];


  getRowNodeId(data)  {
    return data.CropYieldInformationID.toString();
  }
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getcropYieldInformationDashboardReportDtosRequest = this.resultsService.getCropYieldInformationDashboardReportDtos(this.workbookID);

      forkJoin([this.getWorkbookRequest, this.getcropYieldInformationDashboardReportDtosRequest]).subscribe(([workbook, cropYieldInformationDashboardReportDtos]: [WorkbookDto, CropCropUnitDashboardReportDto[]] ) => {
          this.workbook = workbook;
          this.cropYieldInformationDashboardReportDtos = cropYieldInformationDashboardReportDtos;
          
          this.defineColumnDefs();
          this.gridApi.sizeColumnsToFit();
          this.cdr.markForCheck();
      });

    });
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
        headerName: 'Price', 
        field: 'PricePerCropUnit',
        valueFormatter: this.gridService.currencyFormatter,
        
        type: 'rightAligned',
        resizable:true,
        sortable:true,
      },
      {
        headerName: 'Variable Cost Per Marketable Unit', 
        field: 'VariableCostPerMarketableUnit',
        valueFormatter: this.gridService.currencyFormatterToFixed,
        type: 'rightAligned',
        resizable:true,
        sortable:true,
      },
      {
        headerName: 'Contribution Margin Per Marketable Unit', 
        field: 'ContributionMarginPerMarketableUnit',
        valueFormatter: this.gridService.currencyFormatterToFixed,
        type: 'rightAligned',
        resizable:true,
        sortable:true,
      },
      {
        headerName: 'Contribution Margin Per Direct Labor Hour', 
        field: 'ContributionMarginPerDirectLaborHour',
        valueFormatter: this.gridService.currencyFormatterToFixed,
        type: 'rightAligned',
        resizable:true,
        sortable:true,
      },
      {
        headerName: 'Contribution Margin per Standard Bed', 
        field: 'ContributionMarginPerStandardUnitOfSpace',
        valueFormatter: this.gridService.currencyFormatterToFixed,
        type: 'rightAligned',
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
    if (this.getcropYieldInformationDashboardReportDtosRequest && this.getcropYieldInformationDashboardReportDtosRequest.unsubscribe) {
      this.getcropYieldInformationDashboardReportDtosRequest.unsubscribe();
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
