import { Component } from '@angular/core';

/**
 * The TitlesComponent
 *
 * Grid Cell Renderer that handles the display of Titles and Subtitles in the Grid.
 * An example of use, would be the project title/aka names column of the All Project Grid in FC.
 */
@Component({
  selector: 'c2c-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent {
  public isLinked: boolean = false;
  public params: any;
  public subTitles;
  public title;

  /**
   * Constructor for the TitlesComponent
   */
  constructor() { }

  /**
   * Ag-grid event for doing any initialization logic on the Cell Renderer.
   *
   * @param params The params passed in from the ag-grid event. This contains information on the Grid,
   *  including the data and parameters from the TitlesParamsModel.
   */
  agInit(params: any): void {
    this.title = this.getValues(params.data, params.dataKeys[0]);
    this.subTitles = this.getValues(params.data, params.dataKeys[1]);

    if (params.link != null) {
      this.isLinked = true;
      this.params = params;
    }
    if (this.subTitles) {
      params.node.setRowHeight(40);
    }
  }

  /**
   *
   * @param data The data object given from the Grid.
   * @param params A string of properties (if more than one, separated by a '.') used to access specific data.
   *  For example, if 'deals.performer.name' was specified here, it would split the string into an array of strings
   *  ['deals', 'performer', 'name'] and iterate over those in order to access each property in the data, and
   *  properly output it into a formatted string.
   */
  getValues(data, params) {
    const keys: string[] = params.split('.');
    if (keys.length > 1) {
      keys.forEach(k => {
        if (Array.isArray(data)) {
          const arr = [];
          data.forEach(el => {
            arr.push(el[k]);
          });
          data = this.formatSubtitles(arr);
        } else {
          data = data[k];
        }
      });
    } else {
      if (Array.isArray(data[keys[0]])) {
        data = this.formatSubtitles(data[keys[0]]);
      } else {
        data = data[keys[0]];
      }
    }
    return data;
  }

  /**
   * Takes an array of strings and converts into single string with semi-colons appended between each item.
   *
   * @param titles An array of strings to iterate over.
   */
  formatSubtitles(titles) {
    let str = '';
    titles.forEach(title => {
      str += title;
      if (titles[titles.length - 1] !== title) {
        str += '; ';
      }
    });
    return str;
  }

}
