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

@Component({
  selector: 'edit-workbook',
  templateUrl: './edit-workbook.component.html',
  styleUrls: ['./edit-workbook.component.scss']
})
export class EditWorkbookComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public columnDefs: ColDef[];
  public richTextTypeID : number = CustomRichTextType.PlatformOverview;
  public model: WorkbookDto;
  public roles: Array<RoleDto>;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;

  public editWorkbookRequest: any;

  onSubmit(editWorkbookForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;

    this.editWorkbookRequest = this.workbookService.editWorkbook(this.model).subscribe(response => {
      this.isLoadingSubmit = false;
      this.router.navigateByUrl("/workbooks").then(x => {
        this.alertService.pushAlert(new Alert("Successfully edited Workbook.", AlertContext.Success));
      });
    }, error => { 
      this.isLoadingSubmit = false;
      this.cdr.detectChanges();
    });
  }

  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;

      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));

      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID).subscribe(workbook => {
        this.model = workbook;
      })
      
    });
  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    if (this.editWorkbookRequest && this.editWorkbookRequest.unsubscribe) {
      this.editWorkbookRequest.unsubscribe();
    }
    if (this.getWorkbookRequest && this.getWorkbookRequest.unsubscribe) {
      this.getWorkbookRequest.unsubscribe();
    }
    this.authenticationService.dispose();
    this.cdr.detach();
  }

}
