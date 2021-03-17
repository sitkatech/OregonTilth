import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserDetailedDto } from 'src/app/shared/models';
import { CustomRichTextType } from 'src/app/shared/models/enums/custom-rich-text-type.enum';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilityFunctionsService } from 'src/app/services/utility-functions.service';
import { UserService } from 'src/app/services/user/user.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WorkbookService } from 'src/app/services/workbook/workbook.service';
import { WorkbookDto } from 'src/app/shared/models/generated/workbook-dto';
import { ColDef } from 'ag-grid-community';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/shared/models/alert';
import { AlertContext } from 'src/app/shared/models/enums/alert-context.enum';
import { forkJoin } from 'rxjs';
import { ButtonRendererComponent } from 'src/app/shared/components/ag-grid/button-renderer/button-renderer.component';
import { CropCreateDto } from 'src/app/shared/models/forms/crops/crop-create-dto';
import { CropDto } from 'src/app/shared/models/generated/crop-dto';
import { FieldLaborActivityDto } from 'src/app/shared/models/generated/field-labor-activity-dto';
import { FieldStandardTimeSummaryDto } from 'src/app/shared/models/forms/field-standard-times/field-standard-time-summary-dto';

@Component({
  selector: 'field-standard-times',
  templateUrl: './field-standard-times.component.html',
  styleUrls: ['./field-standard-times.component.scss']
})
export class FieldStandardTimesComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, 
    private authenticationService: AuthenticationService, 
    private workbookService: WorkbookService,
    private alertService: AlertService,
    private route: ActivatedRoute) { }

  private watchUserChangeSubscription: any;
  private currentUser: UserDetailedDto;
  public workbook: WorkbookDto;
  public richTextTypeID : number = CustomRichTextType.FieldStandardTimesForm;
  public isLoadingSubmit: boolean = false;
  private workbookID: number;
  private getWorkbookRequest: any;


  public getFieldLaborActivitiesRequest: any;
  public fieldLaborActivities: FieldLaborActivityDto[];

  public getFieldStandardTimesRequest: any;
  public fieldStandardTimes: FieldStandardTimeSummaryDto[];

  public columnDefs: ColDef[];
 
  ngOnInit() {
    this.watchUserChangeSubscription = this.authenticationService.currentUserSetObservable.subscribe(currentUser => {
      this.currentUser = currentUser;
      this.workbookID = parseInt(this.route.snapshot.paramMap.get("id"));
      
      this.getWorkbookRequest = this.workbookService.getWorkbook(this.workbookID);
      this.getFieldLaborActivitiesRequest = this.workbookService.getFieldLaborActivities(this.workbookID);
      this.getFieldStandardTimesRequest = this.workbookService.getFieldStandardTimes(this.workbookID);

      forkJoin([this.getWorkbookRequest, this.getFieldLaborActivitiesRequest, this.getFieldStandardTimesRequest]).subscribe(([workbook, fieldLaborActivities, fieldStandardTimes]: [WorkbookDto, FieldLaborActivityDto[], FieldStandardTimeSummaryDto[]] ) => {
          this.workbook = workbook;
          this.fieldLaborActivities = fieldLaborActivities;
          this.fieldStandardTimes = fieldStandardTimes;
          this.defineColumnDefs();
          this.cdr.markForCheck();
      });

    });
  }

  defineColumnDefs() {
    var componentScope = this;
    this.columnDefs = [
      {
        headerName: 'Field Labor Activity', 
        field: 'FieldLaborActivityName',
        // editable: true,
        // cellEditor: 'agPopupTextCellEditor',
        sortable: true, 
        filter: true
      },
      {
        headerName: '',  
        valueGetter: function (params: any) {
          return { ButtonText: 'Start', CssClasses: "btn btn-success btn-sm", PrimaryKey: params.data.FieldLaborActivityID, ObjectDisplayName: params.data.FieldLaborActivityName };
        }, 
        cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: { 
          clicked: function(field: any) {
            if(confirm(`Are you sure you want to delete the ${field.ObjectDisplayName} Crop?`)) {
              componentScope.deleteCrop(field.PrimaryKey)
            }
          }
          },
        width: 100, autoHeight:true
      },
      {
        headerName: 'Time Studies', 
        field: 'FieldLaborActivityName',
        // editable: true,
        // cellEditor: 'agPopupTextCellEditor',
        sortable: true, 
        filter: true
      },
    ]
  }

  deleteCrop(cropID: number) {
    // this.deleteCropRequest = this.workbookService.deleteCrop(this.workbookID, cropID).subscribe(cropDtos => {
    //   this.fieldLaborActivities = cropDtos;
    //   this.alertService.pushAlert(new Alert("Successfully deleted Crop", AlertContext.Success));
    //   this.cdr.detectChanges();
    // }, error => {

    // })
  }

  onCellValueChanged(data: any) {
    // var dtoToPost = data.data;

    // this.updateCropRequest = this.workbookService.updateCrop(dtoToPost).subscribe(crop => {
    //   data.node.setData(crop);
    //   this.isLoadingSubmit = false;
    //   this.alertService.pushAlert(new Alert("Successfully updated Crop.", AlertContext.Success));
    // }, error => {
    //   this.isLoadingSubmit = false;
    //   this.cdr.detectChanges();
    // })

  }

  ngOnDestroy() {
    this.watchUserChangeSubscription.unsubscribe();
    if (this.getWorkbookRequest && this.getWorkbookRequest.unsubscribe) {
      this.getWorkbookRequest.unsubscribe();
    }
    
    if (this.getFieldLaborActivitiesRequest && this.getFieldLaborActivitiesRequest.unsubscribe) {
      this.getFieldLaborActivitiesRequest.unsubscribe();
    }
    
    this.authenticationService.dispose();
    this.cdr.detach();
  }

  



}

