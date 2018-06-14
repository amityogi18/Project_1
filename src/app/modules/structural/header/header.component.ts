import { Component, Input } from '@angular/core';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';

/**
 * The HeaderComponent
 *
 * Common Component for holding the C2C Header. Includes the banner (with app name and login controls),
 * and the navigation bar (for navigating between modules).
 */
@Component({
  selector: 'c2c-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /** The Module Name to be displayed in the left-hand navigation item (history dropdown with hamburger icon) */
  @Input() moduleName: string = Defaults.DEFAULT_MODULE_NAME;
  @Input() talentNav: string;

  /**
   * Constructor for the HeaderComponent
   */
  constructor() { }

}
