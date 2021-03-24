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
import { GridService } from 'src/app/shared/services/grid/grid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { CropSpecificInfoDto } from 'src/app/shared/models/generated/crop-specific-info-dto';
import { CropSpecificInfoCreateDto } from 'src/app/shared/models/forms/crop-specific-info/crop-specific-info-create-dto';
import { FieldUnitTypeDto } from 'src/app/shared/models/generated/field-unit-type-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { TpOrDsTypeDto } from 'src/app/shared/models/generated/tp-or-ds-type-dto';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { PhaseEnum } from 'src/app/shared/models/enums/phase.enum';
import { TpOrDsTypeEnum } from 'src/app/shared/models/enums/tp-or-ds-type.enum';
import { CropSpecificInfoSummaryDto } from 'src/app/shared/models/forms/crop-specific-info/crop-specific-info-summary-dto';

@Component({
  selector: 'crop-specific-info',
  templateUrl: './crop-specific-info.component.html',
  styleUrls: ['./crop-specific-info.component.scss']
})
export class CropSpecificInfoComponent implements OnInit {

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
  public richTextTypeID : number = CustomRichTextType.CropSpecificInfoForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addCropSpecificInfoRequest: any;
  public model: CropSpecificInfoCreateDto;
  
  public getCropSpecificInfosRequest: any;
  public cropSpecificInfos: CropSpecificInfoSummaryDto[];

  public getCropsRequest: any;
  public createDtos: CropSpecificInfoCreateDto[];

  public initializeCropSpecificInfoRequest: any;

  private updateCropSpecificInfoRequest: any;
  private deleteCropSpecificInfoRequest: any;

  public tpOrDsTypes: TpOrDsTypeDto[];
  private getTpOrDsTypesRequest: any;

  public crops: CropDto[];

  public columnDefs: ColDef[];

  public cropDtosRequired: CropDto[] = [];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new CropSpecificInfoCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getTpOrDsTypesRequest = this.lookupTablesService.getTpOrDsTypes();
      this.getCropSpecificInfosRequest = this.workbookService.getCropSpecificInfos(this.workbookID);
      this.getCropsRequest = this.workbookService.getCrops(this.workbookID);

