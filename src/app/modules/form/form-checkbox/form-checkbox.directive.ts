import { Directive, HostBinding, HostListener, OnInit, ElementRef, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * The FormCheckboxDirective
 *
 * Common directive for displaying a form checkbox in the UI.
 *
 * In order to work with Reactive Forms, this component needs to implement the ControlValueAccessor class.
 */
@Directive({
  selector: '[c2cFormCheckbox]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormCheckboxDirective),
    multi: true
  }]
})
export class FormCheckboxDirective implements OnInit, ControlValueAccessor {
  public classes: Array<string> = [];

  /** Defines the value of the checkbox to be passed to the reactive form. */
  @Input('value') public _value: boolean;

  /** Fired when any changes to the model are detected */
  public onChange: any = () => { };

  /** Fired when the component is blurred. */
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
  }

  /**
   * The constructor for FormCheckboxDirective
   *
   * @param elRef Gives direct access to the dom.
   */
  constructor(private elRef: ElementRef) { }

  /**
   * Gets the native class attribute of the checkbox and returns the necessary classes.
   */
  @HostBinding('class')
  get getClass(): string {
    return this.classes.join(' ');
  }

  /**
   * NgInit built in lifecycle that gets called once the component has been initialized.
   * Sets the value based on the native element's 'checked' property and applies necessary classes.
   */
  public ngOnInit(): void {
    this.value = this.elRef.nativeElement.checked;
    this.calcClasses(this.value, this.elRef.nativeElement.disabled);
  }

  /**
   * Listens to change events and sets the checkbox value and disabled properties accordingly.
   *
   * @param checked The native element's 'checked' value (boolean).
   * @param disabled the native element's 'disabled' value (boolean).
   */
  @HostListener('change', ['$event.target.checked, $event.target.disabled'])
  public onChanges(checked, disabled) {
    this.value = checked;
    this.calcClasses(this.value, disabled);
  }

  /**
   * Determines the classes to be applied to the checkbox based on it's value and disabled state.
   *
   * @param checked The value of the checkbox (boolean).
   * @param disabled The disabled state of the checkbox (boolean).
   */
  public calcClasses(checked, disabled) {
    this.classes = ['c2c-icons-sprite', 'c2c-input-checkboxes'];
    if (checked && disabled) {
      this.classes.push('c2c-input-check');
    }
    if (checked && !disabled) {
      this.classes.push('c2c-input-checkboxes-checked');
    }
    if (!checked && disabled) {
      this.classes.push('c2c-visiblity-hidden');
    }
  }

  /**
   * Implementation of the writeValue function given through the ControlValueAccessor class.
   * Writes the value of the checkbox (if null -> set to false), and re-calculates the classes.
   *
   * @param value The value to write.
   */
  writeValue(value: any): void {
    this.value = value === null ? false : value;
    this.calcClasses(this.value, this.elRef.nativeElement.disabled);
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
   * Detects when the disabled attribute changes, and re-calculates the classes based on new disabled value.
   *
   * @param isDisabled The boolean value to set.
   */
  setDisabledState(isDisabled: boolean): void {
    this.calcClasses(this.value, isDisabled);
  }

}
