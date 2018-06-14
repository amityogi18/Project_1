import { Component, OnInit, Input } from '@angular/core';

/**
 * The NavBarComponent
 *
 * Part of the Header Common Component for displaying the navigation items to all
 * the different Modules within the C2C Application.
 *
 * TODO: Create a Model for the HistoryItem object.
 * TODO: Hook up a link to each navigation item (this will require some discussion).
 */
@Component({
  selector: 'c2c-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public historyItems: {historyLabel: string, href: string, class: string}[];
  public navbarItems: {label: string, href: string, class: string}[];

  /** The Module Name to be displayed in the left-hand navigation item (history dropdown with hamburger icon) */
  @Input() public moduleName: string;
  @Input() public talentNav: string = '#';

  /**
   * Constructor for the NavBarComponent
   */
  constructor() { }

  /**
   * Angular's lifecycle hook for initialization logic. Currently hard-coding the navbarItems and historyItems.
   */
  ngOnInit() {
    this.navbarItems = [
      {label: 'Home', href: '#', class: 'navbar-home'},
      {label: 'ScriptTracker', href: '#', class: 'navbar-pencil'},
      {label: 'HitList', href: '#', class: 'navbar-star'},
      {label: 'DealPoint', href: '#', class: 'navbar-handshake'},
      {label: 'Focus', href: '#', class: 'navbar-aperture'},
      {label: 'Talent', href: this.talentNav, class: 'navbar-people'},
      {label: 'RollCall', href: '#', class: 'navbar-contact-card'},
      {label: 'FeatureCasting', href: '#', class: 'navbar-projector'},
      {label: 'Music', href: '#', class: 'navbar-music'},
      {label: 'Contracts', href: '#', class: 'navbar-agreement'},
      {label: 'RAID', href: '#', class: ''},
      {label: 'FROG', href: '#', class: ''}
    ];
    this.historyItems = [
      {href: '#', historyLabel: 'DealpointDealpointDealpoint', class: 'navbar-handshake'},
      {href: '#', historyLabel: 'Focus', class: 'navbar-aperture'},
      {href: '#', historyLabel: 'RollCall', class: 'navbar-contact-card'},
      {href: '#', historyLabel: 'Dealpoint', class: 'navbar-handshake'},
      {href: '#', historyLabel: 'Focus', class: 'navbar-aperture'},
      {href: '#', historyLabel: 'RollCall', class: 'navbar-contact-card'},
      {href: '#', historyLabel: 'Dealpoint', class: 'navbar-handshake'},
      {href: '#', historyLabel: 'Focus', class: 'navbar-aperture'},
      {href: '#', historyLabel: 'RollCall', class: 'navbar-contact-card'}
    ];
  }
}
