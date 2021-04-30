import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WorkbookService } from 'src/app/services/workbook/workbook.service';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';
import { ColDef } from 'ag-grid-community';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { FieldLaborActivityDto } from 'src/app/shared/models/generated/field-labor-activity-dto';
import { FieldStandardTimeSummaryDto } from 'src/app/shared/models/forms/field-standard-times/field-standard-time-summary-dto';
import { vFieldLaborActivityForTimeStudyDto } from 'src/app/shared/models/forms/field-standard-times/vFieldLaborActivityForTimeStudyDto';
import { LaborTypeDto } from 'src/app/shared/models/generated/labor-type-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { MachineryDto } from 'src/app/shared/models/generated/machinery-dto';
import { FieldUnitTypeDto } from 'src/app/shared/models/generated/field-unit-type-dto';
import { FieldStandardTimeCreateDto } from 'src/app/shared/models/forms/field-standard-times/field-standard-time-create-dto';
import { LaborTypeEnum } from 'src/app/shared/models/enums/labor-type.enum';
import { TimeStudyCellRendererComponent } from 'src/app/shared/components/ag-grid/time-study-cell-renderer/time-study-cell-renderer.component';
import { TimeStudyDto } from 'src/app/shared/models/generated/time-study-dto';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TimeStudyModal } from 'src/app/shared/components/ag-grid/time-study-modal/time-study-modal.component';
import { DecimalEditor } from 'src/app/shared/components/ag-grid/decimal-editor/decimal-editor.component';
import { HarvestPostHarvestStandardTimeCreateDto } from 'src/app/shared/models/forms/harvest-post-harvest-standard-times/harvest-post-harvest-standard-time-create-dto';
import { HarvestPostHarvestStandardTimeSummaryDto } from 'src/app/shared/models/forms/harvest-post-harvest-standard-times/harvest-post-harvest-standard-time-summary-dto';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { CropUnitDto } from 'src/app/shared/models/generated/crop-unit-dto';
import { HarvestTypeDto } from 'src/app/shared/models/generated/harvest-type-dto';
import { AgGridAngular } from 'ag-grid-angular';
import { UtilityFunctionsService } from 'src/app/services/utility-functions.service';
import { EditableRendererComponent } from 'src/app/shared/components/ag-grid/editable-renderer/editable-renderer.component';

@Component({
  selector: 'harvest-post-harvest-standard-times',
  templateUrl: './harvest-post-harvest-standard-times.component.html',
  styleUrls: ['./harvest-post-harvest-standard-times.component.scss']
})
export class HarvestPostHarvestStandardTimesComponent implements OnInit {


  @ViewChild('upsertAllocationPlan') upsertEntity: any;
  @ViewChild('timeStudyModal') timeStudyModalEntity: any;
  @ViewChild('harvestPostHarvestStandardTimesGrid') harvestPostHarvestStandardTimesGrid: AgGridAngular;


  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private utilityFunctionsService: UtilityFunctionsService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

  private gridApi: any;
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.HarvestPostHarvestStandardTimesForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;

  public model: HarvestPostHarvestStandardTimeCreateDto;

  public getHarvestPostHarvestStandardTimesRequest: any;
  public harvestPostHarvestStandardTimes: HarvestPostHarvestStandardTimeSummaryDto[];

  public getCropsRequest: any;
  public crops: CropDto[];

  public getCropUnitsRequest: any;
  public cropUnits: CropUnitDto[];

  public getHarvestTypesRequest: any;
  public harvestTypes: HarvestTypeDto[];

  public columnDefs: ColDef[];

  public initializeStandardTimeRequest: any;
 
  public modalReference: NgbModalRef;
  public closeResult: string;

  public updateStandardTimeRequest: any;

  private deleteHarvestPostHarvestStandardTimeRequest: any;

