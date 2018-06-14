import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SaveButtonModel } from '../../../../models/button/save-button/save-button.model';
import { GridEventService } from '../../../../services/events/grid/grid-event.service';

/**
 * The Save Button Component
 *
 * Common component for displaying save/floppy buttons in the UI, which is meant to run 1 of 3 actions.
 * Actions: save record on grid, navigate to a different page (navigate), close modal window (modal).
 *  *
 * For an example of the Save Button Component in use, see RTE modal on Notes.
 */

@Component({
  selector: 'c2c-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent implements OnInit {

  /** Defines the options of the save Button. Used for configuring the type of action the button should do. */
  @Input() public saveButtonOptions: SaveButtonModel;

  /** Outputs an event when the save button is clicked. Used to provide extra logic if needed. */
  @Output() addRow = new EventEmitter<string>();

  /** Defines the tabbing sequence setting. */
  @Input() public tabIndex;

   /**
   * Constructor for the save Button
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
   * action to perform based on the action set in 'saveButtonModel'.
   */
  performAction() {
    if (this.saveButtonOptions.requiredAction === 'navigate') {
      this.navigate(this.saveButtonOptions.route);
    } else if (this.saveButtonOptions.requiredAction === 'modal') {
      (this.saveButtonOptions.modalAction == 'open') ? this.openModal(this.saveButtonOptions.modal) : this.closeModal(this.saveButtonOptions.modal);
    } else if (this.saveButtonOptions.requiredAction === 'row') {
      this.gridEventService.addRowEvent();
    }
  }
 /**
   * This function is used when the action is set to 'navigate' in the 'saveButtonOptions.
   * Function will use router to navigate to the designated route based on the value
   * set for 'route' in the 'saveButtonOptions'.
   *
   * @param route The route to navigate to using 'router'
   */
  navigate(route: string) {
    console.log(`Navigating to ${route}.`);
    this.router.navigate([route]);
  }

  openModal(modal: object) {
    // TODO: Implement opening specified modal window
    // based on module and sourcePage using GridEventService.
  }

  closeModal(modal: object) {
     alert('modal window will close after save');
    //console.log(modal);
    // TODO: Implement opening specified modal window
    // based on module and sourcePage using GridEventService.
  }
}
