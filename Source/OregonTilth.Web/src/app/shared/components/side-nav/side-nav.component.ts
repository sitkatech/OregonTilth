import { Component, OnInit, HostListener, ChangeDetectorRef, OnDestroy, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserDetailedDto } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../services/page-service';
import { PageTreeDto } from '../../models/page/page-tree-dto';

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
    public activePanelID: any;

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
        private pageService: PageService) {
            this.navigationOpen = window.innerWidth > this.sideNavMinWidth;
            
    }

    ngOnInit() {
        this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
        
        
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
            this.pageService.listAllPages().subscribe(pages => {
              this.allPages = pages;
              this.rootPages = pages.filter(x => !x.ParentPage);

              var pageID = parseInt(this.route.snapshot.paramMap.get("pageId"));
              if(pageID) {
                var rootPage = this.allPages.find(x => x.PageID == pageID)
                this.activePanelID = rootPage.ParentPage ? ['page_' + rootPage.ParentPage.PageID] : ['page_' + pageID];
              }
            })
        });
    }


  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  toggleWorkbookNavigation() {
    this.navigationOpen = !this.navigationOpen;
  }

}
