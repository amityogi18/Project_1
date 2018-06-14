import { Component, Input, ElementRef, EventEmitter, ViewChild, HostListener, OnInit, Output, AfterViewInit } from '@angular/core';
import { NgbDateParserFormatter, NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateNativeAdapter } from '../../../services/datepicker/ngb-date-native-adapter.service';
import { NgbCustomDateFormatter } from '../../../services/datepicker/ngb-custom-date-formatter.service';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';

/**
 * The Generic Datepicker Component
 *
 * Common component for displaying pop up datepicker inputs in the UI, which are meant for selecting any dates.
 * We are utilizing the third-party component, {@link https://ng-bootstrap.github.io/#/home ng-bootstrap} for the main functionality.
 *
 * For an example of the Generic Datepicker Component in use, see the home page in Feature Casting.
 */
@Component({
  selector: 'c2c-generic-datepicker',
  templateUrl: './generic-datepicker.component.html',
  styleUrls: ['./generic-datepicker.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
    { provide: NgbDateParserFormatter, useClass: NgbCustomDateFormatter }
  ]
})
export class GenericDatepickerComponent implements OnInit, AfterViewInit {

  private thisDay: number = new Date().getDate();
  private thisMonth: number = new Date().getMonth() + 1;
  private enteredDay: number;
  private enteredMonth: number;
  private isValid: boolean = true;

  /** Gets access to the 'datepicker' input used for displaying the calendar for date selection. */
  @ViewChild('d') datePicker;

  /** Gets access to the 'valid' value used for checking if the date is valid or not. */
  @ViewChild('valid') validation;

  /** Determines whether or not to set the initial focus to this field upon view initialization. */
  @Input() public setFocusToThis: boolean = false;

  /** Gets access to the 'datepicker' input for setting focus to the input. */
  @ViewChild('datepicker') datepicker;

  /** Defines the placeholder text of the datepicker input box. Used for setting custom placeholder text. */
  @Input() public placeholder: string = Defaults.DEFAULT_INPUT_PLACEHOLDER;

  /** Defines the default value of the input. Used for configuring the default value to be displayed. */
  @Input() public selectedDate: any;

  /** Outputs an event when ngModel has changed. Used to provide the value to the UI. */
  @Output() public valueEvent = new EventEmitter<string>();

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

   /**
   * Constructor for the Generic Datepicker
   *
   * @param eleRef Gives direct access to the dom.
   */
  constructor(private eleRef: ElementRef) { }

  /**
   * NgInit built in lifecycle that gets called once the component has been initialized.
   * Sets the ngModel 'selectedDate' to the date passed in to 'value'.
   */
  ngOnInit() {
    if (this.selectedDate != null) {
      this.selectedDate = new Date(this.selectedDate);
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
    if (!this.eleRef.nativeElement.contains(targetElement)) {
      this.datePicker.close();
      if (this.validation.status === 'INVALID') {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
    } else {
      this.datePicker.open();
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
    if (this.selectedDate == null) {
      this.datePicker.navigateTo({ year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 });
      this.emitValue();
    } else {
      if (event.length == null) {
        const date: Date = new Date(this.selectedDate);
        this.enteredDay = date.getDate();
        this.enteredMonth = date.getMonth() + 1;
        this.datePicker.navigateTo({ year: date.getFullYear(), month: date.getMonth() + 1 });
        this.emitValue();
      }
    }
  }

  /**
   * Emits the value of the datepicker input box when the model changes and verifies it is a valid date.
   */
  public emitValue() {
    this.valueEvent.emit(this.selectedDate);
  }

  ngAfterViewInit() {
    if (this.setFocusToThis) {
      this.datepicker.nativeElement.focus();
    }
  }
}
