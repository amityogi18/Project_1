import { IColumnDefParamsModel } from '../../interfaces/grid/icolumn-def-params';

/**
 * The ListParamsModel
 *
 * Model for passing the parameters needed for defining the values in the {@link ListComponent}.
 */
export class ListParamsModel implements IColumnDefParamsModel {
  colSpacing?: string;
  dataToIterate: string;
  dataKeys?: string[];
  isExpandable?: boolean;
  isImage?: boolean;
  isMultiple?: boolean;
  routeParams?: string;
  routePre: string;
  routePost?: string;

  /**
   * Constructor for the ListParamsModel
   *
   * @param dataToIterate Specifies which data structure to drill into. For example, if 'deals' was specified here,
   *  it would look into the data.deals object to get the values to display.
   * @param dataKeys Specifies which properties to display for each list item. For example, if ['firstName', 'lastName'] was
   *  specified here, it would concatenate the properties, data.deals[index].firstName & data.deals[index].lastName, into a single string.
   * @param isExpandable If set to true, will show the 'expand/collapse' arrow on the cell of this column.
   * @param isImage If set to true, will setup the height to be ready for an image to be displayed in the data.
   * @param isMultiple If set to true, will enable each element in the list (<li> element) to support multiple values (i.e. an Array).
   *  This works directly with the 'colSpacing' param, in order to setup the correct spacing between elements.
   * @param colSpacing Specifies the property that the list will be spacing off of. In other words, this column will look at the length of
   *  the specified property to correct setup the spacing between the <li> elements.
   * @param routePre String that specifies the root route to navigate to. This will be the first part of the route.
   * For example: '/deals'.
   * @param routeParams Specifies a string that will target a Object property to pass as parameters to a route. This parameter should be in
   *  the format of array dot notaion (i.e. 'deal.id').
   * @param routePost String that specifies the end route to attach to the end of the route.
   * For example 'summary'
   */
  constructor(dataToIterate: string, dataKeys?: string[], isExpandable?: boolean,
              isImage?: boolean, isMultiple?: boolean, colSpacing?: string,
              routePre?: string, routeParams?: string, routePost?: string) {
    this.dataToIterate = dataToIterate;
    this.dataKeys = dataKeys;
    this.isExpandable = isExpandable;
    this.isImage = isImage;
    this.isMultiple = isMultiple;
    this.colSpacing = colSpacing;
    this.routePre = routePre;
    this.routeParams = routeParams;
    this.routePost = routePost;
  }
}
