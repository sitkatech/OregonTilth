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
import { UtilityFunctionsService } from 'src/app/services/utility-functions.service';
import { AgGridAngular } from 'ag-grid-angular';
import { EditableRendererComponent } from 'src/app/shared/components/ag-grid/editable-renderer/editable-renderer.component';

@Component({
  selector: 'field-standard-times',
  templateUrl: './field-standard-times.component.html',
  styleUrls: ['./field-standard-times.component.scss']
})
export class FieldStandardTimesComponent implements OnInit {


  @ViewChild('upsertAllocationPlan') upsertEntity: any;
  @ViewChild('timeStudyModal') timeStudyModalEntity: any;
  @ViewChild('fieldStandardTimesGrid') fieldStandardTimesGrid: AgGridAngular;


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
  public richTextTypeID : number = CustomRichTextType.FieldStandardTimesForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;

  public model: FieldStandardTimeCreateDto;

  public getFieldLaborActivitiesRequest: any;
  public fieldLaborActivities: FieldLaborActivityDto[];

  public getFieldStandardTimesRequest: any;
  public fieldStandardTimes: FieldStandardTimeSummaryDto[];

  public deleteFieldStandardTimesRequest: any;

  public getvFieldLaborActivitiesForTimeStudiesRequest: any;
  public vFieldLaborActivitiesForTimeStudyDtos: vFieldLaborActivityForTimeStudyDto[];

  public getLaborTypesRequest: any;
  public laborTypes: LaborTypeDto[];

  public getMachineryRequest: any;
  public machinery: MachineryDto[];

  public getFieldUnitsRequest: any;
  public fieldUnits: FieldUnitTypeDto[];

  public columnDefs: ColDef[];

  public createDtos: FieldStandardTimeCreateDto[];

  public initializeTimeStudyRequest: any;
 
  public modalReference: NgbModalRef;
  public closeResult: string;

  public updateFieldStandardTimeRequest: any;
  
