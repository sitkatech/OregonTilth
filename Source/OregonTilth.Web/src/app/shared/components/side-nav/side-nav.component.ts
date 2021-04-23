import { Component, OnInit, HostListener, ChangeDetectorRef, OnDestroy, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserDetailedDto } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';

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
        private cdr: ChangeDetectorRef) {
            this.navigationOpen = window.innerWidth > this.sideNavMinWidth;
            
    }

    ngOnInit() {
        this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
        this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
            this.currentUser = currentUser;
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
