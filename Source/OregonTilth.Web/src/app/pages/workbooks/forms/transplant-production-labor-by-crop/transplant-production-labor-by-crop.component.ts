import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { TransplantProductionLaborActivityByCropDto } from 'src/app/shared/models/generated/transplant-production-labor-activity-by-crop-dto';
import { TransplantProductionLaborActivityDto } from 'src/app/shared/models/generated/transplant-production-labor-activity-dto';
import { PhaseDto } from 'src/app/shared/models/generated/phase-dto';
import { TransplantProductionLaborByCropCreateDto } from 'src/app/shared/models/forms/transplant-production-labor-by-crop/transplant-production-labor-by-crop-create-dto';
import { DecimalEditor } from 'src/app/shared/components/ag-grid/decimal-editor/decimal-editor.component';
import { EditableRendererComponent } from 'src/app/shared/components/ag-grid/editable-renderer/editable-renderer.component';
import { TransplantProductionInformationDto } from 'src/app/shared/models/generated/transplant-production-information-dto';
@Component({
  selector: 'transplant-production-labor-by-crop',
  templateUrl: './transplant-production-labor-by-crop.component.html',
  styleUrls: ['./transplant-production-labor-by-crop.component.scss']
})
export class TransplantProductionLaborByCropComponent implements OnInit {
  
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
  public richTextTypeID : number = CustomRichTextType.TPLaborByCropForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addTransplantProductionLaborByCropRequest: any;
  public model: TransplantProductionLaborByCropCreateDto;

  public getTransplantProductionLaborByCropsRequest: any;
  public transplantProductionLaborByCropDtos: TransplantProductionLaborActivityByCropDto[];

  public transplantProductionInformationDtos: TransplantProductionInformationDto[];
  private getTransplantProductionInformationDtosRequest: any;

  public transplantProductionLaborActivityDtos: TransplantProductionLaborActivityDto[];
  private getTransplantProductionLaborActivityDtosRequest: any;

  private updateTransplantProductionLaborByCropRequest: any;
  private deleteTransplantProductionLaborByCropRequest: any;

  public columnDefs: ColDef[];

  public dropdownSettings = {};
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new TransplantProductionLaborByCropCreateDto({WorkbookID: this.workbookID});
      
