import { Component, Input, OnInit } from '@angular/core';
import { GridEventService } from '../../../../../services/events/grid/grid-event.service';

/**
 * The LinkComponent
 *
 * Grid Cell Renderer that handles turns a property into a link for navigation purposes.
 * TODO: This isn't consistent and needs to be updated.
 */
@Component({
  selector: 'c2c-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  public linkURL: string;
  public urlParams: string;

  @Input() public params: any;
  @Input() public value: string;

  public data: any;
  public dataToIterate: string;
  public id: string;
  public tooltip: string;

  /**
   * Constructor for the LinkComponent
   *
   * @param gridEventService
   */
  constructor(private gridEventService: GridEventService) { }

  ngOnInit() {

    if (!this.params || !this.params.link) {
      return;
    }
    this.linkURL = this.params.link;
    if (this.params.urlParams != null) {
      this.setLinkParams(this.params);
    }
  }

/**
   * Ag-grid event for doing any initialization logic on the Cell Renderer.
   *
   * @param params The params passed in from the ag-grid event. This contains information on the Grid,
   *  including the data and parameters from the LinkParamsModel.
   */
  agInit(params: any): void {
    this.dataToIterate = params.dataKeys;
    this.data = params.data[this.dataToIterate];
    this.linkURL = params.link;

    if (params.urlParams != null) {
      this.setLinkParams(params);
    }
    this.id = this.data.id;
  }

  private setLinkParams(params: any): void {
    const paramsArray: Array<string> = [];
    for (const param of params.urlParams) {
      paramsArray.push(params.data[param]);
    }
    this.urlParams = paramsArray.toString();
  }
}
