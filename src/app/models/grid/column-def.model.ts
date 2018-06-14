import { ColDef } from 'ag-grid';
import { IColumnDefParamsModel } from '../../interfaces/grid/icolumn-def-params';
import { DatePipe } from '@angular/common';
import { GridValueGetters } from '../../utils/grid/grid-value-getters';
import { GridComparators } from '../../utils/grid/grid-comparators';
import { GridFormatters } from '../../utils/grid/grid-formatters';
import { formatSSN } from '../../utils/formatting/ssn.format';
import { GridDataOperations } from '../../utils/grid/grid-data-operations';

/**
 * The ColumnDefModel
 *
 * Handles the creation of column definitions for the Grid Common Component.
 * In order to create a new Grid, you need to define the columns that will display.
 * This is the most important part of the process.
 *
 * This implements ag-grid's ColDef interface. A new property will need to match the name of the
 * corresponding property in the ColDef interface. To see a list of valid column properties, go to
 * ag-grid's {@link https://www.ag-grid.com/javascript-grid-column-properties Column Properties} page.
 */
export class ColumnDefModel implements ColDef {
  cellRenderer?: any;
  cellRendererParams?: any;
  comparator?: any;
  field: string;
  headerName: string;
  hide?: boolean;
  minWidth: number;
  suppressFilter: boolean;
  tooltip?: any;
  valueFormatter?: any;
  valueGetter?: any;
  width?: number;

  // Defaults
  floatingFilterComponentParams = { suppressFilterButton: true };
  headerTooltip = 'Click to Sort Ascending/Descending';
  icons = {
    sortAscending: '<i class="fa fa-caret-up"/>',
    sortDescending: '<i class="fa fa-caret-down"/>'
  };
  suppressMenu = true;

  /**
   * Constructor for the ColumnDefModel
   *
   * @param name The column name to be displayed on each Grid column.
   * @param field The property the column is tied to. Single string - cannot use dot/bracket notation here.
   * @param customCell The Custom Cell Renderer to use. Defined by specifying a name, and parameters.
   *  The parameters must be a type that implements IColumnDefParamsModel.
   *
   *  Valid names: 'listComponent', 'imageComponent', 'titlesComponent', 'linkComponent', or create a new one.
   * @param comparator The comparator to use for custom sorting. Defined by specifying a name, and the data
   *  to parse. This is an Object Literal with the specific fields needed to drill down into.
   *
   *  Valid names: 'lastNameComparator', or create a new one.
   * @param formatter The value formatter to use. If the value givin in the JSON is not in the correct display
   *  format, then this will specify the format it needs to be.
   *
   *  Valid names: 'dateFormatter', 'ssnFormatter', or create a new one.
   * @param suppressFilter A boolean value to determine whether the filter box is displayed or not.
   * @param width The width of the column. Only set this if you need a fixed width, otherwise columns will fit
   *  their width to the current size of the view (and the size of the grid's parent).
   *
   * @param hide A boolean value to determine whether this column is hidden in the view. Used for role-based
   *  permissions that will determine who has access to view certain columns in a Grid.
   */
  constructor(
    name: string,
    field: string,
    customCell?: { name: string, params?: IColumnDefParamsModel },
    comparator?: { name: string, dataToParse: { field1: string, field2?: string, field3?: string } },
    formatter?: { name: string, field: string },
    suppressFilter?: boolean,
    width?: number,
    hide?: boolean
  ) {
    this.headerName = name;
    this.field = field;
    this.suppressFilter = suppressFilter;
    this.width = width;
    this.hide = hide;

    if (this.width) {
      this.minWidth = this.width;
    } else {
      this.minWidth = 125;
    }

    if (customCell) {
      this.cellRenderer = customCell.name;
      this.cellRendererParams = customCell.params;
      switch (customCell.name) {
        case 'listComponent':
          this.valueGetter = (params) => {
            return GridValueGetters.listValueGetter(params, this.cellRendererParams);
          };
          break;
        case 'imageComponent':
          this.valueGetter = (params) => {
            return GridValueGetters.imageValueGetter(params, this.cellRendererParams);
          };
          break;
        case 'titlesComponent':
          this.valueGetter = (params) => {
            return GridValueGetters.titlesValueGetter(params, this.cellRendererParams);
          };
          break;
        case 'linkComponent':
          this.valueGetter = (params) => {
          return GridValueGetters.linkValueGetter(params, this.cellRendererParams);
          };
          break;
        default:
          this.valueGetter = null;
          break;
      }
    } else {
      this.tooltip = (params) => {
        return params.valueFormatted ? params.valueFormatted : params.value;
      };
    }
    if (comparator) {
      switch (comparator.name) {
        case 'lastNameComparator':
          this.comparator = (valueA, valueB, nodeA, nodeB, isInverted) => {
            return GridComparators.lastNameComparator(nodeA, nodeB, comparator.dataToParse);
          };
          break;
        case 'textComparator':
          this.comparator = (valueA, valueB, nodeA, nodeB, isInverted) => {
            return GridComparators.basicTextComparator(valueA, valueB);
          };
          break;
      }
    }
    if (formatter) {
      switch (formatter.name) {
        case 'dateFormatter':
          this.valueFormatter = (params) => {
            const data = GridDataOperations.extractArrayProperty(params.data, formatter.field);
            return GridFormatters.dateFormatter(data);
          };
          this.valueGetter = (params) => {
            const data = GridDataOperations.extractArrayProperty(params.data, formatter.field);
            return GridFormatters.dateFormatter(data);
          };
          this.comparator = (valueA, valueB, nodeA, nodeB, isInverted) => {
            return GridComparators.dateComparator(valueA, valueB);
          };
          break;
        case 'ssnFormatter':
          this.valueFormatter = (params) => {
            const data = GridDataOperations.extractArrayProperty(params.data, formatter.field);
            return formatSSN(data, true);
          };
      }
    }
  }
}
