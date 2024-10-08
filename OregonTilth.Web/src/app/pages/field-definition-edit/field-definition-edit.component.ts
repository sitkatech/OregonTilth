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
import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'fresca-field-definition-edit',
  templateUrl: './field-definition-edit.component.html',
  styleUrls: ['./field-definition-edit.component.scss']
})
export class FieldDefinitionEditComponent implements OnInit {
  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;

  public fieldDefinition: FieldDefinitionDto;
  public editor;

  isLoadingSubmit: boolean;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private alertService: AlertService,
      private fieldDefinitionService: FieldDefinitionService,
      private authenticationService: AuthenticationService,
      private cdr: ChangeDetectorRef,
      private breadcrumbService: BreadcrumbsService,
  ) {
  }

  ngOnInit() {
      this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
          this.currentUser = currentUser;
          const id = parseInt(this.route.snapshot.paramMap.get("id"));
          if (id) {
              this.fieldDefinitionService.getFieldDefinition(id).subscribe(fieldDefinition => {
                this.breadcrumbService.setBreadcrumbs([{label:'Labels and Definitions', routerLink:['/labels-and-definitions']},{label:`Edit "${fieldDefinition.FieldDefinitionType.FieldDefinitionTypeDisplayName}"`}]);
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
