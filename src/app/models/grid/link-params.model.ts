import { TitlesParamsModel } from '../../../../public_api';
import { IColumnDefParamsModel } from '../../interfaces/grid/icolumn-def-params';

/**
 * The LinkParamsModel
 *
 * Model for passing the parameters needed for defining the values in the {@link LinkComponent}.
 */
export class LinkParamsModel implements IColumnDefParamsModel {
  dataKeys: string[];
  link?: string;
  urlParams?: string[];

  /**
   * Constructor for the LinkParamsModel
   *
   * @param dataKeys
   * @param link
   * @param urlParams
   */
  constructor(dataKeys: string[], link?: string, urlParams?: string[]) {
    this.dataKeys = dataKeys;
    this.link = link;
    this.urlParams = urlParams;
  }
}
