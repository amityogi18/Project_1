import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

/**
 * The Continue Button Component
 *
 * Common component for displaying > buttons in the UI, which is meant to run navigate to next
 * 
 */

@Component({
  selector: 'c2c-continue-button',
  templateUrl: './continue-button.component.html',
  styleUrls: ['./continue-button.component.scss']
})
export class ContinueButtonComponent implements OnInit {

  /**
   * Constructor for the Button
   *
   * @param router The router to handle all navigation.
   */

   /** Defines the route that the continue button will navigate to. Used for setting the desired route. */
  @Input() private route: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  /**
   * This is called when the continue icon is clicked. Using the router, it navigates to the desired
   * page using the 'route' variables value.
   */
  public performAction() {
    console.log(`Navigating to ${this.route}.`);
    this.router.navigate([this.route]);
  }

}
