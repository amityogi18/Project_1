import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

/**
 * The Back Button Component
 *
 * Common component for displaying < buttons in the UI, which is meant to run navigate to back
 * 
 */

@Component({
  selector: 'c2c-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  /**
   * Constructor for the Button
   *
   * @param router The router to handle all navigation.
   */

   /** Defines the route that the back button will navigate to. Used for setting the desired route. */
  @Input() private route: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  /**
   * This is called when the back icon is clicked. Using the router, it navigates to the desired
   * page using the 'route' variables value.
   */
  public performAction() {
    console.log(`Navigating to ${this.route}.`);
    this.router.navigate([this.route]);
  }

}
