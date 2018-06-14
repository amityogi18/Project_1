import { ISidebar } from '../../interfaces/sidebar/isidebar';

export class SidebarModel implements ISidebar {
  name: string = 'TEST LINK';
  displayOrder: number = 1.0;
  route: string = 'testLink';
  hasSubItems: boolean;
  display?: boolean;

  constructor(
    name: string,
    displayOrder: number,
    route: string,
    hasSubItems: boolean,
    display?: boolean
  ) {
      this.name = name;
      this.displayOrder = displayOrder;
      this.route = route;
      this.hasSubItems = hasSubItems;
      this.display = display;
    }

}
