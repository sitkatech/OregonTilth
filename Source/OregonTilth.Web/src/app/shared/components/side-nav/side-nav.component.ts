import { Component, OnInit, HostListener, ChangeDetectorRef, OnDestroy, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserDetailedDto } from '../../models';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PageService } from '../../services/page-service';
import { PageTreeDto } from '../../models/page/page-tree-dto';
import { WorkbookService } from 'src/app/services/workbook/workbook.service';
import { WorkbookDto } from '../../models/generated/workbook-dto';
import { forkJoin } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
    private watchUserChangeSubscription: any;
    private currentUser: UserDetailedDto;
    public workbookID: number;
    public navigationOpen: boolean = true;
    private sideNavMinWidth: number = 990;
    private screenWidth: number = null;
    public allPages: PageTreeDto[];
    public rootPages: PageTreeDto[];
    public activePanelID: any = 'workbook';
    public userWorkbooks: WorkbookDto[];
    private isNavigatingWorkbook: boolean;

    @HostListener('window:resize', ['$event.target.innerWidth'])
    onResize(width) {
        this.navigationOpen = width > this.sideNavMinWidth;
        this.screenWidth = width;
    }

    onClickedOutside(e: Event) {
      if(this.navigationOpen && this.screenWidth < this.sideNavMinWidth){
        this.navigationOpen = false;
      }
    }

    constructor(
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router,
        private cdr: ChangeDetectorRef,
        private pageService: PageService,
        private workbookService: WorkbookService) {
            this.navigationOpen = window.innerWidth > this.sideNavMinWidth;
    }

  ngOnInit() {
    this.initWorkbookIDNavigation();
    
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
        this.currentUser = currentUser;
        forkJoin([this.workbookService.getWorkbooks(currentUser), this.pageService.listAllPages()]).subscribe(([workbooks, pages]: [WorkbookDto[], PageTreeDto[]]) => {
          this.userWorkbooks = workbooks;
          this.allPages = pages;
          this.rootPages = pages.filter(x => !x.ParentPage);
          var pageID = parseInt(this.route.snapshot.paramMap.get("pageId"));
          if(pageID) {
            var rootPage = this.allPages.find(x => x.PageID == pageID)
            this.activePanelID = rootPage.ParentPage ? ['page_' + rootPage.ParentPage.PageID] : ['page_' + pageID];
          }
        });
    });
  }

  initWorkbookIDNavigation() {
    this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.setCurrentWorkbookID(this.workbookID);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) => {
      var workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      this.setCurrentWorkbookID(workbookID);
    });
  }

  switchWorkbooks(workbookID: number) {
    if(this.isNavigatingWorkbook){
      var path = this.route.snapshot.routeConfig.path.replace(":id", workbookID.toString())
      this.router.navigate([path]);
    } else {
      this.router.navigate(["/workbooks", workbookID]);
    }
  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  toggleWorkbookNavigation() {
    this.navigationOpen = !this.navigationOpen;
  }

  setCurrentWorkbookID(workbookID: number) {
    if(workbookID) {
      this.isNavigatingWorkbook = true;
      this.workbookID = workbookID;
    } else {
      this.isNavigatingWorkbook = false;
      this.workbookID = null;
    }
  }
}
