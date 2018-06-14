import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from '@app/modules/structural/footer/footer.component';
import { GenericDropdownComponent } from '@app/modules/form/generic-dropdown/generic-dropdown.component';
import { GenericDatepickerComponent } from '@app/modules/form/generic-datepicker/generic-datepicker.component';
import { GridComponent } from '@app/modules/elements/grid/grid.component';
import { HeaderComponent } from '@app/modules/structural/header/header.component';
import { HowToComponent } from '@app/c2c-main/how-to/how-to.component';
import { NameSearchComponent } from '@app/modules/name-search/name-search.component';
import { NoteComponent } from '@app/modules/form/note/note.component';
import { SidebarComponent } from '@app/modules/structural/sidebar/sidebar.component';
import { TypeAheadComponent } from '@app/modules/elements/type-ahead/type-ahead.component';
import { WelcomeComponent } from '@app/c2c-main/welcome/welcome.component';
import { GenericModalComponent } from '@app/modules/elements/generic-modal/generic-modal.component';
import { ButtonComponent } from '@app/modules/elements/button/button.component';
import { AuditComponent } from './modules/elements/audit/audit.component';
import { GenericInputComponent } from '@app/modules/form/generic-input/generic-input.component';
import { LabelComponent } from '@app/modules/form/label/label.component';
import { FormRadioButtonComponent } from './modules/form/form-radio-button/form-radio-button.component';
import { FormCheckboxComponent } from '@app/modules/form/form-checkbox/form-checkbox.component';
import { WizardComponent } from '@app/modules/structural/wizard/wizard.component';
import { FormDropdownComponent } from '@app/modules/form/form-dropdown/form-dropdown.component';
import { FormDatepickerComponent } from '@app/modules/form/form-datepicker/form-datepicker.component';

/**
 * Defines the routes for navigation to each Component in the Library.
 */
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'howTo', component: HowToComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'wizard/:id', component: WizardComponent, children: [
    { path: 'nameProjectDetails', component: FooterComponent },
    { path: 'summary', component: HowToComponent }
  ] },
  { path: 'grid', component: GridComponent },
  { path: 'typeAhead', component: NameSearchComponent },
  { path: 'note', component: NoteComponent },
  { path: 'dropdown', component: GenericDropdownComponent },
  { path: 'dropdown-reactive', component: FormDropdownComponent },
  { path: 'datepicker', component: GenericDatepickerComponent },
  { path: 'datepicker-reactive', component: FormDatepickerComponent },
  { path: 'buttons', component: ButtonComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'input', component: GenericInputComponent },
  { path: 'label', component: LabelComponent },
  { path: 'radioButton', component: FormRadioButtonComponent },
  { path: 'checkbox', component: FormCheckboxComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

/**
 * The AppRoutingModule
 *
 * Contains the routing information for the Common Library.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
