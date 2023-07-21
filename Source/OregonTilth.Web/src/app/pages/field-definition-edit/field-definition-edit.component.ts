import { Component, OnInit, ChangeDetectorRef, ViewChild, AfterViewChecked } from '@angular/core';
import { FieldDefinitionService } from 'src/app/shared/services/field-definition-service';
import { UserDetailedDto } from 'src/app/shared/models';
import { FieldDefinitionDto } from 'src/app/shared/models/generated/field-definition-dto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { AlertService } from 'src/app/shared/services/alert.service';
import { EditorComponent } from '@tinymce/tinymce-angular';
import TinyMCEHelpers from 'src/app/shared/helpers/tiny-mce-helpers';

@Component({
  selector: 'fresca-field-definition-edit',
  templateUrl: './field-definition-edit.component.html',
  styleUrls: ['./field-definition-edit.component.scss']
})
export class FieldDefinitionEditComponent implements OnInit, AfterViewChecked {
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;

  public fieldDefinition: FieldDefinitionDto;
  public editor;

  isLoadingSubmit: boolean;
  @ViewChild('tinyMceEditor') tinyMceEditor: EditorComponent;
  public tinyMceConfig: object;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private alertService: AlertService,
      private fieldDefinitionService: FieldDefinitionService,
      private authenticationService: AuthenticationService,
      private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    this.initalizeEditor();
  }

  initalizeEditor() {
    if (!this.isLoadingSubmit) {
      this.tinyMceConfig = TinyMCEHelpers.DefaultInitConfig(
        this.tinyMceEditor
      );
    }
  }

  ngOnInit() {
      this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
          this.currentUser = currentUser;
          const id = parseInt(this.route.snapshot.paramMap.get("id"));
          if (id) {
              this.fieldDefinitionService.getFieldDefinition(id).subscribe(fieldDefinition => {
                this.fieldDefinition = fieldDefinition;
              })
          }
      });
  }

  ngOnDestroy() {
      this.watchUserChangeSubscription.unsubscribe();
      
      this.cdr.detach();
  }

  public currentUserIsAdmin(): boolean {
      return this.authenticationService.isUserAnAdministrator(this.currentUser);
  }

  saveDefinition(): void {
    this.isLoadingSubmit = true;

    this.fieldDefinitionService.updateFieldDefinition(this.fieldDefinition)
      .subscribe(response => {
        this.isLoadingSubmit = false;
        this.router.navigateByUrl("/labels-and-definitions").then(x => {
          this.alertService.pushAlert(new Alert(`The definition for ${this.fieldDefinition.FieldDefinitionType.FieldDefinitionTypeDisplayName} was successfully updated.`, AlertContext.Success));
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
