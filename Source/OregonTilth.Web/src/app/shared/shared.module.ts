import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages';
import { HeaderNavComponent } from './components';
import { UnauthenticatedComponent } from './pages/unauthenticated/unauthenticated.component';
import { SubscriptionInsufficientComponent } from './pages/subscription-insufficient/subscription-insufficient.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { RouterModule } from '@angular/router';
import { LinkRendererComponent } from './components/ag-grid/link-renderer/link-renderer.component';
import { ButtonRendererComponent } from './components/ag-grid/button-renderer/button-renderer.component';
import { FontAwesomeIconLinkRendererComponent } from './components/ag-grid/fontawesome-icon-link-renderer/fontawesome-icon-link-renderer.component';
import { MultiLinkRendererComponent } from './components/ag-grid/multi-link-renderer/multi-link-renderer.component';
import { CustomRichTextComponent } from './components/custom-rich-text/custom-rich-text.component'
import { SideNavComponent } from './components/side-nav/side-nav.component'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FieldDefinitionComponent } from './components/field-definition/field-definition.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AlertDisplayComponent } from './components/alert-display/alert-display.component';
import { FieldDefinitionGridHeaderComponent } from './components/field-definition-grid-header/field-definition-grid-header.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TimeStudyCellRendererComponent } from './components/ag-grid/time-study-cell-renderer/time-study-cell-renderer.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
    declarations: [
        AlertDisplayComponent,
        HeaderNavComponent,
        NotFoundComponent,
        UnauthenticatedComponent,
        SubscriptionInsufficientComponent,
        LinkRendererComponent,
        ButtonRendererComponent,
        TimeStudyCellRendererComponent,
        FontAwesomeIconLinkRendererComponent,
        MultiLinkRendererComponent,
        CustomRichTextComponent,
        SideNavComponent,
        FieldDefinitionComponent,
        FieldDefinitionGridHeaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        NgProgressModule,
        RouterModule,
        NgMultiSelectDropDownModule.forRoot(),
        CKEditorModule,
        NgbModule,
        ClickOutsideModule
    ],
    exports: [
        AlertDisplayComponent,
        CommonModule,
        FormsModule,
        NotFoundComponent,
        HeaderNavComponent,
        CustomRichTextComponent,
        SideNavComponent,
        FieldDefinitionComponent,
        FieldDefinitionGridHeaderComponent
    ],
    entryComponents:[
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
    return {
        ngModule: SharedModule,
        providers: []
    };
}

    static forChild(): ModuleWithProviders<SharedModule> {
    return {
        ngModule: SharedModule,
        providers: []
    };
}
}
