import { Component, Input, Output, OnDestroy, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ColDef } from 'ag-grid';
import { GridEventService } from '../../../services/events/grid/grid-event.service';
import { Subscription } from 'rxjs/Subscription';
import { ListComponent } from './custom-cells/list/list.component';
import { ListEditorComponent } from '../../../modules/elements/grid/custom-cells/list-editor/list-editor.component';
import { ImageComponent } from './custom-cells/image/image.component';
import { LinkComponent } from './custom-cells/link/link.component';
import { TitlesComponent } from './custom-cells/titles/titles.component';
import { GridIconComponent } from './custom-cells/grid-icon/grid-icon.component';
import { GridLinkComponent } from './custom-cells/grid-link/grid-link.component';
import { AddButtonModel } from '../../../models/button/add-button/add-button.model';
import { GridPageOptionsModel } from '../../../models/grid/grid-page-options.model';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';
import { SaveButtonModel } from '../../../models/button/save-button/save-button.model';

/**
 * The Grid Component
 *
 * Common component for displaying grids in the UI, which are meant for large/complex data structures.
 * We are utilizing the third-party component, {@link https://www.ag-grid.com ag-grid} for the main functionality.
 *
 * For an example of the Grid Component in use, see the All Projects grid in Feature Casting.
 */
@Component({
  selector: 'c2c-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnDestroy {
  public disableNavigationBack: boolean;
  public disableNavigationForward: boolean;
  public frameworkComponents;
  public gridApi;
  public gridColumnApi;
  public lbRecordCount: number;
  public lbTotalPages: number;
  public lbCurrentPage: number;
  public lbFirstRowOnPage: number;
  public lbLastRowOnPage: number;
  public noDataOverlay: string;
  public paginationPageSize: number = 25;

  private addRowSubscription: Subscription;
  private defaultColDefs = Defaults.DEFAULT_COL_DEFS_PROJECTS;
  private defaultPageOptions = Defaults.DEFAULT_PAGE_OPTIONS;
  private defaultRowData = Defaults.DEFAULT_ROW_DATA_PROJECTS;
  private defaultRowHeight: number = 30;
  private expandSubscription: Subscription;
  private refreshGridSubscription: Subscription;
  private fitColumnsSubscription: Subscription;

  /** Defines the options of the Add Button. Used for configuring the type of action the button should do. */
  @Input() public addButtonOptions: AddButtonModel = new AddButtonModel('TestFC', 'TestAllProject', 'row');
  @Input() public saveButtonOptions: SaveButtonModel = new SaveButtonModel('TestFC', 'TestAllProject', 'row');

  /** Defines the columns in a Grid. If needed, you can create an Object Literal and use it to set the ColDef properties.
   * However, if possible, you should create a list of {@link ColumnDefModel} and define your columns there. */
  @Input() public columnDefs: ColDef[] = this.defaultColDefs;

  /** Provides customization for the Grid. Use {@link GridPageOptionsModel} to customize the features of the Grid. */
  @Input() public pageOptions: GridPageOptionsModel = this.defaultPageOptions;

  /** Sets the data of the Grid. Any valid JSON would work for row data. Getting the data to display correctly
   * requires setting up the {@link ColumnDefModel} correctly, and passing the right parameters. */
  @Input() public rowData: any[] = this.defaultRowData;

  /** Outputs an event when the data is refreshed. Used to provide extra logic if needed. */
  @Output() refreshGridData: EventEmitter<string> = new EventEmitter<string>();

  /** Gets access to the 'pageSize' dropdown used for setting the amount of rows displayed. */
  @ViewChild('pageSize') public pageSize: ElementRef;

  /** Gets access to the 'pageNumber' input used for setting the page number to navigate to. */
  @ViewChild('pageNumber') public pageNumber: ElementRef;

  /**
   * Constructor for the Grid
   *
   * Defines the frameworkComponents (custom cell renderers) used in the Grid.
   * Subscribes to any events happening within the Grid.
   *
   * @param gridEventService The service to handle all events related to the Grid.
   */
  constructor(private gridEventService: GridEventService) {

    /** Custom Cell Renderers tied to this Grid. Add new ones here. */
    this.frameworkComponents = {
      imageComponent: ImageComponent,
      linkComponent: LinkComponent,
      listComponent: ListComponent,
      listEditorComponent: ListEditorComponent,
      titlesComponent: TitlesComponent,
      gridIconComponent: GridIconComponent,
      gridLinkComponent: GridLinkComponent
    };

    this.noDataOverlay = '<span class="ag-overlay-loading-center">No Records Found</span>';

    this.expandSubscription = this.gridEventService.getExpandEvent()
      .subscribe(value => {
        this.setRowHeight(value);
    });

    this.addRowSubscription = this.gridEventService.getAddRowEvent()
      .subscribe(value => {
        console.log(`Event [${value}] has been triggered.`);
        this.addRow();
      });

    this.refreshGridSubscription = this.gridEventService.getRefreshGridEvent()
    .subscribe(value => {
      this.refresh();
    });

    this.fitColumnsSubscription = this.gridEventService.getColumnsFitEvent()
    .subscribe(value => {
      this.fitColumnsSize();
    })
  }

  /**
   * This is called when the Grid has been initialized.
   * Mostly used for adjusting the size based off of the data given.
   *
   * @param params The params being passed from the Grid.
   */
  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();

    this.detectHeightChange();
    this.setPaginationVariables();

    window.addEventListener('resize', function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
  }

  /**
   * Angular's onDestroy method provided to do an cleanup work necessary.
   * In this case, clear the grid properties, and unsubscribe to all events.
   */
  ngOnDestroy(): void {
    this.columnDefs = null;
    this.gridApi = null;
    this.pageOptions = null;
    this.rowData = null;
    this.addRowSubscription.unsubscribe();
    this.expandSubscription.unsubscribe();
    this.refreshGridSubscription.unsubscribe();
  }

  /**
   * Adds a new row to the Grid. Triggered with the Add (plus) icon is pressed.
   */
  addRow() {
    const newItem = this.createNewRowData();
    const res = this.gridApi.updateRowData({ add: [newItem] });
  }

  /**
   * Data to insert into Grid.
   * TODO: Make this dynamic.
   */
  createNewRowData() {
    const newData = this.rowData[0];
    return newData;
  }

  /**
   * Sets the height of the current row that is getting expanded.
   * This is triggered when a user clicks on the expand/collapse icon (double arrow) in the grid.
   *
   * @param expandEvent The Object Literal expand event containing expand information.
   */
  setRowHeight(expandEvent): void {
    const currentRow = this.gridApi.getDisplayedRowAtIndex(expandEvent.index);
    this.gridApi.getDisplayedRowAtIndex(expandEvent.index).setRowHeight(this.calcHeight(expandEvent, currentRow.data[expandEvent.field]));
    this.detectHeightChange();
  }

  /**
   * Calculates the height that needs to be set for the current row based on the length of data and type of event.
   *
   * @param event The Object Literal expand event containing expand information.
   * @param data The current row data that is getting expanded.
   */
  calcHeight(event, data): number {
    const liHeight: number = 20;
    const paddingHeight: number = 10;
    if (event.image && event.state) {
      return (liHeight * 5) + paddingHeight;
    } else if (!event.image && event.state) {
      return data.length > 2 ? ((liHeight * 2) + this.defaultRowHeight) :
             data.length > 1 ? (liHeight + this.defaultRowHeight) :
             this.defaultRowHeight;
    } else {
      return event.totalHeight + paddingHeight;
    }
  }

  /**
   * Adjusts the row heights when a sort has been activated.
   */
  onSortChanged() {
    this.detectHeightChange();
  }

  /**
   * Grid event to re-render row heights after they have been changed.
   */
  detectHeightChange() {
    if (this.gridApi) {
      this.gridApi.onRowHeightChanged();
    }
  }

  /**
   * Event to handle when the Grid page size changes (amount of rows displayed on each page).
   */
  onPageSizeChanged() {
    const value = this.pageSize.nativeElement.value;
    this.gridApi.paginationSetPageSize(Number(value));
  }


  /**
   * Event to handle when the Grid page number changes (current page on the paginator).
   */
  onPageNumberChanged() {
    const value = this.pageNumber.nativeElement.value;
    this.onBtJumpToPage(value);
  }


  /**
   * Event to handle when the viewport of the Grid changes (i.e. grid size, page change, etc.).
   */
  onPaginationChanged() {
    this.setPaginationVariables();
    this.detectHeightChange();
  }

  /**
   * Event to handle when the Grid size changes. Specifically for when the sidebar is collapsed, or the window size changes.
   */
  onGridSizeChanged() {
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit();
    }
  }

  /**
   * Handles the initial value/state of the pagination bar at the bottom of the Grid.
   * Gets called everytime the viewport of the grid changes (i.e. user changes the page).
   */
  setPaginationVariables() {
    if (this.gridApi) {
      this.lbCurrentPage = this.gridApi.paginationGetCurrentPage() + 1;
      this.lbTotalPages = this.gridApi.paginationGetTotalPages();
      if (this.gridApi.paginationGetTotalPages() === this.gridApi.paginationGetCurrentPage() + 1) {
        this.lbLastRowOnPage = this.rowData.length;
      } else {
        this.lbLastRowOnPage = this.gridApi.paginationGetPageSize() * (this.gridApi.paginationGetCurrentPage() + 1);
      }
      if (this.rowData) {
        this.lbRecordCount = this.rowData.length;
      }
      this.lbFirstRowOnPage = this.gridApi.paginationGetPageSize() * this.gridApi.paginationGetCurrentPage() + 1;
    }
    this.disableNavigationBack = this.lbCurrentPage === 1 ? true : false;
    this.disableNavigationForward = this.lbCurrentPage === this.lbTotalPages ? true : false;
  }

  /**
   * Action to go to the first page of the Grid.
   */
  onBtFirst() {
    this.gridApi.paginationGoToFirstPage();
  }

  /**
   * Action to go to the last page of the Grid.
   */
  onBtLast() {
    this.gridApi.paginationGoToLastPage();
  }

  /**
   * Action to go to the next page of the Grid.
   */
  onBtNext() {
    this.gridApi.paginationGoToNextPage();
  }

  /**
   * Action to go to the previous page of the Grid.
   */
  onBtPrevious() {
    this.gridApi.paginationGoToPreviousPage();
  }

  /**
   * Action to go to the specified page number of the Grid.
   *
   * @param pageNumber The page number to navigate to.
   */
  onBtJumpToPage(pageNumber: number) {
    this.gridApi.paginationGoToPage(pageNumber - 1);
    this.lbCurrentPage = pageNumber;
  }

  /**
   * Handles the refresh event, and clears all filters/sorts.
   */
  refresh() {
    this.gridApi.setFilterModel(null);
    this.gridApi.setSortModel(null);
    this.refreshGridData.emit('refreshGridData');
    this.gridApi.refreshCells();
  }

  fitColumnsSize(){
    this.gridApi.sizeColumnsToFit();
  }
}
