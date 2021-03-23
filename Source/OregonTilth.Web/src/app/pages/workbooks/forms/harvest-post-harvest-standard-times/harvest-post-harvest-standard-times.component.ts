import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'harvest-post-harvest-standard-times',
  templateUrl: './harvest-post-harvest-standard-times.component.html',
  styleUrls: ['./harvest-post-harvest-standard-times.component.scss']
})
export class HarvestPostHarvestStandardTimesComponent implements OnInit {


  @ViewChild('upsertAllocationPlan') upsertEntity: any;
  @ViewChild('timeStudyModal') timeStudyModalEntity: any;


  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
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
  
  getRowNodeId(data)  {
    return data.HarvestPostHarvestStandardTimeID.toString();
  }
  
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      
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
          ]: 
          [
            WorkbookDto, 
            HarvestPostHarvestStandardTimeSummaryDto[], 
            CropDto[],
            CropUnitDto[],
            HarvestTypeDto[]
          ] ) => {
          this.workbook = workbook;
          this.harvestPostHarvestStandardTimes = harvestPostHarvestStandardTimeDtos;

          this.crops = cropDtos;
          this.cropUnits = cropUnitDtos;
          this.harvestTypes = harvestTypeDtos;

          
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

      this.model = new HarvestPostHarvestStandardTimeCreateDto({WorkbookID: this.workbookID});

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
        editable:true,
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      // {
      //   headerName: 'Labor Type', 
      //   field: 'LaborType.LaborTypeDisplayName',
      //   sortable: true, 
      //   filter: true,
      //   resizable: true,
      //   width:150
      // },
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
        editable:true,
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      {
        headerName: 'Harvest Type', 
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
        editable:true,
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      {
        headerName: 'Avg Min Per Unit', 
        valueGetter: function(params:any) {
          if(params.data.TimeStudies.length > 0) {
            var minutes = params.data.TimeStudies.map(x => x.Duration).reduce((x,y) => x + y, 0);
            var totalUnits = params.data.TimeStudies.map(x => x.Units).reduce((x,y) => x + y, 0);
            return (minutes / totalUnits).toFixed(4);
          }
          return 'N/A';
        },
        sortable: true, 
        resizable: true,
        filter: true
      },
      {
        headerName: 'Standard Time', 
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
        width:150
      },
      {
        headerName: 'Time Study Progress', 
        field: 'TimeStudies',
        valueGetter: function (params: any) {
          return { FieldStandardTime: params.data, count: params.data.TimeStudies.length };
        }, 
        cellRendererFramework: TimeStudyCellRendererComponent,
        cellRendererParams: { 
          clicked: function(data: any) {
            componentScope.launchModal(TimeStudyModal, 'Field Time Studies', data.FieldStandardTime);
          }
        },
        sortable: false, 
        filter: true,
        autoHeight:true,
        resizable: false,
        width:300
      },
    ]
  }

  public launchModal(modalContent: any, modalTitle: string, fieldStandardTime: FieldStandardTimeSummaryDto) {
    this.modalReference = this.modalService.open(modalContent, { size:'xl', windowClass : "time-studies-modal", ariaLabelledBy: modalTitle, backdrop: 'static', keyboard: false });
    this.modalReference.componentInstance.fieldStandardTime = fieldStandardTime;
    this.modalReference.result.then((result) => {
      if(result.FieldStandardTimeID) {
        var rowNode = this.gridApi.getRowNode(result.FieldStandardTimeID);
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
    
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  resetForm() {
    this.model = new HarvestPostHarvestStandardTimeCreateDto({WorkbookID: this.workbookID});
  }


}

