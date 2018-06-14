import { Directive, HostBinding, ElementRef, Input, OnInit, Renderer2, OnChanges, SimpleChanges, HostListener } from '@angular/core';

/**
 * The FormInputDirective
 *
 * Common directive for displaying a form input box in the UI.
 */
@Directive({
  selector: '[c2cFormInput]'
})
export class FormInputDirective implements OnInit, OnChanges {
  public classes: Array<string> = [];

  private element: HTMLInputElement;
  private hasFocus: boolean = false;

  /** Toggles the currency symbol ($) on and off */
  @Input() public currencyToggle: boolean = false;

  /** Toggles whether the input is readonly or not */
  @Input() public readonlyToggle: boolean = false;

  /** Toggles whether the input should have decimal format (#.##) */
  @Input() public decimalToggle: boolean = false;

  /**
   * The constructor for FormCheckboxDirective
   *
   * @param elRef Gives direct access to the dom.
   * @param renderer Used for safely accessing elements in the DOM.
   */
  constructor (private elRef: ElementRef, private renderer: Renderer2) {
    this.classes.push('form-control');
    this.classes.push('c2c-input');
    this.element = this.elRef.nativeElement;
  }

  /**
   * Gets the native class attribute of the checkbox and returns the necessary classes.
   */
  @HostBinding('class')
  get getClass(): string {
    return this.classes.join(' ');
  }

  /**
   * NgInit built in lifecycle that gets called once the component has been initialized.
   */
  public ngOnInit(): void {
    this.appendDecimal();
  }

  /**
   * NgOnChanges built in lifecycle that gets called whenever changes are made to the component.
   *
   * @param changes The value of the changes being made.
   */
  public ngOnChanges(changes: SimpleChanges): void {
    this.appendDecimal();
    if (changes.currencyToggle) {
      this.toggleClass(changes.currencyToggle.currentValue);
    }
  }

  /**
   * Toggles the currency symbol on and off by adding/removing necessary CSS classes and HTML.
   *
   * @param toggle The value of the currency symbol toggle.
   */
  public toggleClass(toggle: boolean): void {
    if (!toggle) {
      this.renderer.removeClass(this.elRef.nativeElement.parentElement, 'input-group');
      this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement.previousSibling);
    } else {
      this.renderer.addClass(this.elRef.nativeElement.parentElement, 'input-group');
      this.elRef.nativeElement.insertAdjacentHTML('beforebegin', '<span class="input-group-addon">$</span>');
    }
  }

  /**
   * Listens to blur events and sets the focus to false.
   *
   * @param value The native element's value.
   */
  @HostListener('blur', ['$event.target.value'])
  public onBlur(value): void {
    this.hasFocus = false;
    this.appendDecimal();
  }

  /**
   * Listens to focus events and sets the focus to true.
   *
   * @param value The native element's value.
   */
  @HostListener('focus', ['$event'])
  public onFocus(value): void {
    this.hasFocus = true;
  }

  /**
   * Formats a number into currency format (i.e. 125.00).
   */
  private appendDecimal(): void {
    if (this.decimalToggle) {
      if (!this.hasFocus) {
        const value = parseFloat(this.element.value).toFixed(2);
        if (isNaN(parseFloat(value))) {
          this.element.value = '0.00';
        } else {
          this.element.value = value;
        }
      }
    }
  }

}
