import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserDetailedDto } from 'src/app/shared/models';
import { PageTreeDto } from 'src/app/shared/models/page/page-tree-dto';
import { PageService } from 'src/app/shared/services/page-service';

@Component({
  selector: 'oregontilth-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit, OnDestroy {

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  private pageID: number;
  public page: PageTreeDto;
  public displayedContent: SafeHtml;

  private paramSubscription : Subscription = Subscription.EMPTY;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private pageService: PageService,
    private sanitizer: DomSanitizer,
    ) { }


  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  ngOnInit(): void {
    


    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.paramSubscription = this.route.params.subscribe(params => {
        this.pageService.getPage(params.pageId).subscribe(page => {
          this.page = page;
          this.displayedContent = this.sanitizer.bypassSecurityTrustHtml(this.page.PageContent);
        })
      })
    });
  }

}
