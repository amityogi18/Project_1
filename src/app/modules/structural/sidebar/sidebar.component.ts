import { Component, Input, OnInit } from '@angular/core';
import { SidebarModel } from '../../../models/sidebar/sidebar.model';
import { SidebarService } from '../../../services/http/sidebar/sidebar.service';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';

/**
 * The Sidebar Component
 *
 * Common Component for creating the navigation structure of the Sidebar.
 */
@Component({
  selector: 'c2c-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [SidebarService]
})
export class SidebarComponent implements OnInit {
  public company: string = 'UST Global Media Services, Inc.';
  public copyright: string = 'Copyright 2018';
  public defaultNavItems: Array<SidebarModel> = Defaults.DEFAULT_NAV_ITEMS;
  public sidebarCollapsed: boolean = false;
  public version: string = Defaults.DEFAULT_VERSION;

  /** The prefix of the module that this sidebar will be used in. */
  @Input() public modulePrefix: string;

  /** Defines the navigation links in the Sidebar. This needs to be an array of {@link SidebarModel} */
  @Input() public navItems: Array<SidebarModel> = this.defaultNavItems;

  /**
   * Constructor for the SidebarComponent
   *
   * @param sidebarService The data service for the sidebar.
   */
  constructor(private sidebarService: SidebarService) { }

  /**
   * Angular lifecycle hook for initialization logic. We use it here to set
   * build version to be displayed in the sidebar footer.
   */
  ngOnInit() {
    this.sidebarService.getVersion(this.modulePrefix).subscribe(
      (data) => {
        this.version = data.versionNumber;
      }
    );
  }

  /**
   * Action for toggling the expand/collapse of the sidebar.
   */
  public toggleSlideAwayDiv() {
    this.sidebarCollapsed = this.sidebarCollapsed === false ? true : false;
  }

  /**
   * Action for expanding a sidebar navigation item. If the sidebar contains nested links,
   * then clicking on them will call this function to show the sub-links.
   *
   * @param navItem The navigation item to expand.
   */
  public expandNavItem(navItem: SidebarModel) {
    if (navItem.hasSubItems) {
      const parent: string = navItem.displayOrder.toString().split('.')[0];
      for (const item of this.navItems) {
        if (item.displayOrder.toString().startsWith(`${parent}.`)) {
          item.display = !item.display;
        }
      }
    }
  }
}
