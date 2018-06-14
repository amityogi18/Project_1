import { IColumnDefParamsModel } from '../../interfaces/grid/icolumn-def-params';

/**
 * The ImageParamsModel
 *
 * Model for passing the parameters needed for defining the values in the {@link ImageComponent}.
 */
export class ImageParamsModel implements IColumnDefParamsModel {
  dataToIterate: string;
  subTitle?: string;
  title?: string[];

  /**
   * Constructor for the ImageParamsModel
   *
   * @param dataToIterate Specifies which data structure to drill into. For example, if 'talent' was specified here,
   *  it would look into the data.talent object to get the values to display.
   * @param subTitle The property name to get subTitle values. For example, if 'akaNames' was specified here, it would look
   *  into the data.talent.akaNames object to get the values to display. 'akaNames' needs to be an array to work.
   * @param title An array of strings that specifies which properties to display in the title. For example, if ['firstName', 'lastName']
   *  was specified here, it would concatenate the properties, data.talent.firstName & data.talent.lastName, into a single string.
   */
  constructor(dataToIterate: string, subTitle?: string, title?: string[]) {
    this.dataToIterate = dataToIterate;
    this.subTitle = subTitle;
    this.title = title;
  }
}
