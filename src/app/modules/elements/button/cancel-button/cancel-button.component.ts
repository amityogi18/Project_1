import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CancelButtonModel } from '../../../../models/button/cancel-button/cancel-button.model';
import { GridEventService } from '../../../../services/events/grid/grid-event.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

/**
 * The Cancel Button Component
 *
 * Common component for displaying X buttons in the UI, which is meant to run 1 of 3 actions.
 * Actions: cancel edits on grid, navigate to a different page (navigate), close modal window (modal).
 *  *
 * For an example of the Cancel Button Component in use, see RTE modal on Notes.
 */

@Component({
  selector: 'c2c-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.scss']
})
export class CancelButtonComponent implements OnInit {

/** Defines the options of the cancel Button. Used for configuring the type of action the button should do. */
  @Input() public cancelButtonOptions: CancelButtonModel;

  /** Outputs an event when the cancel button is clicked. Used to provide extra logic if needed. */
  @Output() addRow = new EventEmitter<string>();

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

  /**
   * Constructor for the cancel Button
   *
   * @param router The router to handle all navigation.
   * @param gridEventService The service to handle all events related to the Grid.
   */

  constructor(
    private router: Router,
    private gridEventService: GridEventService
  ) { }

  ngOnInit() {
  }

  /**
   * This is called when the button is clicked. It determines the necessary
   * action to perform based on the action set in 'cancelButtonModel'.
   */
  performAction() {
    if (this.cancelButtonOptions.requiredAction === 'navigate') {
      this.navigate(this.cancelButtonOptions.route);
    } else if (this.cancelButtonOptions.requiredAction === 'modal') {
      this.closeModal(this.cancelButtonOptions.modal);
    } else if (this.cancelButtonOptions.requiredAction === 'row') {
      this.gridEventService.refreshGridEvent();
    }
  }

  navigate(route: string) {
    console.log(`Navigating to ${route}.`);
    this.router.navigate([route]);
  }

  closeModal(modal: object) {
     alert('modal window will close');
    console.log(modal);

    // TODO: Implement opening specified modal window
    // based on module and sourcePage using GridEventService.
  }
}
