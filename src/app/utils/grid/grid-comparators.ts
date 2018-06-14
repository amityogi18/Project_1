/**
 * The GridComparators
 *
 * Util class for providing sorting functionality on the grid.
 */
export class GridComparators {

  /**
   * Handles the sorting for talent, performers, participants, etc. who need to be sorted by last name.
   *
   * @param nodeA The first row to compare.
   * @param nodeB The second row to compare.
   * @param data The data specified. This can be up to three different properties.
   */
  public static lastNameComparator(nodeA, nodeB, data) {
    let lastA: string;
    let lastB: string;
    if (data.field3 && data.field2) { // field1 should be an array
      if (nodeA.data[data.field1].length > 0 && nodeA.data[data.field1][0][data.field2]) {
        lastA = nodeA.data[data.field1][0][data.field2][data.field3];
      } else {
        lastA = '';
      }
      if (nodeB.data[data.field1].length > 0 && nodeB.data[data.field1][0][data.field2]) {
        lastB = nodeB.data[data.field1][0][data.field2][data.field3];
      } else {
        lastB = '';
      }
    } else if (data.field2) {
      lastA = nodeA.data[data.field1][data.field2];
      lastB = nodeB.data[data.field1][data.field2];
    } else {
      lastA = nodeA.data[data.field1];
      lastB = nodeB.data[data.field1];
    }
    return lastA < lastB ? -1 : lastA > lastB ? 1 : 0;
  }

  /**
   * Handles the sorting of dates.
   *
   * @param a The first number to compare.
   * @param b The second number to compare.
   */
  public static dateComparator(a: number, b: number): number {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();
    return dateA > dateB ? 1 : -1;
  }

  /**
   * Handles the sorting of basic text. Since the grid prioritizes capital letters first,
   * this throws off the sorting. Need to lowercase strings, then compare.
   *
   * @param a The first string to compare.
   * @param b The second string to compare.
   */
  public static basicTextComparator(a: string, b: string): number {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
  }
}
