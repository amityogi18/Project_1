import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';

/**
 * The Generic Input Component
 *
 * Common component for displaying a generic input box for the UI, will be used in most forms
 * for standard text input.
 */
@Component({
  selector: 'c2c-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent {

  /** Sets the max length of the input box. */
  @Input() public maxlength: number;

  /** Defines the placeholder text of the input box. Used for setting custom placeholder text. */
  @Input() public placeholder: string = Defaults.DEFAULT_INPUT_PLACEHOLDER;

  /** Defines the default value of the input. Used for configuring the default value to be displayed. */
  @Input() public value: string;

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

  /** Outputs an event when ngModel has changed. Used to provide the value to the UI. */
  @Output() public valueEvent = new EventEmitter<string>();

  constructor() { }

  /**
   * Emits the value of the input text box on model change.
   */
  public emitValue() {
    this.valueEvent.emit(this.value);
  }
}