      this.refreshData();

    });
  }

  private refreshData() {
    this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
    this.getTransplantProductionInformationDtosRequest = this.workbookService.getTransplantProductionInformationDtos(this.workbookID);
    this.getTransplantProductionLaborActivityDtosRequest = this.workbookService.getTransplantProductionLaborActivitiesFromTransplantProductionStandardTimes(this.workbookID);
    this.getTransplantProductionLaborByCropsRequest = this.workbookService.getTransplantProductionLaborByCrops(this.workbookID);

    forkJoin([this.getWorkbookRequest, this.getTransplantProductionInformationDtosRequest, this.getTransplantProductionLaborActivityDtosRequest, this.getTransplantProductionLaborByCropsRequest]).subscribe(([workbookDto, transplantProductionInformationDtos, transplantProductionLaborActivityDtos, transplantProductionLaborByCrops]: [WorkbookDto, TransplantProductionInformationDto[], TransplantProductionLaborActivityDto[], TransplantProductionLaborActivityByCropDto[]]) => {
      this.workbook = workbookDto;
      this.transplantProductionInformationDtos = transplantProductionInformationDtos;
      this.transplantProductionLaborActivityDtos = transplantProductionLaborActivityDtos;
      this.transplantProductionLaborByCropDtos = transplantProductionLaborByCrops;
      this.defineColumnDefs();
      this.cdr.markForCheck();
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'TransplantProductionLaborActivityID',
      textField: 'TransplantProductionLaborActivityName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Crop', 
        field: 'TransplantProductionInformation.Crop.CropName',
        editable: false,
/*         valueFormatter: function (params) {
          return params.value.CropName;
        },
        valueSetter: params => {
          params.data.Crop = this.transplantProductionInformationDtos.find(element => {
            return element.CropName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.Crop.CropName;
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.transplantProductionInformationDtos.map(x => x.CropName)
        },
        cellRendererFramework: EditableRendererComponent, */
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'TP Labor Activity', 
        field: 'TransplantProductionLaborActivity',
        editable: true,
        valueFormatter: function (params) {
          return params.value.TransplantProductionLaborActivityName;
        },
        valueSetter: params => {
          params.data.TransplantProductionLaborActivity = this.transplantProductionLaborActivityDtos.find(element => {
            return element.TransplantProductionLaborActivityName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.TransplantProductionLaborActivity.TransplantProductionLaborActivityName;
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.transplantProductionLaborActivityDtos.map(x => x.TransplantProductionLaborActivityName)
        },
        cellRendererFramework: EditableRendererComponent,
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Phase', 
        field: 'TransplantProductionInformation.Phase.PhaseDisplayName',
        editable: false,
/*         valueFormatter: function (params) {
          return params.value.PhaseDisplayName;
        },
        valueSetter: params => {
          params.data.Phase = this.phaseDtos.find(element => {
            return element.PhaseDisplayName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.Phase.PhaseDisplayName;
        },
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.phaseDtos.map(x => x.PhaseDisplayName)
        },
        cellRendererFramework: EditableRendererComponent, */
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Occurrences', 
        field: 'Occurrences',
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
      },
      {
        headerName: 'Delete', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.TransplantProductionLaborActivityByCropID, ObjectDisplayName: null };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete this record?`)) {
              componentScope.deleteTransplantProductionLaborByCrop(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteTransplantProductionLaborByCrop(transplantProductionLaborByCropID: number) {
    this.deleteTransplantProductionLaborByCropRequest = this.workbookService.deleteTransplantProductionLaborByCrop(this.workbookID, transplantProductionLaborByCropID).subscribe(transplantProductionLaborByCropDtos => {
      this.transplantProductionLaborByCropDtos = transplantProductionLaborByCropDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Transplant Production Labor By Crop", AlertContext.Success));
      this.cdr.detectChanges();
      this.gridApi.redrawRows();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateTransplantProductionLaborByCropRequest = this.workbookService.updateTransplantProductionLaborByCrop(dtoToPost).subscribe(transplantProductionLaborByCrop => {
      data.node.setData(transplantProductionLaborByCrop);
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

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    if (this.getWorkbookRequest && this.getWorkbookRequest.unsubscribe) {
      this.getWorkbookRequest.unsubscribe();
    }
    if (this.addTransplantProductionLaborByCropRequest && this.addTransplantProductionLaborByCropRequest.unsubscribe) {
      this.addTransplantProductionLaborByCropRequest.unsubscribe();
    }
    if (this.getTransplantProductionLaborByCropsRequest && this.getTransplantProductionLaborByCropsRequest.unsubscribe) {
      this.getTransplantProductionLaborByCropsRequest.unsubscribe();
    }
    if (this.updateTransplantProductionLaborByCropRequest && this.updateTransplantProductionLaborByCropRequest.unsubscribe) {
      this.updateTransplantProductionLaborByCropRequest.unsubscribe();
    }
    if (this.deleteTransplantProductionLaborByCropRequest && this.deleteTransplantProductionLaborByCropRequest.unsubscribe) {
      this.deleteTransplantProductionLaborByCropRequest.unsubscribe();
    }
    if (this.getTransplantProductionInformationDtosRequest && this.getTransplantProductionInformationDtosRequest.unsubscribe) {
      this.getTransplantProductionInformationDtosRequest.unsubscribe();
    }
    if (this.getTransplantProductionLaborActivityDtosRequest && this.getTransplantProductionLaborActivityDtosRequest.unsubscribe) {
      this.getTransplantProductionLaborActivityDtosRequest.unsubscribe();
    }

    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(transplantProductionLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addTransplantProductionLaborByCropRequest = this.workbookService.addTransplantProductionLaborByCrop(this.model).subscribe(response => {
      var transactionRows = this.gridApi.applyTransaction({add: response });
      this.gridApi.flashCells({ rowNodes: transactionRows.add });
      this.isLoadingSubmit = false;
      if(response.length > 0){
        this.alertService.pushAlert(new Alert(`Successfully added ${response.length} Transplant Production Labor(s) for Crop '${response[0].TransplantProductionInformation.Crop.CropName}'.`, AlertContext.Success));
      }else{
        this.alertService.pushAlert(new Alert(`No Transplant Production Labor By Crop was added.`, AlertContext.Info));
      }
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new TransplantProductionLaborByCropCreateDto({WorkbookID: this.workbookID});
  }

}