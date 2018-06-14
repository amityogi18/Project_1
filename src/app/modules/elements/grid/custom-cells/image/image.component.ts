import { Component } from '@angular/core';

/**
 * The ImageComponent
 *
 * Grid Cell Renderer that handles the display of images in the Grid.
 */
@Component({
  selector: 'c2c-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  public data: any;
  public dataToIterate: string;
  public image: any;
  public subTitle: any;
  public title: any;
  public tooltip: string;
  public routeUrl : string;
  public id : string;
  public isMinor: boolean;
  /**
   * Constructor for the ImageComponent
   */
  constructor() { }

  /**
   * Ag-grid event for doing any initialization logic on the Cell Renderer.
   *
   * @param params The params passed in from the ag-grid event. This contains information on the Grid,
   *  including the data and parameters from the ImageParamsModel.
   */
  agInit(params: any) {
    this.dataToIterate = params.dataToIterate;

    let iterativeData: object = {};

    if (params.data[this.dataToIterate].length) {
      for (let i = 0; i < params.data[this.dataToIterate].length; i++) {
        iterativeData = params.data[this.dataToIterate][i];
      }
      this.data = iterativeData;
    } else {
      this.data = params.data[this.dataToIterate];
    }

    this.image = this.data.image;
    this.subTitle = params.subTitle;
    this.title = params.title;
    this.routeUrl = this.data.routeUrl;
    this.id = params.data.id;
    this.tooltip = this.calcDataToDisplay(this.data, this.title);
    this.isMinor = this.data.minor || false;
  }

  /**
   * Concatenates the given properties into a single string for displaying proper tooltips.
   *
   * @param data The data object from the Grid.
   * @param title An array of properties to iterate over.
   */
  calcDataToDisplay(data, title) {
    let displayStr = '';
    title.forEach(element => {
      if (data[element]) {
        displayStr += data[element] + ' ';
      }
    });
    return displayStr.trim();
  }
}
