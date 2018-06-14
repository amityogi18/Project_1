import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';
import { DropdownModel } from '../../../models/dropdown/dropdown.model';

/**
 * The Generic Dropdown Component
 *
 * Handles the generic dropdown.
 */
@Component({
  selector: 'c2c-generic-dropdown',
  templateUrl: './generic-dropdown.component.html',
  styleUrls: ['./generic-dropdown.component.scss']
})
export class GenericDropdownComponent {

  constructor(private router: Router) {
  }

  /**
   * Defines the data for the dropdown. If nothing passed in, the default is used.
   */
  @Input() public dropdownOptions: DropdownModel = Defaults.DEFAULT_DROPDOWN_OPTIONS;

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

  /**
   * Fires when an option is chosen. Action depends on data passed by implementing module.
   *
   * If action is 'navigate', upon clicking, user will navigate to 'route'.
   * If no action is specified, it will function as a simple choice dropdown.
   *
   * @param choice The user's choice upon clicking an option.
   */
  performAction(choice) {
    this.dropdownOptions.dropdownValue = choice;
    this.dropdownOptions.selection = choice.value;
    if (this.dropdownOptions.action === 'navigate') {
      this.navigate(choice.route);
    } else {
      // console.log('no specific action other than assigning the value of: ' + choice.value);
    }
  }

  /**
   * Will navigate user to specified route (defined as value of 'route').
   *
   * @param route In the case the dropdown is supposed to route the user, this is the route.
   */
  navigate(route: string) {
    console.log(`Navigating to ${route}.`);
    this.router.navigate([route]);
  }

}
