import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilityFunctionsService } from 'src/app/services/utility-functions.service';
import { UserService } from 'src/app/services/user/user.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WorkbookService } from 'src/app/services/workbook/workbook.service';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';
import { ColDef } from 'ag-grid-community';
import { LinkRendererComponent } from 'src/app/shared/components/ag-grid/link-renderer/link-renderer.component';
import { RoleDto } from 'src/app/shared/models/generated/role-dto';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TimeStudyDto } from 'src/app/shared/models/generated/time-study-dto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeStudiesUpsertDto } from 'src/app/shared/models/forms/time-studies/time-studies-upsert-dto';

@Component({
  selector: 'time-study-modal',
  templateUrl: './time-study-modal.component.html',
  styleUrls: ['./time-study-modal.component.scss']
})
export class TimeStudyModal implements OnInit {
  @Input() timeStudies: TimeStudyDto[];
  constructor(private cdr: ChangeDetectorRef, 
    public activeModal: NgbActiveModal) { }

  private currentUser: UserDetailedDto;
  public model: TimeStudiesUpsertDto;
  public isLoadingSubmit: boolean = false;

  

  onSubmit(timeStudiesForm: HTMLFormElement): void {
    this.isLoadingSubmit = true;

  }

  ngOnInit() {

    this.model = new TimeStudiesUpsertDto({TimeStudies: this.timeStudies})
    
  }

  addTimeStudy() {
    

    this.model.TimeStudies.push(new TimeStudyDto({WorkbookID: 1, FieldLaborActivityID: 1, LaborTypeID: 1}))

  }

  removeTimeStudyAtIndex(index:number) {

    this.model.TimeStudies.splice(index,1);

  }


  ngOnDestroy() {
    
    this.cdr.detach();
  }

}
