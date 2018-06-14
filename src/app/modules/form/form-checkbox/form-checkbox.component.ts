import { Component, Input } from '@angular/core';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';
import { CheckboxModel } from '../../../models/checkbox/checkbox.model';

@Component({
  selector: 'c2c-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent {

  /** Defines the checkbox options. */
  @Input() checkboxOptions: CheckboxModel = Defaults.DEFAULT_CHECKBOX_OPTIONS;

  /** Defines the tabbing sequence setting. */
  @Input() tabIndex;

  constructor() { }

}
