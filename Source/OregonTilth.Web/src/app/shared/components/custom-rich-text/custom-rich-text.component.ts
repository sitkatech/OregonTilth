import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CustomRichTextService } from '../../services/custom-rich-text.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserDetailedDto } from '../../models/user/user-detailed-dto';
import { CustomRichTextDetailedDto } from '../../models/custom-rich-text-detailed-dto';
import { AlertService } from '../../services/alert.service';
import { Alert } from '../../models/alert';
import { AlertContext } from '../../models/enums/alert-context.enum';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EditorComponent } from '@tinymce/tinymce-angular';
import TinyMCEHelpers from '../../helpers/tiny-mce-helpers';

@Component({
  selector: 'custom-rich-text',
  templateUrl: './custom-rich-text.component.html',
  styleUrls: ['./custom-rich-text.component.scss']
})
export class CustomRichTextComponent implements OnInit, AfterViewChecked {
  @Input() customRichTextTypeID: number;
  public customRichTextContent: SafeHtml;
  public isLoading: boolean = true;
  public isEditing: boolean = false;
  public isEmptyContent: boolean = false;
  public watchUserChangeSubscription: any;
  public editedContent: string;

  currentUser: UserDetailedDto;
  @ViewChild('tinyMceEditor') tinyMceEditor: EditorComponent;
  public tinyMceConfig: object;


  constructor(private customRichTextService: CustomRichTextService,
    private authenticationService: AuthenticationService,
    private cdr: ChangeDetectorRef,
    private alertService: AlertService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.cdr.detectChanges();
    });

    this.customRichTextService.getCustomRichText(this.customRichTextTypeID).subscribe(x => {
      this.customRichTextContent = this.sanitizer.bypassSecurityTrustHtml(x.CustomRichTextContent);
      this.isEmptyContent = x.IsEmptyContent;
      this.editedContent = x.CustomRichTextContent;
      this.isLoading = false;
    });
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    this.initalizeEditor();
  }

  initalizeEditor() {
    
    if (!this.isLoading && this.isEditing) {
      console.log('hello?')
      this.tinyMceConfig = TinyMCEHelpers.DefaultInitConfig(
        this.tinyMceEditor
      );
    }
  }
  
  public showEditButton(): boolean {
    var canShowEditButton = this.authenticationService.isCurrentUserAnAdministrator();
    return canShowEditButton;
  }

  public enterEdit(): void {
    this.isEditing = true;
  }

  public cancelEdit(): void {
    this.isEditing = false;
  }

  public saveEdit(): void {
    this.isEditing = false;
    this.isLoading = true;
    const updateDto = new CustomRichTextDetailedDto({ CustomRichTextContent: this.editedContent });
    this.customRichTextService.updateCustomRichText(this.customRichTextTypeID, updateDto).subscribe(x => {
      this.customRichTextContent = this.sanitizer.bypassSecurityTrustHtml(x.CustomRichTextContent);
      this.editedContent = x.CustomRichTextContent;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      this.alertService.pushAlert(new Alert("There was an error updating the rich text content", AlertContext.Danger, true));
    });
  }
  
 
}

