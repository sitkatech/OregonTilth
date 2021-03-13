import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent, UnauthenticatedComponent, SubscriptionInsufficientComponent } from './shared/pages';
import { UnauthenticatedAccessGuard } from './shared/guards/unauthenticated-access/unauthenticated-access.guard';
import { ManagerOnlyGuard } from "./shared/guards/unauthenticated-access/manager-only-guard";
import { AcknowledgedDisclaimerGuard } from "./shared/guards/acknowledged-disclaimer-guard";
import { UserListComponent } from './pages/user-list/user-list.component';
import { HomeIndexComponent } from './pages/home/home-index/home-index.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserInviteComponent } from './pages/user-invite/user-invite.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { LoginCallbackComponent } from './pages/login-callback/login-callback.component';
import { HelpComponent } from './pages/help/help.component';
import { CreateUserCallbackComponent } from './pages/create-user-callback/create-user-callback.component';
import { AboutComponent } from './pages/about/about.component';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';
import { FieldDefinitionListComponent } from './pages/field-definition-list/field-definition-list.component';
import { FieldDefinitionEditComponent } from './pages/field-definition-edit/field-definition-edit.component';
import { TrainingComponent } from './pages/training/training.component';
import { WorkbooksComponent } from './pages/workbooks/workbooks.component';
import { NewWorkbookComponent } from './pages/workbooks/new-workbook/new-workbook.component';
import { EditWorkbookComponent } from './pages/workbooks/edit-workbook/edit-workbook.component';
import { WorkbookDetailComponent } from './pages/workbooks/workbook-detail/workbook-detail.component';
import { FieldLaborActivitiesComponent } from './pages/workbooks/forms/field-labor-activities/field-labor-activities.component';
import { MachineryComponent } from './pages/workbooks/forms/machinery/machinery.component';
import { CropsComponent } from './pages/workbooks/forms/crops/crops.component';
import { CropUnitsComponent } from './pages/workbooks/forms/crop-units/crop-units.component';
import { FieldLaborByCropComponent } from './pages/workbooks/forms/field-labor-by-crop/field-labor-by-crop.component';
import { TransplantProductionLaborActivitiesComponent } from './pages/workbooks/forms/transplant-production-labor-activities/transplant-production-labor-activities.component';
import { FieldInputCostsComponent } from './pages/workbooks/forms/field-input-costs/field-input-costs.component';

const routes: Routes = [
  { path: "labels-and-definitions/:id", component: FieldDefinitionEditComponent, canActivate: [UnauthenticatedAccessGuard, ManagerOnlyGuard, AcknowledgedDisclaimerGuard] },
  { path: "labels-and-definitions", component: FieldDefinitionListComponent, canActivate: [UnauthenticatedAccessGuard, ManagerOnlyGuard, AcknowledgedDisclaimerGuard] },
  { path: "users", component: UserListComponent, canActivate: [UnauthenticatedAccessGuard, ManagerOnlyGuard, AcknowledgedDisclaimerGuard]},
  { path: "users/:id", component: UserDetailComponent, canActivate: [UnauthenticatedAccessGuard, ManagerOnlyGuard, AcknowledgedDisclaimerGuard] },
  { path: "users/:id/edit", component: UserEditComponent, canActivate: [UnauthenticatedAccessGuard, ManagerOnlyGuard, AcknowledgedDisclaimerGuard] },
  { path: "invite-user/:userID", component: UserInviteComponent, canActivate: [UnauthenticatedAccessGuard, ManagerOnlyGuard, AcknowledgedDisclaimerGuard] },
  { path: "invite-user", component: UserInviteComponent, canActivate: [UnauthenticatedAccessGuard, ManagerOnlyGuard, AcknowledgedDisclaimerGuard] },
  { path: "", component: HomeIndexComponent},
  { path: "disclaimer", component: DisclaimerComponent },
  { path: "disclaimer/:forced", component: DisclaimerComponent },
  { path: "help", component: HelpComponent },
  { path: "training", component: TrainingComponent},
  { path: "platform-overview", component: AboutComponent},
  { path: "workbooks", component: WorkbooksComponent},
  { path: "workbooks/new", component: NewWorkbookComponent},
  { path: "workbooks/:id/edit", component: EditWorkbookComponent},
  { path: "workbooks/:id/forms/field-labor-activities", component: FieldLaborActivitiesComponent},
  { path: "workbooks/:id/forms/transplant-production-labor-activities", component: TransplantProductionLaborActivitiesComponent},
  { path: "workbooks/:id/forms/machinery", component: MachineryComponent},
  { path: "workbooks/:id/forms/field-labor-by-crop", component: FieldLaborByCropComponent},
  { path: "workbooks/:id/forms/crops", component: CropsComponent},
  { path: "workbooks/:id/forms/crop-units", component: CropUnitsComponent},
  { path: "workbooks/:id/forms/field-input-costs", component: FieldInputCostsComponent},
  { path: "workbooks/:id", component: WorkbookDetailComponent},
  { path: "login-callback", component: LoginCallbackComponent },
  { path: "create-user-callback", component: CreateUserCallbackComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: 'subscription-insufficient', component: SubscriptionInsufficientComponent },
  { path: 'unauthenticated', component: UnauthenticatedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
