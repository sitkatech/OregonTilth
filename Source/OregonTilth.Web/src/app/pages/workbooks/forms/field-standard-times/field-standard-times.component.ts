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
import { AlertService } from 'src/app/shared/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { CropCreateDto } from 'src/app/shared/models/forms/crops/crop-create-dto';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { FieldLaborActivityDto } from 'src/app/shared/models/generated/field-labor-activity-dto';
import { FieldStandardTimeSummaryDto } from 'src/app/shared/models/forms/field-standard-times/field-standard-time-summary-dto';
import { vFieldLaborActivityForTimeStudyDto } from 'src/app/shared/models/forms/field-standard-times/vFieldLaborActivityForTimeStudyDto';
import { LaborTypeDto } from 'src/app/shared/models/generated/labor-type-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { MachineryDto } from 'src/app/shared/models/generated/machinery-dto';
import { FieldUnitTypeDto } from 'src/app/shared/models/generated/field-unit-type-dto';
import { FieldStandardTimeCreateDto } from 'src/app/shared/models/forms/field-standard-times/field-standard-time-create-dto';
import { LaborTypeEnum } from 'src/app/shared/models/enums/labor-type.enum';

@Component({
  selector: 'field-standard-times',
  templateUrl: './field-standard-times.component.html',
  styleUrls: ['./field-standard-times.component.scss']
})
export class FieldStandardTimesComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private route: ActivatedRoute) { }

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
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      
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
          ]: 
          [
            WorkbookDto, 
            FieldLaborActivityDto[], 
            FieldStandardTimeSummaryDto[], 
            vFieldLaborActivityForTimeStudyDto[], 
            LaborTypeDto[],
            MachineryDto[],
            FieldUnitTypeDto[]
          ] ) => {
          this.workbook = workbook;
          this.fieldLaborActivities = fieldLaborActivities;
          this.fieldStandardTimes = fieldStandardTimes;
          this.vFieldLaborActivitiesForTimeStudyDtos = vFieldLaborActivityForTimeStudyDtos;
          this.laborTypes = laborTypeDtos;
          this.machinery = machineryDtos;
          this.fieldUnits = fieldUnitDtos;

          this.createDtos = vFieldLaborActivityForTimeStudyDtos.map(element =>  {
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
              })
          });

          
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });
      this.model = new FieldStandardTimeCreateDto({WorkbookID: this.workbookID});

    });
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
        filter: true
      },
      {
        headerName: 'Labor Type', 
        field: 'LaborType.LaborTypeDisplayName',
        sortable: true, 
        filter: true
      },
      {
        headerName: 'Machinery', 
        field: 'Machinery.MachineryName',
        sortable: true, 
        filter: true
      },
      {
        headerName: 'Field Unit', 
        field: 'FieldUnitType.FieldUnitTypeDisplayName',
        sortable: true, 
        filter: true
      },
      {
        headerName: '',  
        valueGetter: function (params: any) {
          return { ButtonText: 'Start', CssClasses: "btn btn-success btn-sm", PrimaryKey: params.data.FieldLaborActivityID, ObjectDisplayName: params.data.FieldLaborActivityName };
        }, 
        cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any, data: any) {
          
            // componentScope.initializeTimeStudy(data.FieldLaborActivityID, data.LaborTypeID)
            
          }
          },
        width: 100, autoHeight:true
      },
      // {
      //   headerName: 'Time Studies', 
      //   field: 'FieldLaborActivityName',
      //   // editable: true,
      //   // cellEditor: 'agPopupTextCellEditor',
      //   sortable: true, 
      //   filter: true
      // },
    ]
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
    // var dtoToPost = data.data;

    // this.updateCropRequest = this.workbookService.updateCrop(dtoToPost).subscribe(crop => {
    //   data.node.setData(crop);
    //   this.isLoadingSubmit = false;
    //   this.alertService.pushAlert(new Alert("Successfully updated Crop.", AlertContext.Success));
    // }, error => {
    //   this.isLoadingSubmit = false;
    //   this.cdr.detectChanges();
    // })

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

  


}

