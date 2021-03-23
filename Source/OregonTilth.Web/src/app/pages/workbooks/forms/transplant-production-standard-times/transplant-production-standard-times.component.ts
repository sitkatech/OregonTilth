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
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { CropUnitDto } from 'src/app/shared/models/generated/crop-unit-dto';
import { HarvestTypeDto } from 'src/app/shared/models/generated/harvest-type-dto';
import { TransplantProductionLaborActivityDto } from 'src/app/shared/models/generated/transplant-production-labor-activity-dto';
import { TransplantProductionTrayTypeDto } from 'src/app/shared/models/generated/transplant-production-tray-type-dto';
import { TransplantProductionStandardTimeCreateDto } from 'src/app/shared/models/forms/transplant-production-standard-times/transplant-production-standard-time-create-dto';
import { TransplantProductionStandardTimeSummaryDto } from 'src/app/shared/models/forms/transplant-production-standard-times/transplant-production-standard-time-summary-dto';

@Component({
  selector: 'transplant-production-standard-times',
  templateUrl: './transplant-production-standard-times.component.html',
  styleUrls: ['./transplant-production-standard-times.component.scss']
})
export class TransplantProductionStandardTimesComponent implements OnInit {


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
  public richTextTypeID : number = CustomRichTextType.TPStandardTimesForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;

  public model: TransplantProductionStandardTimeCreateDto;

  public getTransplantProductionStandardTimesRequest: any;
  public transplantProductionStandardTimes: TransplantProductionStandardTimeSummaryDto[];

  public getTransplantProductionLaborActivitiesRequest: any;
  public transplantProductionLaborActivities: TransplantProductionLaborActivityDto[];

  public getTransplantProductionTrayTypesRequest: any;
  public trayTypes: TransplantProductionTrayTypeDto[];

  public columnDefs: ColDef[];

  public initializeStandardTimeRequest: any;
 
  public modalReference: NgbModalRef;
  public closeResult: string;

  public updateStandardTimeRequest: any;
  
  getRowNodeId(data)  {
    return data.TransplantProductionStandardTimeID.toString();
  }
  
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getTransplantProductionStandardTimesRequest = this.workbookService.getTransplantProductionStandardTimes(this.workbookID);
      this.getTransplantProductionLaborActivitiesRequest = this.workbookService.getTransplantProductionLaborActivities(this.workbookID);
      this.getTransplantProductionTrayTypesRequest = this.workbookService.getTransplantProductionTrayTypes(this.workbookID);

      forkJoin(
        [
          this.getWorkbookRequest, 
          this.getTransplantProductionStandardTimesRequest, 
          this.getTransplantProductionLaborActivitiesRequest,
          this.getTransplantProductionTrayTypesRequest,
        ]).subscribe((
          [
            workbook, 
            transplantProductionStandardTimeDtos, 
            transplantProductionLaborActivityDtos,
            transplantProductionTrayTypeDtos,
          ]: 
          [
            WorkbookDto, 
            TransplantProductionStandardTimeSummaryDto[], 
            TransplantProductionLaborActivityDto[],
            TransplantProductionTrayTypeDto[]
          ] ) => {
          this.workbook = workbook;
          this.transplantProductionStandardTimes = transplantProductionStandardTimeDtos;

          this.transplantProductionLaborActivities = transplantProductionLaborActivityDtos;
          this.trayTypes = transplantProductionTrayTypeDtos;

          
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

      this.model = new TransplantProductionStandardTimeCreateDto({WorkbookID: this.workbookID});

    });
  }
  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;


    this.initializeStandardTimeRequest = this.workbookService.initializeTransplantProductionTimeStudy(this.model).subscribe(response => {
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
        headerName: 'TP Labor Activity', 
        field: 'TransplantProductionLaborActivity',
        valueFormatter: function (params) {
          return params.value ? params.value.TransplantProductionLaborActivityName : '';
        },
        valueSetter: params => {
          params.data.TransplantProductionLaborActivity = this.transplantProductionLaborActivities.find(element => {
            return element.TransplantProductionLaborActivityName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.TransplantProductionLaborActivity ? params.data.TransplantProductionLaborActivity.TransplantProductionLaborActivityName : '';
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.transplantProductionLaborActivities.map(x => x.TransplantProductionLaborActivityName)
        },
        editable:true,
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      {
        headerName: 'Tray Type', 
        field: 'TrayType',
        valueFormatter: function (params) {
          return params.value ? params.value.TransplantProductionTrayTypeName : '';
        },
        valueSetter: params => {
          params.data.TransplantProductionTrayType = this.trayTypes.find(element => {
            return element.TransplantProductionTrayTypeName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.TransplantProductionTrayType ? params.data.TransplantProductionTrayType.TransplantProductionTrayTypeName : '';
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.trayTypes.map(x => x.TransplantProductionTrayTypeName)
        },
        editable:true,
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      {
        headerName: 'Avg Min Per Tray', 
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
          return { TransplantProductionStandardTime: params.data, count: params.data.TimeStudies.length };
        }, 
        cellRendererFramework: TimeStudyCellRendererComponent,
        cellRendererParams: { 
          clicked: function(data: any) {
            componentScope.launchModal(TimeStudyModal, 'Transplant Production Time Studies', data.TransplantProductionStandardTime);
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

  public launchModal(modalContent: any, modalTitle: string, transplantProductionStandardTime: TransplantProductionStandardTimeSummaryDto) {
    this.modalReference = this.modalService.open(modalContent, { size:'xl', windowClass : "time-studies-modal", ariaLabelledBy: modalTitle, backdrop: 'static', keyboard: false });
    this.modalReference.componentInstance.transplantProductionStandardTime = transplantProductionStandardTime;
    this.modalReference.result.then((result) => {
      // debugger;
      if(result.TransplantProductionStandardTimeID) {
        var rowNode = this.gridApi.getRowNode(result.TransplantProductionStandardTimeID);
        rowNode.setData(result);
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;
    this.updateStandardTimeRequest = this.workbookService.updateTransplantProductionStandardTime(dtoToPost).subscribe(standardTime => {
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
    if (this.getTransplantProductionStandardTimesRequest && this.getTransplantProductionStandardTimesRequest.unsubscribe) {
      this.getTransplantProductionStandardTimesRequest.unsubscribe();
    }
    if (this.getTransplantProductionLaborActivitiesRequest && this.getTransplantProductionLaborActivitiesRequest.unsubscribe) {
      this.getTransplantProductionLaborActivitiesRequest.unsubscribe();
    }
    if (this.getTransplantProductionTrayTypesRequest && this.getTransplantProductionTrayTypesRequest.unsubscribe) {
      this.getTransplantProductionTrayTypesRequest.unsubscribe();
    }
    
    if (this.initializeStandardTimeRequest && this.initializeStandardTimeRequest.unsubscribe) {
      this.initializeStandardTimeRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  resetForm() {
    this.model = new TransplantProductionStandardTimeCreateDto({WorkbookID: this.workbookID});
  }


}

