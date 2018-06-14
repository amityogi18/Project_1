import { IColumnDefParamsModel } from '../../interfaces/grid/icolumn-def-params';

/**
 * The LinkParamsModel
 *
 * Model for passing the parameters needed for defining the values in the {@link GridLinkComponent}.
 */
export class GridLinkParamsModel implements IColumnDefParamsModel {
  public routeParams?: string;
  public routePre: string;
  public routePost?: string;

  /**
   * Constructor for the GridLinkParamsModel
   *
   * @param routePre String that specifies the root route to navigate to. This will be the first part of the route.
   * For example: '/deals'.
   * @param routeParams String that specifies the property name to get data from from, to use as a route parameter.
   * For example 'dealId'.
   * @param routePost String that specifies the end route to attach to the end of the route.
   * For example 'summary'
   *
   * The above three params would combine into one route, using examples: '/deals/123456/summary'
   */
  constructor(routePre: string, routeParams?: string, routePost?: string) {
    this.routePre = routePre;
    this.routeParams = routeParams;
    this.routePost = routePost;
  }
}
