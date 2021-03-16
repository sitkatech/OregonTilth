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
import { FieldInputByCostDto } from 'src/app/shared/models/generated/field-input-by-cost-dto';
import { FieldInputByCostCreateDto } from 'src/app/shared/models/forms/field-input-by-cost/field-input-by-cost-create-dto';
import { FieldUnitTypeDto } from 'src/app/shared/models/generated/field-unit-type-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';

@Component({
  selector: 'field-input-costs',
  templateUrl: './field-input-costs.component.html',
  styleUrls: ['./field-input-costs.component.scss']
})
export class FieldInputCostsComponent implements OnInit {

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
  public richTextTypeID : number = CustomRichTextType.FieldInputCostForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addFieldInputByCostRequest: any;
  public model: FieldInputByCostCreateDto;

  public getFieldInputCostsRequest: any;
  public fieldInputByCosts: FieldInputByCostDto[];

  public fieldUnitTypes: Array<FieldUnitTypeDto>;
  private getFieldUnitTypesRequest: any;

  private updateFieldInputByCostRequest: any;
  private deleteFieldInputByCostRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new FieldInputByCostCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getFieldUnitTypesRequest = this.lookupTablesService.getFieldUnitTypes();
      this.getFieldInputCostsRequest = this.workbookService.getFieldInputCosts(this.workbookID);

      forkJoin([this.getWorkbookRequest, this.getFieldUnitTypesRequest, this.getFieldInputCostsRequest]).subscribe(([workbook, fieldUnitTypes, fieldInputCosts]: [WorkbookDto, FieldUnitTypeDto[], FieldInputByCostDto[]] ) => {
          this.workbook = workbook;
          this.fieldUnitTypes = fieldUnitTypes;
          this.fieldInputByCosts = fieldInputCosts;
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Field Input', 
        field: 'FieldInputByCostName',
        editable: true,
        cellEditor: 'agTextCellEditor',
        sortable: true, 
        filter: true,
      },
      {
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
      },
      {
        headerName: 'Delete', field: 'FieldInputByCostID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.FieldInputByCostID, ObjectDisplayName: params.data.FieldInputByCostName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Field Input?`)) {
              componentScope.deleteFieldInputByCost(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteFieldInputByCost(fieldInputByCostID: number) {
    this.deleteFieldInputByCostRequest = this.workbookService.deleteFieldInputByCost(this.workbookID, fieldInputByCostID).subscribe(fieldInputByCostDtos => {
      this.fieldInputByCosts = fieldInputByCostDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Field Input Cost", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateFieldInputByCostRequest = this.workbookService.updateFieldInputByCost(dtoToPost).subscribe(fieldInputCost => {
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Field Input Cost", AlertContext.Success));
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
    if (this.addFieldInputByCostRequest && this.addFieldInputByCostRequest.unsubscribe) {
      this.addFieldInputByCostRequest.unsubscribe();
    }
    if (this.getFieldInputCostsRequest && this.getFieldInputCostsRequest.unsubscribe) {
      this.getFieldInputCostsRequest.unsubscribe();
    }
    if (this.getFieldUnitTypesRequest && this.getFieldUnitTypesRequest.unsubscribe) {
      this.getFieldUnitTypesRequest.unsubscribe();
    }
    if (this.updateFieldInputByCostRequest && this.updateFieldInputByCostRequest.unsubscribe) {
      this.updateFieldInputByCostRequest.unsubscribe();
    }
    if (this.deleteFieldInputByCostRequest && this.deleteFieldInputByCostRequest.unsubscribe) {
      this.deleteFieldInputByCostRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldInputCostForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addFieldInputByCostRequest = this.workbookService.addFieldInputByCost(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.fieldInputByCosts = response;
      this.alertService.pushAlert(new Alert("Successfully added Field Input Cost.", AlertContext.Success));
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new FieldInputByCostCreateDto({WorkbookID: this.workbookID, FieldUnitTypeID: this.model.FieldUnitTypeID});
  }

}

