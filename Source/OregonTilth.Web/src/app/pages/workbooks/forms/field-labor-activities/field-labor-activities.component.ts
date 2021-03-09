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
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { FieldLaborActivityDto } from 'src/app/shared/models/generated/field-labor-activity-dto';
import { FieldLaborActivityCreateDto } from 'src/app/shared/models/forms/field-labor-activities/field-labor-activity-create-dto';
import { FieldLaborActivityCategoryDto } from 'src/app/shared/models/generated/field-labor-activity-category-dto';
import { LookupTablesService } from 'src/app/services/lookup-tables/lookup-tables.service';

@Component({
  selector: 'field-labor-activities',
  templateUrl: './field-labor-activities.component.html',
  styleUrls: ['./field-labor-activities.component.scss']
})
export class FieldLaborActivitiesComponent implements OnInit {

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
  
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;
  private addFieldLaborActivityRequest: any;
  public model: FieldLaborActivityCreateDto;


  public fieldLaborActivityCategories: Array<FieldLaborActivityCategoryDto>;
  private getFieldLaborActivityCategoriesRequest: any;

  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.model = new FieldLaborActivityCreateDto({WorkbookID: this.workbookID});
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID).subscribe(workbook => {
        this.workbook = workbook;
      })

      this.getFieldLaborActivityCategoriesRequest = this.lookupTablesService.getFieldLaborActivityCategories().subscribe(result => {
        this.fieldLaborActivityCategories = result;
      })

      this.getFieldLaborActivitiesRequest = this.workbookService.getFieldLaborActivities(this.workbookID).subscribe(result => {
        this.fieldLaborActivities = result;
      })

      
    });
  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    if (this.getWorkbookRequest && this.getWorkbookRequest.unsubscribe) {
      this.getWorkbookRequest.unsubscribe();
    }
    if (this.addFieldLaborActivityRequest && this.addFieldLaborActivityRequest.unsubscribe) {
      this.addFieldLaborActivityRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(fieldLaborActivityForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;
    this.addFieldLaborActivityRequest = this.workbookService.addFieldLaborActivity(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      
      this.alertService.pushAlert(new Alert("Successfully added Field Labor Activity.", AlertContext.Success));
      
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

}
