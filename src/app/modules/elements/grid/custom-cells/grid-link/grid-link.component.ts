import { Component, OnInit } from '@angular/core';
import { navigationCancelingError } from '@angular/router/src/shared';

/**
 * The GridLinkComponent
 *
 * Grid Cell Renderer that converts given data to a link for navigation purposes.
 */
@Component({
  selector: 'c2c-grid-link',
  templateUrl: './grid-link.component.html',
  styleUrls: ['./grid-link.component.scss']
})
export class GridLinkComponent {
  public route: string;
  public routeParams: string;
  public value: string;

  /**
   * Constructor for the GridLinkComponent
   */
  constructor() { }

  /**
   * Ag-grid event for doing any initialization logic on the Cell Renderer.
   *
   * @param params The params passed in from the ag-grid event. This contains information on the Grid,
   *  including the data and parameters from the GridLinkComponent.
   */
  agInit(params: any) {
    this.routeParams = params.data[params.routeParams];
    this.value = params.value;
    this.route = this.buildRoute(params.routePre, params.routePost);
  }

  /**
   * Takes all three params given from the {@link GridLinkParamsModel} and converts to navigate-able string.
   * The route params will be appended between pre and post.
   *
   * @param pre The first part of the route.
   * @param post The optional last part of the route.
   */
  public buildRoute(pre, post): string {
    let route: string = pre;
    if (this.routeParams) {
      route += ('/' + this.routeParams);
    }
    if (post) {
      route += ('/' + post);
    }
    return route;
  }

}
