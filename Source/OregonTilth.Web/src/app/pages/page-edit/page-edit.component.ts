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
import { CustomRichTextService } from 'src/app/shared/services/custom-rich-text.service';
import { PageService } from 'src/app/shared/services/page-service';
import { environment } from 'src/environments/environment';
import * as ClassicEditor from 'src/assets/main/ckeditor/ckeditor.js';
import { CkEditorUploadAdapter } from 'src/app/shared/CkEditorUploadAdapter';
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
  public editor;
  public Editor = ClassicEditor;

  //For media embed https://ckeditor.com/docs/ckeditor5/latest/api/module_media-embed_mediaembed-MediaEmbedConfig.html
  //Only some embeds will work, and if we want others to work we'll likely need to write some extra functions
  public ckConfig = {mediaEmbed: {previewsInData: true}};

  constructor(
    private customRichTextService: CustomRichTextService,
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
        this.allPages = allPages.filter(x => !x.ParentPage);
        
        // var thisPageIndex = allPages.findIndex(x => x.PageID == this.page.PageID)
        // this.allPages.splice(thisPageIndex,1);

        this.model = new PageUpdateDto();
        this.model.PageID = page.PageID;
        this.model.PageContent = this.page.PageContent ? this.page.PageContent : '';
        this.model.PageName = page.PageName;
        this.model.ParentPageID = page.ParentPage?.PageID;
        this.model.SortOrder = page.SortOrder;
        this.cdr.detectChanges();

      });
    });
  }

  public isUploadingImage():boolean{
    return this.editor && this.editor.isReadOnly;
  }

  // tell CkEditor to use the class below as its upload adapter
  // see https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/upload-adapter.html#how-does-the-image-upload-work
  public ckEditorReady(editor) {

    const customRichTextService = this.customRichTextService
    this.editor = editor;

    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      // disable the editor until the image comes back
      editor.isReadOnly = true;
      return new CkEditorUploadAdapter(loader, customRichTextService, environment.apiHostName, editor);
    };
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