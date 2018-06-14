import { Injectable, EventEmitter } from '@angular/core';

/**
 * The GridEventService
 *
 * Service for handling all events with the Grid.
 */
@Injectable()
export class GridEventService {
  private addRow = new EventEmitter<any>();
  private onExpand = new EventEmitter<any>();
  private refreshGrid = new EventEmitter<any>();
  private fitColumns = new EventEmitter<any>();

  /**
   * Constructor for the GridEventService
   */
  constructor() { }

  /**
   * Emits an event when adding a new row to a Grid.
   */
  public addRowEvent(): void {
    this.addRow.emit('addRow');
  }

  /**
   * Gets the event when adding a new row to a Grid.
   */
  public getAddRowEvent(): EventEmitter<any> {
    return this.addRow;
  }

  /**
   * Emits an event when expanding/collapsing a row in the Grid.
   *
   * @param value An Object Literal of the values to send with the event.
   */
  public expandEvent(value: {index: number, state: boolean, image: boolean, field: string, totalHeight: number}): void {
    this.onExpand.emit(value);
  }

  /**
   * Gets the event when expanding/collapsing a row in the Grid.
   */
  public getExpandEvent(): EventEmitter<any> {
    return this.onExpand;
  }

  /**
   * Emits an event when the Grid is refreshed.
   */
  public refreshGridEvent(): void {
    this.refreshGrid.emit('refreshGrid');
  }

  /**
   * Get the event when the Grid is refreshed.
   */
  public getRefreshGridEvent(): EventEmitter<any> {
    return this.refreshGrid;
  }


  /**
   * Fit Columns sising
   */
  public columnsToFitEvent(): void {
    this.fitColumns.emit();
  }

  public getColumnsFitEvent(): EventEmitter<any> {
    return this.fitColumns;
  }
}
