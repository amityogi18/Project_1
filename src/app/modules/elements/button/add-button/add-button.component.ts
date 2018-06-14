import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AddButtonModel } from '../../../../models/button/add-button/add-button.model';
import { GridEventService } from '../../../../services/events/grid/grid-event.service';

/**
 * The Add Button Component
 *
 * Common component for displaying add (+) buttons in the UI, which is meant to run 1 of 3 actions.
 * Actions: add a new row to the grid (row), navigate to a different page (navigate), open modal window (modal).
 *  *
 * For an example of the Add Button Component in use, see the All Projects grid in Feature Casting.
 */
@Component({
  selector: 'c2c-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  /** Defines the options of the Add Button. Used for configuring the type of action the button should do. */
  @Input() public addButtonOptions: AddButtonModel;

  /** Outputs an event when the add button is clicked. Used to provide extra logic if needed. */
  @Output() addRow = new EventEmitter<string>();

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

  public tooltip: string;

   /**
   * Constructor for the Add Button
   *
   * @param router The router to handle all navigation.
   * @param gridEventService The service to handle all events related to the Grid.
   */
  constructor(
    private router: Router,
    private gridEventService: GridEventService
  ) { }

  ngOnInit() {
    this.tooltip = this.addButtonOptions.tooltip;
  }

  /**
   * This is called when the add button is clicked. It determines the necessary
   * action to perform based on the action set in 'addButtonModel'.
   */
  performAction() {
    if (this.addButtonOptions.requiredAction != null) {
      if (this.addButtonOptions.requiredAction === 'navigate') {
        this.navigate(this.addButtonOptions.route);
      } else if (this.addButtonOptions.requiredAction === 'modal') {
        this.openModal(this.addButtonOptions.modal);
      } else if (this.addButtonOptions.requiredAction === 'row') {
        this.gridEventService.addRowEvent();
      }
    }
  }

  /**
   * This function is used when the action is set to 'navigate' in the 'addButtonOptions.
   * Function will use router to navigate to the designated route based on the value
   * set for 'route' in the 'addButtonOptions'.
   *
   * @param route The route to navigate to using 'router'
   */
  navigate(route: string) {
    console.log(`Navigating to ${route}.`);
    this.router.navigate([route]);
  }

  openModal(modal: string) {
    // TODO: Implement opening specified modal window
    // based on module and sourcePage using GridEventService.
  }
}
