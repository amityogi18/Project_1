import { Component } from '@angular/core';
import { ColDef } from 'ag-grid';
import { ICellEditorAngularComp } from 'ag-grid-angular';

/**
 * The ListEditorComponent
 *
 * Grid Cell Renderer that handles the display of editable lists in the Grid.
 * TODO: Do we still need this component? If so, refactor into something more robust.
 */
@Component({
  selector: 'c2c-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.scss']
})
export class ListEditorComponent implements ICellEditorAngularComp {
  public data: any;
  public col: ColDef;

  /**
   * Constructor for the ListEditorComponent
   */
  constructor() { }

  /**
   * Ag-grid event for doing any initialization logic on the Cell Renderer.
   *
   * @param params The params passed in from the ag-grid event. This contains information on the Grid,
   *  including the data and parameters.
   */
  agInit(params: any): void {
    console.log(params);
    this.data = params.node.data.details;
    this.col = params.column.colDef.field;
  }

  getValue(): any {
    return this.data;
  }

  isPopup(): boolean {
    return true;
  }

}