      forkJoin([this.getWorkbookRequest, this.getTpOrDsTypesRequest, this.getCropSpecificInfosRequest, this.getCropsRequest]).subscribe(([workbook, tpOrDsTypes, cropSpecificInfos, cropDtos]: [WorkbookDto, TpOrDsTypeDto[], CropSpecificInfoSummaryDto[], CropDto[]] ) => {
          this.workbook = workbook;
          this.tpOrDsTypes = tpOrDsTypes;
          this.cropSpecificInfos = cropSpecificInfos;
          this.crops = cropDtos;
          this.refreshCropsRequired();
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

    });
  }

  refreshCropsRequired() {
    if(this.crops && this.cropSpecificInfos) {
      var cropsIDsAlreadyAdded = this.cropSpecificInfos.map(x => {
        return x.Crop.CropID;
      })

      var requiredCrops = this.crops.filter(crop => {
        return !cropsIDsAlreadyAdded.includes(crop.CropID);

        
      })
      this.cropDtosRequired = requiredCrops;
    }
  }



  onSubmit(cropSpecificInfoForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addCropSpecificInfoRequest = this.workbookService.initializeCropSpecificInfo(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.cropSpecificInfos.push(response);
      var transactionRows = this.gridApi.applyTransaction({add: [response]});
      this.gridApi.flashCells({ rowNodes: transactionRows.add });
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  inRowSpacingRequired() {
    if(this.model && (this.model.TpOrDsTypeID == TpOrDsTypeEnum.TransplantFarmProduced || this.model.TpOrDsTypeID == TpOrDsTypeEnum.TransplantOutsourced )){
      return true;
    }
    return false;
  }

  costOutsourcedRequired() {
    if(this.model && this.model.TpOrDsTypeID == TpOrDsTypeEnum.TransplantOutsourced){
      return true;
    }
    return false;
  }

  startButtonDisabled(cropSpecificInfoCreateDto: CropSpecificInfoCreateDto) {
    /* if(!fieldStandardTimeCreateDto.FieldUnitTypeID || fieldStandardTimeCreateDto.FieldUnitTypeID == -1){
      return true;
    }

    if(fieldStandardTimeCreateDto.LaborTypeID == LaborTypeEnum.Operator 
      && (!fieldStandardTimeCreateDto.MachineryID || fieldStandardTimeCreateDto.MachineryID == -1)) {
      return true;
    } */

    return false;

  }

  initializeCropSpecificInfo(createDto: CropSpecificInfoCreateDto) {

    this.initializeCropSpecificInfoRequest = this.workbookService.initializeCropSpecificInfo(createDto).subscribe(cropSpecificInfoDto => {
      this.cropSpecificInfos.push(cropSpecificInfoDto)
        var transactionRows = this.gridApi.applyTransaction({add: [cropSpecificInfoDto]});
        this.gridApi.flashCells({ rowNodes: transactionRows.add });
        var createDtoIndexToRemove = this.createDtos.findIndex(x => {
          return x.CropID == createDto.CropID;// only one crop specific info for each crop
        });
        
        this.createDtos.splice(createDtoIndexToRemove, 1);
        this.cdr.detectChanges();
        
      }, error => {
  
      });
    
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Crop', 
        field: 'Crop.CropName',
        editable: false,
        cellEditor: 'agTextCellEditor',
        sortable: true, 
        filter: true,
      },
      /* {
        headerName: 'Field Unit', 
        field: 'FieldUnitType',
        editable: true,
        cellEditor: 'agPopupSelectCellEditor',
        cellEditorParams: {
          values: this.fieldUnitTypes.map(x => x.FieldUnitTypeDisplayName)
        },
        valueFormatter: function (params) {
          return params.value.FieldUnitTypeDisplayName;
        },
        valueSetter: params => {
          params.data.FieldUnitType = this.fieldUnitTypes.find(element => {
            return element.FieldUnitTypeDisplayName == params.newValue;
          });
          return true;
        },
        sortable: true, 
        filter: true,
      }, 
      {
        headerName: 'Cost Per Field Unit', 
        field: 'CostPerFieldUnit',
        editable: true,
        cellEditor: 'agTextCellEditor',
        valueFormatter: this.gridService.currencyFormatter
      },
      {
        headerName: 'Notes', 
        field: 'Notes',
        editable: true,
        cellEditor: 'agTextCellEditor',
        filter: true,
      },*/
      {
        headerName: 'Delete', field: 'CropSpecificInfoID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.CropSpecificInfoID, ObjectDisplayName: params.data.CropSpecificInfoName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Crop Specific Info?`)) {
              componentScope.deleteCropSpecificInfo(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteCropSpecificInfo(cropSpecificInfoID: number) {
    this.deleteCropSpecificInfoRequest = this.workbookService.deleteCropSpecificInfo(this.workbookID, cropSpecificInfoID).subscribe(cropSpecificInfoDtos => {
      //this.cropSpecificInfos = cropSpecificInfoDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Crop Specific Info", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateCropSpecificInfoRequest = this.workbookService.updateCropSpecificInfo(dtoToPost).subscribe(cropSpecificInfo => {
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Crop Specific Info", AlertContext.Success));
    }, error => {
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    })

  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    if (this.getWorkbookRequest && this.getWorkbookRequest.unsubscribe) {
      this.getWorkbookRequest.unsubscribe();
    }
    if (this.addCropSpecificInfoRequest && this.addCropSpecificInfoRequest.unsubscribe) {
      this.addCropSpecificInfoRequest.unsubscribe();
    }
    if (this.getCropSpecificInfosRequest && this.getCropSpecificInfosRequest.unsubscribe) {
      this.getCropSpecificInfosRequest.unsubscribe();
    }
    if (this.getCropsRequest && this.getCropsRequest.unsubscribe) {
      this.getCropsRequest.unsubscribe();
    }
    if (this.updateCropSpecificInfoRequest && this.updateCropSpecificInfoRequest.unsubscribe) {
      this.updateCropSpecificInfoRequest.unsubscribe();
    }
    if (this.deleteCropSpecificInfoRequest && this.deleteCropSpecificInfoRequest.unsubscribe) {
      this.deleteCropSpecificInfoRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }



  resetForm() {
    this.model = new CropSpecificInfoCreateDto({WorkbookID: this.workbookID});
    this.refreshCropsRequired();
  }

}

