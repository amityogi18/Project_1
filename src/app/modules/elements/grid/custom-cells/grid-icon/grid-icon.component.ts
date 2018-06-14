import { Component, OnInit } from '@angular/core';

/**
 * The GridIconComponent
 *
 * Grid Cell Renderer that is used for displaying icons in the Grid.
 */
@Component({
  selector: 'c2c-grid-icon',
  templateUrl: './grid-icon.component.html',
  styleUrls: ['./grid-icon.component.scss']
})
export class GridIconComponent {
  public showEdit: boolean = false;
  public showPdf: boolean = false;

  /**
   * Constructor for the GridIconComponent
   */
  constructor() { }

  /**
   * Ag-grid event for doing any initialization logic on the Cell Renderer.
   *
   * @param params The params passed in from the ag-grid event. This contains information on the Grid,
   *  including the data and parameters from the GridIconComponent.
   */
  agInit(params: any) {
    this.showEdit = params.showEdit;
    this.showPdf = params.showPdf;
  }
}
