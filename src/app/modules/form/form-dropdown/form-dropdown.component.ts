import { Component, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DropdownModel } from '../../../models/dropdown/dropdown.model';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';

/**
 * The FormDropdownComponent
 *
 * Common component for displaying form dropdowns in the UI.
 *
 * In order to work with Reactive Forms, this component needs to implement the ControlValueAccessor class.
 */
@Component({
  selector: 'c2c-form-dropdown',
  templateUrl: './form-dropdown.component.html',
  styleUrls: ['./form-dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormDropdownComponent),
    multi: true
  }]
})
export class FormDropdownComponent implements ControlValueAccessor {
  public readonlyToggle: boolean = false;

  /** Defines the data for the dropdown. If nothing passed in, the default is used. */
  @Input() public dropdownOptions: DropdownModel = Defaults.DEFAULT_DROPDOWN_OPTIONS;

  @Input() public isInvalid: boolean = false;

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

  /** Defines the value of the dropdown to be passed to the reactive form. */
  @Input('value') public _value: any;

  /** Event emitter for when a value is selected. Can be used to render something else in the UI. */
  @Output() public selectedEvent: EventEmitter<any> = new EventEmitter<any>();

  /** Fired when any changes to the model are detected */
  public onChange: any = () => { };

  /** Fired when the component is blurred. TODO: This currently doesn't work - need to figure out why and fix it */
  public onTouched: any = () => { };

  /** Getter for the value property */
  get value() {
    return this._value;
  }

  /** Setter for the value property */
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
    this.emitSelected(val);
  }

  /**
   * The constructor for FormDropdownComponent
   */
  constructor() { }

  /**
   * Sets the value of the selection option on the value that will be passed through the form.
   *
   * @param option The selected option.
   */
  public selectOption(option) {
    this.dropdownOptions.dropdownValue = option;
    this.dropdownOptions.selection = option.value;
    this.value = option;
    this.onChange(this.value);
  }

  /**
   * Implementation of the writeValue function given through the ControlValueAccessor class.
   * Writes the dropdown value to the element.
   *
   * @param value The value to write.
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Implementation of the registerOnChange function given through the ControlValueAccessor class.
   * Registers the onChange callback to this.onChange().
   *
   * @param fn The callback function.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Implementation of the registerOnTouched function given through the ControlValueAccessor class.
   * Registers the onTouched callback to this.onTouched().
   *
   * @param fn The callback function.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Implementation of the setDisabledState function given through the ControlValueAccessor class.
   * Detects when the disabled attribute changes, and sets it accordingly.
   *
   * @param isDisabled The boolean value to set.
   */
  setDisabledState(isDisabled: boolean): void {
    this.readonlyToggle = isDisabled;
  }

  /**
   * If the value has changed, emit a event to communicate to the outside world.
   *
   * @param val The value to emit.
   */
  public emitSelected(val: any) {
    this.selectedEvent.emit(val);
  }
}
