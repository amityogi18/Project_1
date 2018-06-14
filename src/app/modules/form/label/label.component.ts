import { Component, Input } from '@angular/core';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';

/**
 * The Label Component
 * 
 * Common component for displaying a label for the UI, generally used within forms to label the input fields.
 */
@Component({
  selector: 'c2c-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {

  /** Defines the alternate text to display next to the label. This will be italicized font. */
  @Input() public altText: string;

  /** Defines the labels text for the field. Used for setting the text to be displayed as a label. */
  @Input() public value: string = Defaults.DEFAULT_LABEL_VALUE;

  /** Defines the type of styling to use for the label span. Set to true if spanning across multiple columns. */
  @Input() public spanColumns: boolean = false;

  constructor() { }

}
