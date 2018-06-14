import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RadioButtonModel } from '../../../models/radio-button/radio-button.model';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';

@Component({
  selector: 'c2c-form-radio-button',
  templateUrl: './form-radio-button.component.html',
  styleUrls: ['./form-radio-button.component.scss']
})
export class FormRadioButtonComponent {

  /** Defines the options for the multi-button radio buttons. */
  @Input() radioOptions: RadioButtonModel = Defaults.DEFAULT_RADIO_BUTTON_OPTIONS;

  /** Flag that determines if radio button should be single. Use if radio buttons are to be included as part of a list. */
  @Input() singleButton: boolean = false;

  /** Defines the options for the single button radio buttons. */
  @Input() singleButtonOptions: {} = {name: 'default single button options'};

  /** Defines whether the single radio button is checked. */
  @Input() isChecked: boolean = false;

  /** Defines the tabbing sequence setting. */
  @Input() tabIndex;

  /** Emits event when a the radio button choice is changed. */
  @Output() changedEvent = new EventEmitter<boolean>();

  constructor() {}

  /**
   * Emits whether or not the radio button is chosen.
   */
  public emitChoiceChangedEvent() {
    this.changedEvent.emit(this.isChecked);
  }
}
