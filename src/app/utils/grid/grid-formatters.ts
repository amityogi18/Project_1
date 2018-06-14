import { DatePipe } from '@angular/common';

/**
 * The GridFormatters
 *
 * Util class for formatting display values on the grid.
 */
export class GridFormatters {
  /**
   * Takes a raw date and formats it into the givin format.
   *
   * @param date The date to format.
   */
  public static dateFormatter(date) {
    return new DatePipe('en-US').transform(date, 'MM/dd/yyyy');
  }
}
