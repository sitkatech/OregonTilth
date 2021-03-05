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

@Component({
  selector: 'new-workbook',
  templateUrl: './new-workbook.component.html',
  styleUrls: ['./new-workbook.component.scss']
})
export class NewWorkbookComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private userService: UserService,
    private utilityFunctionsService: UtilityFunctionsService, 
    private decimalPipe: DecimalPipe,
    private datePipe: DatePipe,
    private workbookService: WorkbookService) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public columnDefs: ColDef[];
  public richTextTypeID : number = CustomRichTextType.PlatformOverview;
  public model: WorkbookDto;
  public roles: Array<RoleDto>;
  public isLoadingSubmit: boolean = false;
  private getWorkbooksRequest: any;
  public workbooks: WorkbookDto[];

  onSubmit(editUserForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;

    this.userService.updateUser(this.currentUser.UserID, this.model)
      .subscribe(response => {
        this.isLoadingSubmit = false;
        // this.router.navigateByUrl("/users/" + this.userID).then(x => {
        //   this.alertService.pushAlert(new Alert("The user was successfully updated.", AlertContext.Success));
        // });
      }
        ,
        error => {
          this.isLoadingSubmit = false;
          this.cdr.detectChanges();
        }
      );
  }

  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      
      this.getWorkbooksRequest = this.workbookService.getWorkbooks(this.currentUser).subscribe(workbooks => {
        this.workbooks = workbooks;
      });

      let _datePipe = this.datePipe;
      this.columnDefs = [
        {
          headerName: 'Name', valueGetter: function (params: any) {
            return { LinkValue: params.data.WorkbookID, LinkDisplay: params.data.WorkbookName };
          }, cellRendererFramework: LinkRendererComponent,
          cellRendererParams: { inRouterLink: "/workbooks/" },
          filterValueGetter: function (params: any) {
            return params.data.WorkbookName;
          },
          comparator: function (id1: any, id2: any) {
            let link1 = id1.LinkDisplay;
            let link2 = id2.LinkDisplay;
            if (link1 < link2) {
              return -1;
            }
            if (link1 > link2) {
              return 1;
            }
            return 0;
          },
          sortable: true, filter: true, width: 170
        },
        {
          headerName: 'Create Date', field: 'CreateDate', valueFormatter: function (params) {
            return _datePipe.transform(params.value, "M/d/yyyy")
          },
          filterValueGetter: function (params: any) {
            return _datePipe.transform(params.data.Date, "M/d/yyyy");
          },
          filterParams: {
            // provide comparator function
            comparator: function (filterLocalDate, cellValue) {
              var dateAsString = cellValue;
              if (dateAsString == null) return -1;
              var cellDate = Date.parse(dateAsString);
              const filterLocalDateAtMidnight = filterLocalDate.getTime();
              if (filterLocalDateAtMidnight == cellDate) {
                return 0;
              }
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              }
              if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
            }
          },
          comparator: function (id1: any, id2: any) {
            if (id1 < id2) {
              return -1;
            }
            if (id1 > id2) {
              return 1;
            }
            return 0;
          },
          sortable: true, filter: 'agDateColumnFilter', width: 145
        },
      ];
        
      this.columnDefs.forEach(x => {
        x.resizable = true;
      });

    });
  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    this.getWorkbooksRequest.unsubscribe();
    this.authenticationService.dispose();
    this.cdr.detach();
  }

}
