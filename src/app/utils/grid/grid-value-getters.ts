

/**
 * The GridValueGetters
 *
 * Util class for providing underlying values for Filtering.
 * Also can be used to display a complex value (like nested JSON) on a column.
 */
export class GridValueGetters {

  /**
   * Gets all of the list items out of the listComponent and returns them in one array.
   * The main purpose of this is for properly filtering a Grid with a list.
   *
   * @param gridParams The params givin from the Grid API. Contains information about the Grid.
   * @param customParams The custom params passed into the Cell Renderer.
   */
  public static listValueGetter(gridParams, customParams) {
    const arr = [];
    const col = gridParams.colDef.field;

    gridParams.data[customParams.dataToIterate].forEach(element => {
      let displayStr = '';
      if (customParams.dataKeys && customParams.dataKeys.length > 0) {
        customParams.dataKeys.forEach(key => {
          displayStr += element[col][key] + ' ';
        });
      } else {
        displayStr += element[col];
      }
      arr.push(displayStr.trim());
    });
    return arr;
  }

  /**
   * Gets all of the properties from the ImageComponent and returns them as an array.
   * The main purpose of this is for properly filtering a Grid with images.
   *
   * @param gridParams The params givin from the Grid API. Contains information about the Grid.
   * @param customParams The custom params passed into the Cell Renderer.
   */
  public static imageValueGetter(gridParams, customParams) {
    const arr = [];
    const subTitles =  gridParams.data[customParams.dataToIterate][customParams.subTitle];
    arr.push(gridParams.data[customParams.dataToIterate][customParams.title[0]]);
    arr.push(gridParams.data[customParams.dataToIterate][customParams.title[1]]);
    if (subTitles) {
      subTitles.forEach(element => {
        arr.push(element);
      });
    }
    return arr;
  }

  /**
   * Gets all of the properties from the TitlesComponent and returns them as an array.
   * The main purpose of this is for properly filtering a Grid with multiple titles.
   *
   * @param gridParams The params givin from the Grid API. Contains information about the Grid.
   * @param customParams The custom params passed into the Cell Renderer.
   */
  public static titlesValueGetter(gridParams, customParams) {
    const arr = [];
    const subTitles = gridParams.data[customParams.dataKeys[1]];
    arr.push(gridParams.data[customParams.dataKeys[0]]);
    if (subTitles) {
      subTitles.forEach(element => {
        arr.push(element);
      });
    }
    return arr;
  }

  /**
   * Gets all of the properties from the LinkComponent and returns them as an array.
   * The main purpose of this is for properly filtering a Grid with a single item.
   *
   * @param gridParams The params givin from the Grid API. Contains information about the Grid.
   * @param customParams The custom params passed into the Cell Renderer.
   */
  public static linkValueGetter(gridParams, customParams) {
    const arr = [];

    arr.push(gridParams.data[customParams.dataKeys[0]].name);

      return arr;
  }
}
