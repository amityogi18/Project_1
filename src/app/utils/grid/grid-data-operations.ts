/**
 * The GridDataOperations
 *
 * Handles all operations related to data operations in the Grid.
 */
export class GridDataOperations {

  /**
   * Used to extract the data out of the Grid, based on a string that is structured like the following: 'prop1.prop2.prop3'
   * It will split the string (by dot) into an array (keys) and pull out each piece of data based on the property name.
   * In the end, it will return only the data that is needed.
   *
   * @param data The data structure from the Grid.
   * @param property The property (or multiple) to pull out of the Grid. Must be in the format of:
   * 'prop1.prop2.prop3' (each property separated by a dot).
   */
  public static extractArrayProperty(data, property) {
    if (!property) {
      throw console.error('GridDataOperations: You need to specify a property name in the Grid column definitions');
    } else {
      const keys = property.split('.');
      if (keys.length === 1) {
        return data[property];
      } else {
        keys.forEach(k => {
          if (Array.isArray(data)) {
            const arr = [];
            data.forEach((item) => {
              arr.push(item[k]);
            });
            data = arr;
          } else {
            data = data[k];
          }
        });
      }
    }
    return data;
  }
}
