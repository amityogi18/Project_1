import { Component, Input } from '@angular/core';

@Component({
  selector: 'c2c-minus-button',
  templateUrl: './minus-button.component.html',
  styleUrls: ['./minus-button.component.scss']
})
export class MinusButtonComponent {

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

  /** Defines the title for the minus button. */
  @Input() public title;

  constructor() { }

}
