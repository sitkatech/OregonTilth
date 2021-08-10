import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RoleService } from 'src/app/services/role/role.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserDetailedDto } from 'src/app/shared/models';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { RoleDto } from 'src/app/shared/models/generated/role-dto';
import { PageTreeDto } from 'src/app/shared/models/page/page-tree-dto';
import { PageUpdateDto } from 'src/app/shared/models/page/page-update-dto';
import { UserUpdateDto } from 'src/app/shared/models/user/user-update-dto';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PageService } from 'src/app/shared/services/page-service';

@Component({
  selector: 'oregontilth-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit {
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;

  public page: PageTreeDto;
  public allPages: PageTreeDto[];

  public pageID: number;
  public model: PageUpdateDto;
  
  public isLoadingSubmit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private pageService: PageService,
  
    private cdr: ChangeDetectorRef,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;

      if (!this.authenticationService.isUserAnAdministrator(this.currentUser)) {
        this.router.navigateByUrl("/not-found")
          .then();
        return;
      }

      this.pageID = parseInt(this.route.snapshot.paramMap.get("id"));

      forkJoin(
        this.pageService.getPage(this.pageID),
        this.pageService.listAllPages()
      ).subscribe(([page, allPages]) => {
        this.page = page;
        this.allPages = allPages;
        
        var thisPageIndex = allPages.findIndex(x => x.PageID == this.page.PageID)
        this.allPages.splice(thisPageIndex,1);

        this.model = new PageUpdateDto();
        this.model.PageID = page.PageID;
        this.model.PageContent = page.Pagecontent;
        this.model.PageName = page.PageName;
        this.model.ParentPageID = page.ParentPage?.PageID;
        // this.fieldDefinitionsGrid.api.hideOverlay();
        this.cdr.detectChanges();

      });


      

      
    });
  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  onSubmit(editPageForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;

    this.pageService.updatePage(this.model)
      .subscribe(response => {
        this.isLoadingSubmit = false;
        this.router.navigateByUrl("/pages").then(x => {
          this.alertService.pushAlert(new Alert("The page was successfully updated.", AlertContext.Success));
        });
      }
        ,
        error => {
          this.isLoadingSubmit = false;
          this.cdr.detectChanges();
        }
      );
  }

 

}
