import { Component, Input, forwardRef, ViewChild, HostListener, ElementRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';
import { NgbDateStruct, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateNativeAdapter } from '../../../services/datepicker/ngb-date-native-adapter.service';
import { NgbCustomDateFormatter } from '../../../services/datepicker/ngb-custom-date-formatter.service';

/**
 * The FormDatepickerComponent
 *
 * Common component for displaying pop up datepicker inputs in the UI, which are meant for selecting any dates.
 * We are utilizing the third-party component, {@link https://ng-bootstrap.github.io/#/home ng-bootstrap} for the main functionality.
 *
 * In order to work with Reactive Forms, this component needs to implement the ControlValueAccessor class.
 */
@Component({
  selector: 'c2c-form-datepicker',
  templateUrl: './form-datepicker.component.html',
  styleUrls: ['./form-datepicker.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FormDatepickerComponent), multi: true },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
    { provide: NgbDateParserFormatter, useClass: NgbCustomDateFormatter }
  ]
})
export class FormDatepickerComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  public readonlyToggle: boolean = false;

  private thisDay: number = new Date().getDate();
  private thisMonth: number = new Date().getMonth() + 1;
  private enteredDay: number;
  private enteredMonth: number;
  private isValid: boolean = true;

  /** Gets access to the 'datepicker' input used for displaying the calendar for date selection. */
  @ViewChild('datePicker') datePicker;

  /** Gets access to the 'valid' value used for checking if the date is valid or not. */
  @ViewChild('valid') validation;

  /** Determines whether or not to set the initial focus to this field upon view initialization. */
  @Input() public setFocusToThis: boolean = false;

  /** Defines the placeholder text of the datepicker input box. Used for setting custom placeholder text. */
  @Input() public placeholder: string = Defaults.DEFAULT_INPUT_PLACEHOLDER;

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

  /** Defines the value of the Datepicker to be passed to the reactive form. */
  @Input('value') public _value: any;

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
  }

   /**
   * Constructor for the Generic Datepicker
   *
   * @param elRef Gives direct access to the dom.
   * @param renderer Used for safely accessing elements in the DOM.
   */
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  /**
   * NgInit built in lifecycle that gets called once the component has been initialized.
   * Sets the ngModel 'value' to the date passed in to 'value'.
   */
  public ngOnInit(): void {
    if (this.value != null) {
      this.value = new Date(this.value);
    }
  }

  /**
   * NgAfterViewInit lifecycle hook that gets called after the view has been initialized.
   * Sets the focus of to the specified datepicker if configured to do so.
   */
  public ngAfterViewInit(): void {
    if (this.setFocusToThis) {
      this.datePicker.nativeElement.focus();
    }
  }

  /**
   * HostListener is used to listen for all click events and passes the $event to the function.
   * This is used to check if the user has clicked off the input box / calendar pop up.
   * @param evt The event name recorded by document:click.
   */
  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(evt: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }
    if (!this.elRef.nativeElement.contains(targetElement)) {
      this.datePicker.close();
    } else {
      if (!this.readonlyToggle) {
        this.datePicker.open();
      }
    }
  }

  /**
   * Used to disable any days not in the current month on the calendar.
   * @param date The current date
   * @param current The current month
   */
  public isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }

  /**
   * Verifies the model is a valid date based on format of the date and value.
   *
   * @param event The model change event.
   */
  public verifyValidDate(event: any) {
    const currentDate: Date = new Date();
    if (this.value == null) {
      this.datePicker.navigateTo({ year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 });
    } else {
      if (event.length == null) {
        const date: Date = new Date(this.value);
        this.enteredDay = date.getDate();
        this.enteredMonth = date.getMonth() + 1;
        this.datePicker.navigateTo({ year: date.getFullYear(), month: date.getMonth() + 1 });
        this.onChange(this.value);
      }
    }
  }

  /**
   * Implementation of the writeValue function given through the ControlValueAccessor class.
   * Writes the date value to the element.
   *
   * @param value The value to write.
   */
  public writeValue(value: any): void {
    if (value != null) {
      this.value = new Date(value);
    }
  }

  /**
   * Implementation of the registerOnChange function given through the ControlValueAccessor class.
   * Registers the onChange callback to this.onChange().
   *
   * @param fn The callback function.
   */
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Implementation of the registerOnTouched function given through the ControlValueAccessor class.
   * Registers the onTouched callback to this.onTouched().
   *
   * @param fn The callback function.
   */
  public registerOnTouched(fn: any): void {
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
}
