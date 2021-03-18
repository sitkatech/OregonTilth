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
import { TransplantProductionInformationCreateDto } from 'src/app/shared/models/forms/transplant-production-information/transplant-production-information-create-dto';
import { TransplantProductionInformationDto } from 'src/app/shared/models/generated/transplant-production-information-dto';
import { PhaseDto } from 'src/app/shared/models/generated/phase-dto';
import { TransplantProductionTrayTypeDto } from 'src/app/shared/models/generated/transplant-production-tray-type-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';

@Component({
  selector: 'transplant-production-information',
  templateUrl: './transplant-production-information.component.html',
  styleUrls: ['./transplant-production-information.component.scss']
})
export class TransplantProductionInformationComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private route: ActivatedRoute) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.CropsForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;

  public model: TransplantProductionInformationCreateDto;
  private addTpInfoRequest: any;

  public getTpInfoDtosRequest: any;
  public transplantProductionInformationDtos: TransplantProductionInformationDto[];

  private updateTpInfoRequest: any;
  private deleteTpInfoRequest: any;


  private getCropsRequest: any;
  public cropDtos: CropDto[];

  private getPhasesRequest: any;
  public phaseDtos: PhaseDto[];

  private getTrayTypesRequest: any;
  public tpTrayTypeDtos: TransplantProductionTrayTypeDto[];

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new TransplantProductionInformationCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getTpInfoDtosRequest = this.workbookService.getTransplantProductionInformationDtos(this.workbookID);

      this.getCropsRequest = this.workbookService.getCrops(this.workbookID);
      this.getPhasesRequest = this.lookupTablesService.getPhases();
      this.getTrayTypesRequest = this.workbookService.getTransplantProductionTrayTypes(this.workbookID);


      forkJoin([this.getWorkbookRequest, this.getTpInfoDtosRequest, this.getCropsRequest, this.getPhasesRequest, this.getTrayTypesRequest]).subscribe(([workbook, tpInfoDtos, cropDtos, phaseDtos, trayTypeDtos]: [WorkbookDto, TransplantProductionInformationDto[], CropDto[], PhaseDto[], TransplantProductionTrayTypeDto[]] ) => {
          this.workbook = workbook;
          this.transplantProductionInformationDtos = tpInfoDtos;
          this.cropDtos = cropDtos;
          this.phaseDtos = phaseDtos;
          this.tpTrayTypeDtos = trayTypeDtos;
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Crop', 
        field: 'Crop.CropName',
        editable: true,
        cellEditor: 'agTextCellEditor',
        sortable: true, 
        filter: true
      },
      {
        headerName: 'Delete', field: 'CropID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.CropID, ObjectDisplayName: params.data.CropName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Crop?`)) {
              componentScope.deleteTransplantProductionInformation(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteTransplantProductionInformation(tpInfoID: number) {
    this.deleteTpInfoRequest = this.workbookService.deleteTransplantProductionInformation(this.workbookID, tpInfoID).subscribe(tpInfoDtos => {
      this.transplantProductionInformationDtos = tpInfoDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Transplant Production Information", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateTpInfoRequest = this.workbookService.updateTransplantProductionInformation(dtoToPost).subscribe(tpInfoDto => {
      data.node.setData(tpInfoDto);
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Transplant Production Information.", AlertContext.Success));
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
    if (this.addTpInfoRequest && this.addTpInfoRequest.unsubscribe) {
      this.addTpInfoRequest.unsubscribe();
    }
    if (this.getTpInfoDtosRequest && this.getTpInfoDtosRequest.unsubscribe) {
      this.getTpInfoDtosRequest.unsubscribe();
    }
    if (this.updateTpInfoRequest && this.updateTpInfoRequest.unsubscribe) {
      this.updateTpInfoRequest.unsubscribe();
    }
    if (this.deleteTpInfoRequest && this.deleteTpInfoRequest.unsubscribe) {
      this.deleteTpInfoRequest.unsubscribe();
    }
    if (this.getCropsRequest && this.getCropsRequest.unsubscribe) {
      this.getCropsRequest.unsubscribe();
    }
    if (this.getPhasesRequest && this.getPhasesRequest.unsubscribe) {
      this.getPhasesRequest.unsubscribe();
    }
    if (this.getTrayTypesRequest && this.getTrayTypesRequest.unsubscribe) {
      this.getTrayTypesRequest.unsubscribe();
    }

    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addTpInfoRequest = this.workbookService.addTransplantProductionInformation(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.transplantProductionInformationDtos = response;
      this.alertService.pushAlert(new Alert("Successfully added Transplant Production Information.", AlertContext.Success));
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new TransplantProductionInformationCreateDto({WorkbookID: this.workbookID});
  }

}

