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
import { FieldLaborActivityDto } from 'src/app/shared/models/generated/field-labor-activity-dto';
import { FieldLaborActivityCreateDto } from 'src/app/shared/models/forms/field-labor-activities/field-labor-activity-create-dto';
import { FieldLaborActivityCategoryDto } from 'src/app/shared/models/generated/field-labor-activity-category-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { TransplantProductionLaborActivityCreateDto } from 'src/app/shared/models/forms/transplant-production-labor-activities/transplant-production-labor-activity-create-dto';
import { TransplantProductionLaborActivityDto } from 'src/app/shared/models/generated/transplant-production-labor-activity-dto';

@Component({
  selector: 'transplant-production-labor-activities',
  templateUrl: './transplant-production-labor-activities.component.html',
  styleUrls: ['./transplant-production-labor-activities.component.scss']
})
export class TransplantProductionLaborActivitiesComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private lookupTablesService: LookupTablesService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.TPLaborActivityForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addTransplantProductionLaborActivityRequest: any;
  public model: TransplantProductionLaborActivityCreateDto;

  public getTransplantProductionLaborActivitiesRequest: any;
  public transplantProductionLaborActivities: TransplantProductionLaborActivityDto[];

  private updateTransplantProductionLaborActivityRequest: any;
  private deleteTransplantProductionLaborActivityRequest: any;

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new TransplantProductionLaborActivityCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getTransplantProductionLaborActivitiesRequest = this.workbookService.getTransplantProductionLaborActivities(this.workbookID);

      forkJoin([this.getWorkbookRequest,  this.getTransplantProductionLaborActivitiesRequest]).subscribe(([workbook,  fieldLaborActivities]: [WorkbookDto,  TransplantProductionLaborActivityDto[]] ) => {
          this.workbook = workbook;
          this.transplantProductionLaborActivities = fieldLaborActivities;
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Transplant Production Labor Activity', 
        field: 'TransplantProductionLaborActivityName',
        editable: true,
        cellEditor: 'agPopupTextCellEditor',
        sortable: true, 
        filter: true,
      },
      {
        headerName: 'Delete', field: 'TransplantProductionLaborActivityID', valueGetter: function (params: any) {
          return { ButtonText: 'Delete', CssClasses: "btn btn-fresca btn-sm", PrimaryKey: params.data.TransplantProductionLaborActivityID, ObjectDisplayName: params.data.TransplantProductionLaborActivityName };
        }, cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Transplant Production Labor Activity?`)) {
              componentScope.deleteTransplantProductionLaborActivity(field.PrimaryKey)
            }
          }
          },
        sortable: true, filter: true, width: 100, autoHeight:true
      },
    ]
  }

  deleteTransplantProductionLaborActivity(fieldLaborActivityID: number) {
    this.deleteTransplantProductionLaborActivityRequest = this.workbookService.deleteTransplantProductionLaborActivity(this.workbookID, fieldLaborActivityID).subscribe(transplantProductionLaborActivityDtos => {
      this.transplantProductionLaborActivities = transplantProductionLaborActivityDtos;
      this.alertService.pushAlert(new Alert("Successfully deleted Transplant Production Labor Activity", AlertContext.Success));
      this.cdr.detectChanges();
    }, error => {

    })
  }

  onCellValueChanged(data: any) {
    var dtoToPost = data.data;

    this.updateTransplantProductionLaborActivityRequest = this.workbookService.updateTransplantProductionLaborActivity(dtoToPost).subscribe(fieldLaborActivity => {
      data.node.setData(fieldLaborActivity);
      this.isLoadingSubmit = false;
      this.alertService.pushAlert(new Alert("Successfully updated Transplant Production Labor Activity", AlertContext.Success));
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
    if (this.addTransplantProductionLaborActivityRequest && this.addTransplantProductionLaborActivityRequest.unsubscribe) {
      this.addTransplantProductionLaborActivityRequest.unsubscribe();
    }
    if (this.getTransplantProductionLaborActivitiesRequest && this.getTransplantProductionLaborActivitiesRequest.unsubscribe) {
      this.getTransplantProductionLaborActivitiesRequest.unsubscribe();
    }
    
    if (this.updateTransplantProductionLaborActivityRequest && this.updateTransplantProductionLaborActivityRequest.unsubscribe) {
      this.updateTransplantProductionLaborActivityRequest.unsubscribe();
    }
    if (this.deleteTransplantProductionLaborActivityRequest && this.deleteTransplantProductionLaborActivityRequest.unsubscribe) {
      this.deleteTransplantProductionLaborActivityRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addTransplantProductionLaborActivityRequest = this.workbookService.addTransplantProductionLaborActivity(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.transplantProductionLaborActivities = response;
      this.alertService.pushAlert(new Alert("Successfully added Transplant Production Labor Activity.", AlertContext.Success));
      this.resetForm();
      this.cdr.detectChanges();
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  resetForm() {
    this.model = new TransplantProductionLaborActivityCreateDto({WorkbookID: this.workbookID});
  }

}
