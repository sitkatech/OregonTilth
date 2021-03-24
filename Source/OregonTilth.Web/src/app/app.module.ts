import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeIndexComponent } from './pages/home/home-index/home-index.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserInviteComponent } from './pages/user-invite/user-invite.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { AgGridModule } from 'ag-grid-angular';
import { DecimalPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { LinkRendererComponent } from './shared/components/ag-grid/link-renderer/link-renderer.component';
import { ButtonRendererComponent } from './shared/components/ag-grid/button-renderer/button-renderer.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComboSeriesVerticalComponent } from './shared/components/combo-chart/combo-series-vertical.component'
import { FontAwesomeIconLinkRendererComponent } from './shared/components/ag-grid/fontawesome-icon-link-renderer/fontawesome-icon-link-renderer.component';
import { LoginCallbackComponent } from './pages/login-callback/login-callback.component';
import { HelpComponent } from './pages/help/help.component';
import { MyDatePickerModule } from 'mydatepicker';
import { MultiLinkRendererComponent } from './shared/components/ag-grid/multi-link-renderer/multi-link-renderer.component';
import { CreateUserCallbackComponent } from './pages/create-user-callback/create-user-callback.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkbooksComponent } from './pages/workbooks/workbooks.component';
import { NewWorkbookComponent } from './pages/workbooks/new-workbook/new-workbook.component';
import { EditWorkbookComponent } from './pages/workbooks/edit-workbook/edit-workbook.component';
import { WorkbookDetailComponent } from './pages/workbooks/workbook-detail/workbook-detail.component';
import { FieldLaborActivitiesComponent } from './pages/workbooks/forms/field-labor-activities/field-labor-activities.component';
import { TransplantProductionLaborActivitiesComponent } from './pages/workbooks/forms/transplant-production-labor-activities/transplant-production-labor-activities.component';
import { MachineryComponent } from './pages/workbooks/forms/machinery/machinery.component';
import { FieldLaborByCropComponent } from './pages/workbooks/forms/field-labor-by-crop/field-labor-by-crop.component';
import { TransplantProductionLaborByCropComponent } from './pages/workbooks/forms/transplant-production-labor-by-crop/transplant-production-labor-by-crop.component';
import { CropsComponent } from './pages/workbooks/forms/crops/crops.component';
import { CropUnitsComponent } from './pages/workbooks/forms/crop-units/crop-units.component';
import { FieldInputCostsComponent } from './pages/workbooks/forms/field-input-costs/field-input-costs.component';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';
import { AppInitService } from './app.init';
import { FieldDefinitionListComponent } from './pages/field-definition-list/field-definition-list.component';
import { FieldDefinitionEditComponent } from './pages/field-definition-edit/field-definition-edit.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpErrorInterceptor } from './shared/interceptors/httpErrorInterceptor';
import { TrainingComponent } from './pages/training/training.component';
import { environment } from 'src/environments/environment';
import { AppInsightsService } from './shared/services/app-insights.service';
import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';
import { DecimalEditor } from './shared/components/ag-grid/decimal-editor/decimal-editor.component';
import { TransplantProductionInputsComponent } from './pages/workbooks/forms/transplant-production-inputs/transplant-production-inputs.component';
import { TransplantProductionTrayTypesComponent } from './pages/workbooks/forms/transplant-production-tray-types/transplant-production-tray-types.component';
import { TransplantProductionInputCostsComponent } from './pages/workbooks/forms/transplant-production-input-costs/transplant-production-input-costs.component';
import { FieldInputByCropComponent } from './pages/workbooks/forms/field-input-by-crop/field-input-by-crop.component';
import { TransplantProductionInformationComponent } from './pages/workbooks/forms/transplant-production-information/transplant-production-information.component';
import { IntegerEditor } from './shared/components/ag-grid/integer-editor/integer-editor.component';
import { FieldStandardTimesComponent } from './pages/workbooks/forms/field-standard-times/field-standard-times.component';
import { TimeStudyCellRendererComponent } from './shared/components/ag-grid/time-study-cell-renderer/time-study-cell-renderer.component';
import { TimeStudyModal } from './shared/components/ag-grid/time-study-modal/time-study-modal.component';
import { HarvestPostHarvestStandardTimesComponent } from './pages/workbooks/forms/harvest-post-harvest-standard-times/harvest-post-harvest-standard-times.component';
import { TransplantProductionStandardTimesComponent } from './pages/workbooks/forms/transplant-production-standard-times/transplant-production-standard-times.component';
import { CropSpecificInfoComponent } from './pages/workbooks/forms/crop-specific-info/crop-specific-info.component';

export function init_app(appLoadService: AppInitService, appInsightsService:  AppInsightsService) {
  return () => appLoadService.init().then(() => {
    if (environment.appInsightsInstrumentationKey) {
      appInsightsService.initAppInsights();
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    HomeIndexComponent,
    UserListComponent,
    UserInviteComponent,
    UserDetailComponent,
    UserEditComponent,
    ComboSeriesVerticalComponent,
    LoginCallbackComponent,
    HelpComponent,
    CreateUserCallbackComponent,
    AboutComponent,
    WorkbooksComponent,
    NewWorkbookComponent,
    WorkbookDetailComponent,
    FieldLaborActivitiesComponent,
    TransplantProductionLaborActivitiesComponent,
    MachineryComponent,
    FieldInputCostsComponent,
    TransplantProductionInputCostsComponent,
    FieldLaborByCropComponent,
    TransplantProductionLaborByCropComponent,
    TransplantProductionInputsComponent,
    TransplantProductionTrayTypesComponent,
    TransplantProductionInformationComponent,
    FieldStandardTimesComponent,
    HarvestPostHarvestStandardTimesComponent,
    TransplantProductionStandardTimesComponent,
    CropsComponent,
    CropUnitsComponent,
    EditWorkbookComponent,
    DisclaimerComponent,
    FieldDefinitionListComponent,
    FieldDefinitionEditComponent,
    TrainingComponent,
    DecimalEditor,
    IntegerEditor,
    FieldInputByCropComponent,
    TimeStudyModal,
    CropSpecificInfoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule,
    OAuthModule.forRoot(),
    SharedModule.forRoot(),
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([DecimalEditor, IntegerEditor]),
    NgMultiSelectDropDownModule.forRoot(),
    MyDatePickerModule,
    CKEditorModule,
    ReactiveFormsModule
  ],  
  providers: [
    CookieService,
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppInitService, AppInsightsService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    DecimalPipe, CurrencyPipe, DatePipe
  ],
  entryComponents: [LinkRendererComponent, FontAwesomeIconLinkRendererComponent, MultiLinkRendererComponent, ButtonRendererComponent, TimeStudyCellRendererComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
