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
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { TransplantProductionInputDto } from 'src/app/shared/models/generated/transplant-production-input-dto';
import { TransplantProductionInputCreateDto } from 'src/app/shared/models/forms/transplant-production-inputs/transplant-production-input-create-dto';

@Component({
  selector: 'transplant-production-inputs',
  templateUrl: './transplant-production-inputs.component.html',
  styleUrls: ['./transplant-production-inputs.component.scss']
})
export class TransplantProductionInputsComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.TPInputForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addTransplantProductionInputRequest: any;
  public model: TransplantProductionInputCreateDto;

  public getTransplantProductionInputsRequest: any;
  public transplantProductionInputs: TransplantProductionInputDto[];

  private updateTransplantProductionInputRequest: any;
  private deleteTransplantProductionInputRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new TransplantProductionInputCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getTransplantProductionInputsRequest = this.workbookService.getTransplantProductionInputs(this.workbookID);

      forkJoin([this.getWorkbookRequest,  this.getTransplantProductionInputsRequest]).subscribe(([workbook,  tpInputs]: [WorkbookDto,  TransplantProductionInputDto[]] ) => {
          this.workbook = workbook;
          this.transplantProductionInputs = tpInputs;
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Transplant Production Input', 
        field: 'TransplantProductionInputName',
        editable: true,
        cellEditor: 'agTextCellEditor',
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Delete', field: 'TransplantProductionInputID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.TransplantProductionInputID, ObjectDisplayName: params.data.TransplantProductionInputName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Transplant Production Input?`)) {
              componentScope.deleteTransplantProductionInput(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteTransplantProductionInput(tpInputID: number) {
    this.deleteTransplantProductionInputRequest = this.workbookService.deleteTransplantProductionInput(this.workbookID, tpInputID).subscribe(transplantProductionInputDtos => {
      this.transplantProductionInputs = transplantProductionInputDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Transplant Production Input", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateTransplantProductionInputRequest = this.workbookService.updateTransplantProductionInput(dtoToPost).subscribe(tpInput => {
      data.node.setData(tpInput);
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Transplant Production Input", AlertContext.Success));
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
    if (this.addTransplantProductionInputRequest && this.addTransplantProductionInputRequest.unsubscribe) {
      this.addTransplantProductionInputRequest.unsubscribe();
    }
    if (this.getTransplantProductionInputsRequest && this.getTransplantProductionInputsRequest.unsubscribe) {
      this.getTransplantProductionInputsRequest.unsubscribe();
    }
    
    if (this.updateTransplantProductionInputRequest && this.updateTransplantProductionInputRequest.unsubscribe) {
      this.updateTransplantProductionInputRequest.unsubscribe();
    }
    if (this.deleteTransplantProductionInputRequest && this.deleteTransplantProductionInputRequest.unsubscribe) {
      this.deleteTransplantProductionInputRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addTransplantProductionInputRequest = this.workbookService.addTransplantProductionInput(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.transplantProductionInputs = response;
      this.alertService.pushAlert(new Alert("Successfully added Transplant Production Input.", AlertContext.Success));
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new TransplantProductionInputCreateDto({WorkbookID: this.workbookID});
  }

}

