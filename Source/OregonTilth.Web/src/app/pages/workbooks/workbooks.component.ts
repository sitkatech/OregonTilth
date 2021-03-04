import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilityFunctionsService } from 'src/app/services/utility-functions.service';
import { UserService } from 'src/app/services/user/user.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WorkbookService } from 'src/app/services/workbook/workbook.service';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';

@Component({
  selector: 'workbooks',
  templateUrl: './workbooks.component.html',
  styleUrls: ['./workbooks.component.scss']
})
export class WorkbooksComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private utilityFunctionsService: UtilityFunctionsService, 
    private decimalPipe: DecimalPipe,
    private datePipe: DatePipe,
    private workbookService: WorkbookService) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public richTextTypeID : number = CustomRichTextType.PlatformOverview;
  
  private getWorkbooksRequest: any;
  private workbooks: WorkbookDto[];

  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      
      this.getWorkbooksRequest = this.workbookService.getWorkbooks(this.currentUser).subscribe(workbooks => {
        this.workbooks = workbooks;
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