  getRowNodeId(data)  {
    return data.FieldStandardTimeID.toString();
  }
  
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      
      this.refreshData();

    });
  }

  private refreshData() {
    this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
    this.getFieldLaborActivitiesRequest = this.workbookService.getFieldLaborActivities(this.workbookID);
    this.getFieldStandardTimesRequest = this.workbookService.getFieldStandardTimes(this.workbookID);
    this.getvFieldLaborActivitiesForTimeStudiesRequest = this.workbookService.getFieldLaborActivitiesForTimeStudies(this.workbookID);
    this.getLaborTypesRequest = this.lookupTablesService.getLaborTypes();
    this.getMachineryRequest = this.workbookService.getMachinery(this.workbookID);
    this.getFieldUnitsRequest = this.lookupTablesService.getFieldUnitTypes();

    forkJoin(
      [
        this.getWorkbookRequest,
        this.getFieldLaborActivitiesRequest,
        this.getFieldStandardTimesRequest,
        this.getvFieldLaborActivitiesForTimeStudiesRequest,
        this.getLaborTypesRequest,
        this.getMachineryRequest,
        this.getFieldUnitsRequest
      ]).subscribe((
        [
          workbook,
          fieldLaborActivities,
          fieldStandardTimes,
          vFieldLaborActivityForTimeStudyDtos,
          laborTypeDtos,
          machineryDtos,
          fieldUnitDtos
        ]: [
            WorkbookDto,
            FieldLaborActivityDto[],
            FieldStandardTimeSummaryDto[],
            vFieldLaborActivityForTimeStudyDto[],
            LaborTypeDto[],
            MachineryDto[],
            FieldUnitTypeDto[]
          ]) => {
        this.workbook = workbook;
        this.fieldLaborActivities = fieldLaborActivities;
        this.fieldStandardTimes = fieldStandardTimes;

        this.vFieldLaborActivitiesForTimeStudyDtos = vFieldLaborActivityForTimeStudyDtos;
        this.laborTypes = laborTypeDtos;
        this.machinery = machineryDtos;
        this.fieldUnits = fieldUnitDtos;

        this.createDtos = vFieldLaborActivityForTimeStudyDtos.map(element => {
          return new FieldStandardTimeCreateDto({
            WorkbookID: this.workbookID,
            FieldLaborActivityID: element.FieldLaborActivityID,
            FieldLaborActivity: this.fieldLaborActivities.find(x => {
              return x.FieldLaborActivityID == element.FieldLaborActivityID;
            }),
            LaborTypeID: element.LaborTypeID,
            LaborType: this.laborTypes.find(x => {
              return x.LaborTypeID == element.LaborTypeID;
            }),
          });
        });


        this.defineColumnDefs();
        this.cdr.markForCheck();
      });
    this.model = new FieldStandardTimeCreateDto({ WorkbookID: this.workbookID });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  machineryDisabled(laborTypeID: number) {
    return laborTypeID == LaborTypeEnum.Crew;
  }
  startButtonDisabled(fieldStandardTimeCreateDto: FieldStandardTimeCreateDto) {
    if(!fieldStandardTimeCreateDto.FieldUnitTypeID || fieldStandardTimeCreateDto.FieldUnitTypeID == -1){
      return true;
    }

    if(fieldStandardTimeCreateDto.LaborTypeID == LaborTypeEnum.Operator 
      && (!fieldStandardTimeCreateDto.MachineryID || fieldStandardTimeCreateDto.MachineryID == -1)) {
      return true;
    }

    return false;

  }
  


  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Field Labor Activity', 
        field: 'FieldLaborActivity.FieldLaborActivityName',
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      {
        headerName: 'Labor Type', 
        field: 'LaborType.LaborTypeDisplayName',
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      {
        headerName: 'Machinery', 
        field: 'Machinery',
        editable: params => {
          return params.data.LaborType.LaborTypeID == LaborTypeEnum.Operator;
        },
        valueFormatter: function (params) {
          return params.value ? params.value.MachineryName : 'N/A';
        },
        valueSetter: params => {
          params.data.Machinery = this.machinery.find(element => {
            return element.MachineryName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.Machinery ? params.data.Machinery.MachineryName : 'N/A';
        },
        cellRendererFramework: EditableRendererComponent,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.machinery.map(x => x.MachineryName)
        },
        sortable: true, 
        filter: true,
        resizable: true,
        width:150
      },
      
      {
        headerName: 'Field Unit', 
        field: 'FieldUnitType',
        editable:true,
        valueFormatter: function (params) {
          return params.value.FieldUnitTypeDisplayName;
        },
        valueSetter: params => {
          params.data.FieldUnitType = this.fieldUnits.find(element => {
            return element.FieldUnitTypeDisplayName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.FieldUnitType.FieldUnitTypeDisplayName;
        },
        cellRendererFramework: EditableRendererComponent,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.fieldUnits.map(x => x.FieldUnitTypeDisplayName)
        },
        sortable: true, 
        resizable: true,
        filter: true,
        width:100,
      },
      {
        headerName: 'Avg Min Per Field Unit', 
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
        cellRendererFramework: EditableRendererComponent,
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
      {
        headerName: 'Delete', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.FieldStandardTimeID, ObjectDisplayName: null };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete this record?`)) {
              componentScope.deleteFieldStandardTime(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
      
    ]
  }

  deleteFieldStandardTime(fieldStandardTimeID: number) {
    this.deleteFieldStandardTimesRequest = this.workbookService.deleteFieldStandardTime(this.workbookID, fieldStandardTimeID).subscribe(fieldStandardTimeDtos => {
      var rowToRemove = this.gridApi.getRowNode(fieldStandardTimeID.toString());
      this.gridApi.applyTransaction({remove:[rowToRemove.data]})
      this.alertService.pushAlert(new Alert("Successfully deleted Field Labor Time Study", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
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

  initializeTimeStudy(createDto: FieldStandardTimeCreateDto) {

    this.initializeTimeStudyRequest = this.workbookService.initializeFieldTimeStudy(createDto).subscribe(fieldStandardTimeDto => {
        var transactionRows = this.gridApi.applyTransaction({add: [fieldStandardTimeDto]});
        this.gridApi.flashCells({ rowNodes: transactionRows.add });
        var createDtoIndexToRemove = this.createDtos.findIndex(x => {
          return x.LaborTypeID == createDto.LaborTypeID && x.FieldLaborActivityID == createDto.FieldLaborActivityID;
        });
        
        this.createDtos.splice(createDtoIndexToRemove, 1);
        this.cdr.detectChanges();
        
      }, error => {
  
      });
    
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;
    this.updateFieldStandardTimeRequest = this.workbookService.updateFieldStandardTime(dtoToPost).subscribe(fieldStandardTime => {
      data.node.setData(fieldStandardTime);
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
    
    if (this.getFieldLaborActivitiesRequest && this.getFieldLaborActivitiesRequest.unsubscribe) {
      this.getFieldLaborActivitiesRequest.unsubscribe();
    }
    if (this.getvFieldLaborActivitiesForTimeStudiesRequest && this.getvFieldLaborActivitiesForTimeStudiesRequest.unsubscribe) {
      this.getvFieldLaborActivitiesForTimeStudiesRequest.unsubscribe();
    }
    if (this.getFieldStandardTimesRequest && this.getFieldStandardTimesRequest.unsubscribe) {
      this.getFieldStandardTimesRequest.unsubscribe();
    }
    if (this.getMachineryRequest && this.getMachineryRequest.unsubscribe) {
      this.getMachineryRequest.unsubscribe();
    }
    if (this.getFieldUnitsRequest && this.getFieldUnitsRequest.unsubscribe) {
      this.getFieldUnitsRequest.unsubscribe();
    }
    
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  public exportToCsv() {
    let columnsKeys = this.fieldStandardTimesGrid.columnApi.getAllDisplayedColumns(); 
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
    this.utilityFunctionsService.exportGridToCsv(this.fieldStandardTimesGrid, 'Field-Time-Studies.csv', columnIds);
  }  


}

