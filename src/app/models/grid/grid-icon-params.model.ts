import { IColumnDefParamsModel } from '../../interfaces/grid/icolumn-def-params';

/**
 * The GridIconParamsModel
 *
 * Model for passing the parameters needed for defining the values in the {@link GridIconComponent}.
 */
export class GridIconParamsModel implements IColumnDefParamsModel {
  public showEdit: boolean;
  public showPdf: boolean;

  /**
   * The constructor for GridIconParamsModel
   *
   * @param showEdit Boolean value that defines whether the 'Edit' button is used or not.
   * @param showPdf Boolean value that defines whether the 'PDF' button is used or not.
   */
  constructor(showEdit?: boolean, showPdf?: boolean) {
    this.showEdit = showEdit;
    this.showPdf = showPdf;
  }
}
