import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserDetailedDto } from 'src/app/shared/models';
import { PageTreeDto } from 'src/app/shared/models/page/page-tree-dto';
import { PageUpdateDto } from 'src/app/shared/models/page/page-update-dto';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CustomRichTextService } from 'src/app/shared/services/custom-rich-text.service';
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

  constructor(private customRichTextService: CustomRichTextService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private pageService: PageService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private alertService: AlertService) { }

  ngOnInit(): void {

    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;

      if (!this.authenticationService.isUserAnAdministrator(this.currentUser)) {
        this.router.navigateByUrl("/not-found")
          .then();
        return;
      }

      this.pageID = parseInt(this.route.snapshot.paramMap.get("pageId"));
      this.pageService.getPage(this.pageID).subscribe(page => {
        this.page = page;
        this.displayedContent = this.sanitizer.bypassSecurityTrustHtml(this.page.PageContent);
        
        
      })

     
    });
  }

}
