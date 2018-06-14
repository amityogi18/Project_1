import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonModule } from '../elements/button/button.module';
import { GenericDatepickerComponent } from './generic-datepicker/generic-datepicker.component';
import { GenericDropdownComponent } from './generic-dropdown/generic-dropdown.component';
import { NoteComponent } from './note/note.component';

import { EditorConfig } from '../../services/config/editor.config';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { FormRadioButtonComponent } from './form-radio-button/form-radio-button.component';
import { LabelComponent } from './label/label.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormInputDirective } from './form-input/form-input.directive';
import { FormDropdownComponent } from './form-dropdown/form-dropdown.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { FormCheckboxDirective } from './form-checkbox/form-checkbox.directive';

/**
 * The FormModule
 *
 * Module for holding all form-related components.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    EditorModule,
    ButtonModule
  ],
  declarations: [
    GenericDatepickerComponent,
    GenericDropdownComponent,
    NoteComponent,
    GenericInputComponent,
    FormRadioButtonComponent,
    LabelComponent,
    FormCheckboxComponent,
    FormInputDirective,
    FormDropdownComponent,
    FormDatepickerComponent,
    FormCheckboxDirective
  ],
  exports: [
    GenericDatepickerComponent,
    GenericDropdownComponent,
    NoteComponent,
    GenericInputComponent,
    FormRadioButtonComponent,
    LabelComponent,
    FormCheckboxComponent,
    FormInputDirective,
    FormDropdownComponent,
    FormDatepickerComponent,
    FormCheckboxDirective
  ],
  providers: [EditorConfig]
})
export class FormModule { }