  public screenWidth: number;
  
  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width) {
      this.screenWidth = width;
  }

  getRowNodeId(data)  {
    return data.HarvestPostHarvestStandardTimeID.toString();
  }
  
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      
      this.refreshData();

      this.model = new HarvestPostHarvestStandardTimeCreateDto({WorkbookID: this.workbookID});

    });
  }
  private refreshData() {
    this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
    this.getHarvestPostHarvestStandardTimesRequest = this.workbookService.getHarvestPostHarvestStandardTimes(this.workbookID);
    this.getCropsRequest = this.workbookService.getCrops(this.workbookID);
    this.getCropUnitsRequest = this.workbookService.getCropUnits(this.workbookID);
    this.getHarvestTypesRequest = this.lookupTablesService.getHarvestTypes();

    forkJoin(
      [
        this.getWorkbookRequest,
        this.getHarvestPostHarvestStandardTimesRequest,
        this.getCropsRequest,
        this.getCropUnitsRequest,
        this.getHarvestTypesRequest
      ]).subscribe((
        [
          workbook,
          harvestPostHarvestStandardTimeDtos,
          cropDtos,
          cropUnitDtos,
          harvestTypeDtos
        ]: [
            WorkbookDto,
            HarvestPostHarvestStandardTimeSummaryDto[],
            CropDto[],
            CropUnitDto[],
            HarvestTypeDto[]
          ]) => {
        this.workbook = workbook;
        this.harvestPostHarvestStandardTimes = harvestPostHarvestStandardTimeDtos;

        this.crops = cropDtos;
        this.cropUnits = cropUnitDtos;
        this.harvestTypes = harvestTypeDtos;


        this.defineColumnDefs();
        this.cdr.markForCheck();
      });
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;


    this.initializeStandardTimeRequest = this.workbookService.initializeHarvestPostHarvestTimeStudy(this.model).subscribe(response => {
      var transactionRows = this.gridApi.applyTransaction({add: [response] });
      this.gridApi.flashCells({ rowNodes: transactionRows.add });
      this.isLoadingSubmit = false;
      
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
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
        valueFormatter: function (params) {
          return params.value ? params.value.CropName : '';
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
        width:150,
        pinned: this.screenWidth > 767 ? 'left' : null,
      },
      {
        headerName: 'Crop Unit', 
        field: 'Crop',
        valueFormatter: function (params) {
          return params.value ? params.value.CropUnitName : '';
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
        width:150,
        pinned: this.screenWidth > 767 ? 'left' : null,
      },
      {
        headerName: 'Harvest/Post-Harvest', 
        field: 'HarvestType',
        valueFormatter: function (params) {
          return params.value ? params.value.HarvestTypeDisplayName : '';
        },
        valueSetter: params => {
          params.data.HarvestType = this.harvestTypes.find(element => {
            return element.HarvestTypeDisplayName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.HarvestType ? params.data.HarvestType.HarvestTypeDisplayName : '';
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.harvestTypes.map(x => x.HarvestTypeDisplayName)
        },
        cellRendererFramework: EditableRendererComponent,
        editable:true,
        sortable: true, 
        filter: true,
        resizable: true,
        width:150,
        pinned: this.screenWidth > 767 ? 'left' : null,
      },
      {
        headerName: 'Avg Min Per Unit', 
        valueGetter: function(params:any) {
          if(params.data.TimeStudies.length > 0) {
            var avgArray = params.data.TimeStudies.map(element => {
                return {
                    x: element.Duration / element.Units
                };
            });
            var sumOfAvgs = avgArray.map(element => element.x).reduce((a, b) => a + b, 0)
            var avgOfAvgs = sumOfAvgs / avgArray.length;
            return avgOfAvgs;
          }
          return 'N/A';
        },
        sortable: true, 
        resizable: true,
        filter: true
      },
      {
        headerName: 'Standard Rate', 
        field:'StandardTimePerUnit',
        valueGetter: function(params:any) {
          return params.data.StandardTimePerUnit
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
        width:150
      },
      {
        headerName: 'Time Study Progress', 
        field: 'TimeStudies',
        valueGetter: function (params: any) {
          return { HarvestPostHarvestStandardTime: params.data, count: params.data.TimeStudies.length };
        }, 
        cellRendererFramework: TimeStudyCellRendererComponent,
        cellRendererParams: { 
          clicked: function(data: any) {
            componentScope.launchModal(TimeStudyModal, 'Harvest Post-Harvest Time Studies', data.HarvestPostHarvestStandardTime);
          }
        },
        sortable: false, 
        filter: true,
        autoHeight:true,
        resizable: false,
        width:300
      },
      {
        headerName: 'Delete', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.HarvestPostHarvestStandardTimeID, ObjectDisplayName: null };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete this record?`)) {
              componentScope.deleteHarvestPostHarvestStandardTime(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteHarvestPostHarvestStandardTime(harvestPostHarvestStandardTimeID: number) {
    this.deleteHarvestPostHarvestStandardTimeRequest = this.workbookService.deleteHarvestPostHarvestStandardTime(this.workbookID, harvestPostHarvestStandardTimeID).subscribe(fieldStandardTimeDtos => {
      var rowToRemove = this.gridApi.getRowNode(harvestPostHarvestStandardTimeID.toString());
      this.gridApi.applyTransaction({remove:[rowToRemove.data]})
      this.alertService.pushAlert(new Alert("Successfully deleted Time Study", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  public launchModal(modalContent: any, modalTitle: string, harvestPostHarvestStandardTime: HarvestPostHarvestStandardTimeSummaryDto) {
    this.modalReference = this.modalService.open(modalContent, { size:'xl', windowClass : "time-studies-modal", ariaLabelledBy: modalTitle, backdrop: 'static', keyboard: false });
    this.modalReference.componentInstance.harvestPostHarvestStandardTime = harvestPostHarvestStandardTime;
    this.modalReference.result.then((result) => {
      // debugger;
      if(result.HarvestPostHarvestStandardTimeID) {
        var rowNode = this.gridApi.getRowNode(result.HarvestPostHarvestStandardTimeID);
        rowNode.setData(result);
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;
    this.updateStandardTimeRequest = this.workbookService.updateHarvestPostHarvestStandardTime(dtoToPost).subscribe(standardTime => {
      data.node.setData(standardTime);
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
    if (this.getHarvestPostHarvestStandardTimesRequest && this.getHarvestPostHarvestStandardTimesRequest.unsubscribe) {
      this.getHarvestPostHarvestStandardTimesRequest.unsubscribe();
    }
    if (this.getCropsRequest && this.getCropsRequest.unsubscribe) {
      this.getCropsRequest.unsubscribe();
    }
    if (this.getCropUnitsRequest && this.getCropUnitsRequest.unsubscribe) {
      this.getCropUnitsRequest.unsubscribe();
    }
    if (this.getHarvestTypesRequest && this.getHarvestTypesRequest.unsubscribe) {
      this.getHarvestTypesRequest.unsubscribe();
    }
    if (this.initializeStandardTimeRequest && this.initializeStandardTimeRequest.unsubscribe) {
      this.initializeStandardTimeRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  resetForm() {
    this.model = new HarvestPostHarvestStandardTimeCreateDto({WorkbookID: this.workbookID});
  }

  public exportToCsv() {
    let columnsKeys = this.harvestPostHarvestStandardTimesGrid.columnApi.getAllDisplayedColumns(); 
    let columnIds: Array<any> = []; 
    columnsKeys.forEach(keys => 
      { 
        let columnName: string = keys.getColId(); 
        columnIds.push(columnName); 
      });
    var timeStudiesIndex = columnIds.findIndex(x => {
      return x == 'TimeStudies';
    });
    columnIds.splice(timeStudiesIndex, 1);
    this.utilityFunctionsService.exportGridToCsv(this.harvestPostHarvestStandardTimesGrid, 'Harvest-Post-Harvest-Time-Studies.csv', columnIds);
  }  

}

