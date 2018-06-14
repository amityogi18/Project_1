import { IColumnDefParamsModel } from '../../interfaces/grid/icolumn-def-params';

/**
 * The TitlesParamsModel
 *
 * Model for passing the parameters needed for defining the values in the {@link TitlesComponent}.
 */
export class TitlesParamsModel implements IColumnDefParamsModel {
  dataKeys: string[];

  /**
   * Constructor for the TitlesParamsModel
   *
   * @param dataKeys Specifies which properties to display. For example, if ['title', 'akaNames'] was specified here, it
   *  would look into data.title and data.akaNames, and display them accordingly. Note: the TitlesComponent is only used for
   *  displaying for the types of title: string, and subTitles: string[]. Anything that strays away from that is out of scope
   *  for the TitlesComponent.
   */
  constructor(dataKeys: string[]) {
    this.dataKeys = dataKeys;
  }
}
