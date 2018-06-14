import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

/**
 * The Edit Button Component
 *
 * Common component for displaying edit in the UI, which is meant to route to a set page to edit.
 *
 */
@Component({
  selector: 'c2c-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent {

  /** Defines the route that the edit button will navigate to. Used for setting the desired route. */
  @Input() private route: string;


  /** Defines the tooltip text to display when the edit icon is hovered. */
  @Input() public tooltip: string;

   /**
   * Constructor for the Add Button
   *
   * @param router The router to handle all navigation.
   */
  constructor(
    private router: Router
  ) { }

  /**
   * This is called when the edit icon is clicked. Using the router, it navigates to the desired
   * page using the 'route' variables value.
   */
  public edit() {
    console.log(`Navigating to ${this.route}.`);
    this.router.navigate([this.route]);
  }

}
