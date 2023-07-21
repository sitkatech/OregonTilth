import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserDetailedDto } from 'src/app/shared/models';
import { PageTreeDto } from 'src/app/shared/models/page/page-tree-dto';
import { PageService } from 'src/app/shared/services/page-service';

@Component({
  selector: 'oregontilth-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  private pageID: number;
  public page: PageTreeDto;
  public displayedContent: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private pageService: PageService,
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {

    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;

      this.pageID = parseInt(this.route.snapshot.paramMap.get("pageId"));
      this.pageService.getPage(this.pageID).subscribe(page => {
        this.page = page;
        this.displayedContent = this.sanitizer.bypassSecurityTrustHtml(this.page.PageContent);
        
        
      })

     
    });
  }

}
