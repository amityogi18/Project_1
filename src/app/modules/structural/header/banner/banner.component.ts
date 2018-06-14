import { Component, Input, ViewChild } from '@angular/core';
import { GenericModalComponent } from '../../../elements/generic-modal/generic-modal.component';
/**
 * The BannerComponent
 *
 * Part of the Header Common Component for displaying the login info, and global search bar.
 * TODO: Implement the Typeahead Common Component for the search bar.
 */
@Component({
  selector: 'c2c-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent {
  private _customModal: GenericModalComponent;

  @Input()
  set customModal(val: GenericModalComponent) { this._customModal = val; }
  get customModal(): GenericModalComponent { return this._customModal; }


  @ViewChild('logoutModal') public logoutModal: GenericModalComponent;

  /**
   * Constructor for the BannerComponent
   */
  constructor() { }

  public openModal(evt) {
    evt.preventDefault();
    this.logoutModal.open();
  }

  public processLogout() {
    console.log('logout Processed');
    this.logoutModal.close();
  }
}
