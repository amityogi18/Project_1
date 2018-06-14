import { Component, OnInit, Input, Output } from '@angular/core';
import { GridEventService } from '../../../../services/events/grid/grid-event.service';

/**
 * The Refresh Button Component
 *
 * Handles the refresh button.
 */
@Component({
  selector: 'c2c-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.scss']
})
export class RefreshButtonComponent implements OnInit {

  @Input() public refreshButtonOptions: RefreshButtonComponent;

  /**
   * Constructor for the refresh button component
   *
   * @param gridEventService The service to handle all events related to the Grid.
   */
  constructor(private gridEventService: GridEventService) { }

  ngOnInit() {
  }

  /**
   * Calls the refreshGridEvent on the gridEventService to refresh the grid.
   */
  refreshGrid() {
    this.gridEventService.refreshGridEvent();
  }

}
