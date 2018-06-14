import { IGridPageOptions } from '../../interfaces/grid/igrid-page-options';

/**
 * The GridPageOptionsModel
 *
 * Handles what features you want to turn on and off on the Grid.
 * Features include the grid title, and the grids icons needed for doing actions.
 */
export class GridPageOptionsModel implements IGridPageOptions {
  showTitle: boolean = true;
  title: string = '';
  showRefreshIcon: boolean = false;
  showResetIcon: boolean = false;
  showPDFIcon: boolean = false;
  showSaveIcon: boolean = false;
  showAddIcon: boolean = false;

  /**
   * Constructor for the GridPageOptionsModel
   *
   * @param showTitle Toggles the display of a title on the grid.
   * @param title If showTitle is true, specifies what title to display.
   * @param showRefreshIcon Toggles the display of the refresh icon on the grid.
   * @param showResetIcon Toggles the display of the reset icon on the grid.
   * @param showPDFIcon Toggles the display of the PDF icon on the grid.
   * @param showSaveIcon Toggles the display of the save icon on the grid.
   * @param showAddIcon Toggles the display the add (plus) icon on the grid.
   */
  constructor(
    showTitle: boolean,
    title: string,
    showRefreshIcon: boolean,
    showResetIcon: boolean,
    showPDFIcon: boolean,
    showSaveIcon: boolean,
    showAddIcon: boolean
  ) {
    this.showTitle = showTitle;
    this.title = title;
    this.showRefreshIcon = showRefreshIcon;
    this.showResetIcon = showResetIcon;
    this.showPDFIcon = showPDFIcon;
    this.showSaveIcon = showSaveIcon;
    this.showAddIcon = showAddIcon;
  }
}
