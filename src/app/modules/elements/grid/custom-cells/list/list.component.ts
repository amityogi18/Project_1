import { Component, Renderer2, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GridEventService } from '../../../../../services/events/grid/grid-event.service';
import { GridDataOperations } from '../../../../../utils/grid/grid-data-operations';

/**
 * The ListComponent
 *
 * Grid Cell Renderer that handles the display of lists (with optional expand/collapse arrow) in the Grid.
 */
@Component({
  selector: 'c2c-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public col: any;
  public data: any;
  public dataToIterate: string;
  public enableCollapse: boolean = false;
  public isCollapsed: boolean = true;
  public isImage: boolean = false;
  public isMultiple: boolean = false;
  public keys: string[] = [];
  public route: string;
  public routeParams: Array<string>;
  public totalHeight: number;

  private subscription: Subscription;

  /**
   * Constructor for the ListComponent
   *
   * @param gridEventService The service to handle all events related to the Grid.
   * @param elRef A reference to a certain element in the DOM. In this case, the list.
   * @param renderer Used for safely accessing elements in the DOM.
   */
  constructor(private gridEventService: GridEventService,
              private elRef: ElementRef,
              private renderer: Renderer2) { }

  /**
   * Ag-grid event for doing any initialization logic on the Cell Renderer.
   *
   * @param params The params passed in from the ag-grid event. This contains information on the Grid,
   *  including the data and parameters from the ListParamsModel.
   */
  agInit(params: any): void {
    this.dataToIterate = params.dataToIterate;
    this.enableCollapse = params.isExpandable;
    this.isImage = params.isImage;
    this.isMultiple = params.isMultiple;
    this.col = params.colDef.field;
    this.keys = params.dataKeys;

    if (params.data.content) {
      for (let i = 0; i < params.data.content.length; i++) {
        this.data = this.calcDataToDisplay(params.data.content[i][params.dataToIterate], params.colSpacing);
      }
    } else {
      this.data = this.calcDataToDisplay(params.data[params.dataToIterate], params.colSpacing);
    }
    //this.data = this.calcDataToDisplay(params.data[this.dataToIterate], params.colSpacing);
    if (this.data.length > 1) {
      params.node.setRowHeight(this.getRowHeight(this.data));
    }

    if (params.routeParams) {
      this.routeParams = GridDataOperations.extractArrayProperty(params.data, params.routeParams);

      if (this.routeParams) {
        this.data.forEach((element, index) => {
          element.route = this.buildRoute(params.routePre, this.routeParams[index], params.routePost);
        });
      }
    }
  }

  /**
   * Gets the index of the row being expanded (with Renderer2) and emits an event for expanding.
   */
  toggleState(): void {
    const parent = this.renderer.parentNode(this.elRef.nativeElement);
    const grandparent = this.renderer.parentNode(parent);
    this.isCollapsed = !this.isCollapsed;

    this.gridEventService.expandEvent({
      index: grandparent.getAttribute('row-index'),
      state: this.isCollapsed,
      image: this.isImage,
      field: this.dataToIterate,
      totalHeight: this.totalHeight
    });
  }

  /**
   * Gets the intial row height that the row should be based on the data.
   *
   * @param data The data of the list. Used to check against the length.
   */
  getRowHeight(data): number {
    if (this.isImage) {
      return 110;
    } else {
      return data.length > 2 ? 70 : 50;
    }
  }

  /**
   * Checks the length of the data to determine if the expand/collapse icon needs to display or not.
   * If the length is less than three, the arrow does not need to display.
   */
  isCorrectLength(): boolean {
    if (this.isImage) {
      return this.data.length > 5;
    } else {
      return this.data.length > 3;
    }
  }

  /**
   * Calculates and formats the data to be displayed on each list item. Loops through each key and adds the
   * data at data[key] and adds to the string to be displayed. This way we can add as many properties as we need displayed.
   *
   * @param data The list data to iterate over.
   * @param field The field for other lists to base their spacing on.
   */
  calcDataToDisplay(data, field): any {
    let compare = [];
    const formattedData = [];
    this.totalHeight = 0;

    if (field) {
      compare = this.getDataToMeasure(data, field);
    }

    if (!this.isMultiple) {
      data.forEach((element, index) => {
        let displayStr = '';
        let liHeight = 20;
        if (compare.length > 1 && compare[index] && compare[index].length > 0) {
          liHeight = compare[index].length * 20;
        }
        const liHeightPx = String(liHeight) + 'px';
        if (this.keys && this.keys.length > 0) {
          this.keys.forEach(key => {
            if (element[this.col][key]) {
              displayStr += element[this.col][key] + ' ';
            }
          });
        } else {
          displayStr += element[this.col];
        }
        formattedData.push({value: displayStr.trim(), height: liHeightPx});
        this.totalHeight += liHeight;
      });
    } else {
      data.forEach(element => {
        this.keys.forEach(key => {
          if (Array.isArray(element[this.col][key])) {
            if (element[this.col][key].length > 0) {
              element[this.col][key].forEach(el => {
                formattedData.push({value: el, height: '20px'});
                this.totalHeight += 20;
              });
            } else {
              formattedData.push({value: '', height: '20px'});
              this.totalHeight += 20;
            }
          } else {
            formattedData.push({value: '', height: '20px'});
            this.totalHeight += 20;
          }
        });
      });
    }
    return formattedData;
  }

  /**
   * Converts array of data to a measurable list of data. It breaks up a field (for example, 'performer.akaNames') by each period
   * into an array, loops through that array, and returns the data to measure against.
   *
   * @param data The list data to iterate over.
   * @param field The field that will be measured against.
   */
  getDataToMeasure(data, field): any {
    const keys: string[] = field.split('.');
    let measure = data;
    let arr = [];

    keys.forEach(k => {
      measure.forEach(m => {
        arr.push(m[k]);
      });
      measure = arr;
      arr = [];
    });

    return measure;
  }

  /**
   * Takes all three params given from the {@link ListParamsModel} and converts to navigate-able string.
   * The route params will be appended between pre and post.
   *
   * @param pre The first part of the route.
   * @param params The optional parameters to pass to the route.
   * @param post The optional last part of the route.
   */
  public buildRoute(pre, params, post): string {
    let route: string = pre;
    if (params) {
      route += ('/' + params);
    }
    if (post) {
      route += ('/' + post);
    }
    return route;
  }

}
