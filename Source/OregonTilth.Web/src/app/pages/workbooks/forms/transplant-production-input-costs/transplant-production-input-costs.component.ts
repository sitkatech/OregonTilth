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
import { FieldUnitTypeDto } from 'src/app/shared/models/generated/field-unit-type-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { TransplantProductionInputCostCreateDto } from 'src/app/shared/models/forms/transplant-production-input-costs/transplant-production-input-cost-create-dto';
import { TransplantProductionInputCostDto } from 'src/app/shared/models/generated/transplant-production-input-cost-dto';
import { TransplantProductionInputDto } from 'src/app/shared/models/generated/transplant-production-input-dto';
import { TransplantProductionTrayTypeDto } from 'src/app/shared/models/generated/transplant-production-tray-type-dto';

@Component({
  selector: 'transplant-production-input-costs',
  templateUrl: './transplant-production-input-costs.component.html',
  styleUrls: ['./transplant-production-input-costs.component.scss']
})
export class TransplantProductionInputCostsComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private gridService: GridService,
    private router: Router,
    private route: ActivatedRoute) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.TPInputCostForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addTransplantProductionInputCostRequest: any;
  public model: TransplantProductionInputCostCreateDto;

  public getTransplantProductionInputCostsRequest: any;
  public transplantProductionInputCosts: TransplantProductionInputCostDto[];

  public transplantProductionInputs: Array<TransplantProductionInputDto>;
  private getTransplantProductionInputsRequest: any;

  public transplantProductionTrayTypes: Array<TransplantProductionTrayTypeDto>;
  private getTransplantProductionTrayTypesRequest: any;

  private updateTransplantProductionInputCostRequest: any;
  private deleteTransplantProductionInputCostRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new TransplantProductionInputCostCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getTransplantProductionInputsRequest = this.workbookService.getTransplantProductionInputs(this.workbookID);
      this.getTransplantProductionTrayTypesRequest = this.workbookService.getTransplantProductionTrayTypes(this.workbookID);
      this.getTransplantProductionInputCostsRequest = this.workbookService.getTransplantProductionInputCosts(this.workbookID);

      forkJoin([this.getWorkbookRequest, this.getTransplantProductionInputsRequest, this.getTransplantProductionTrayTypesRequest, this.getTransplantProductionInputCostsRequest]).subscribe(([workbook, tpInputs, tpTrayTypes, tpInputCosts]: [WorkbookDto, TransplantProductionInputDto[], TransplantProductionTrayTypeDto[], TransplantProductionInputCostDto[]] ) => {
          this.workbook = workbook;
          this.transplantProductionInputs = tpInputs;
          this.transplantProductionTrayTypes = tpTrayTypes;
          this.transplantProductionInputCosts = tpInputCosts;
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
        field: 'TransplantProductionInput',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.transplantProductionInputs.map(x => x.TransplantProductionInputName)
        },
        valueFormatter: function (params) {
          return params.value.TransplantProductionInputName;
        },
        valueSetter: params => {
          params.data.TransplantProductionInput = this.transplantProductionInputs.find(element => {
            return element.TransplantProductionInputName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.TransplantProductionInput.TransplantProductionInputName;
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Tray Type', 
        field: 'TransplantProductionTrayType',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.transplantProductionTrayTypes.map(x => x.TransplantProductionTrayTypeName)
        },
        valueFormatter: function (params) {
          return params.value.TransplantProductionTrayTypeName;
        },
        valueSetter: params => {
          params.data.TransplantProductionTrayType = this.transplantProductionTrayTypes.find(element => {
            return element.TransplantProductionTrayTypeName == params.newValue;
          });
          return true;
        },
        valueGetter: params => {
          return params.data.TransplantProductionTrayType.TransplantProductionTrayTypeName;
        },
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Cost Per Tray', 
        field: 'CostPerTray',
        editable: true,
        cellEditor: 'agTextCellEditor',
        valueFormatter: this.gridService.currencyFormatter,
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Notes', 
        field: 'Notes',
        editable: true,
        cellEditor: 'agTextCellEditor',
        filter: true,
        sortable: true, 
      },
      {
        headerName: 'Delete', field: 'TransplantProductionInputCostID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.TransplantProductionInputCostID, ObjectDisplayName: params.data.TransplantProductionInputCostID };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete this input cost?`)) {
              componentScope.deleteTransplantProductionInputCost(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteTransplantProductionInputCost(tpInputCost: number) {
    this.deleteTransplantProductionInputCostRequest = this.workbookService.deleteTransplantProductionInputCost(this.workbookID, tpInputCost).subscribe(tpInputCostDtos => {
      this.transplantProductionInputCosts = tpInputCostDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Transplant Production Input Cost", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateTransplantProductionInputCostRequest = this.workbookService.updateTransplantProductionInputCost(dtoToPost).subscribe(tpInputCost => {
      data.node.setData(tpInputCost);
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Transplant Production Input Cost", AlertContext.Success));
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
    if (this.addTransplantProductionInputCostRequest && this.addTransplantProductionInputCostRequest.unsubscribe) {
      this.addTransplantProductionInputCostRequest.unsubscribe();
    }
    if (this.getTransplantProductionInputCostsRequest && this.getTransplantProductionInputCostsRequest.unsubscribe) {
      this.getTransplantProductionInputCostsRequest.unsubscribe();
    }
    if (this.getTransplantProductionInputsRequest && this.getTransplantProductionInputsRequest.unsubscribe) {
      this.getTransplantProductionInputsRequest.unsubscribe();
    }
    if (this.updateTransplantProductionInputCostRequest && this.updateTransplantProductionInputCostRequest.unsubscribe) {
      this.updateTransplantProductionInputCostRequest.unsubscribe();
    }
    if (this.deleteTransplantProductionInputCostRequest && this.deleteTransplantProductionInputCostRequest.unsubscribe) {
      this.deleteTransplantProductionInputCostRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldInputCostForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addTransplantProductionInputCostRequest = this.workbookService.addTransplantProductionInputCost(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.transplantProductionInputCosts = response;
      this.alertService.pushAlert(new Alert("Successfully added Transplant Production Input Cost.", AlertContext.Success));
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new TransplantProductionInputCostCreateDto({WorkbookID: this.workbookID});
  }

}
