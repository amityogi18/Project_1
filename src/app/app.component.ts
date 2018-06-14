import { Component, DoCheck, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * The AppComponent
 *
 * Used as a place to work on common components in the Common Library.
 * Acts as a sandbox for creating, editing, and demoing common components.
 */
@Component({
  selector: 'c2c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements DoCheck {
  public currentRoute: string;

  /**
   * Constructor for the AppComponent
   *
   * @param router The instance of the Angular Router.
   */
  constructor(private router: Router) { }

  /**
   * Angular lifecycle hook that does a check everytime something changes.
   * In this instance, checks the current route in order to set ngClass for nav bar
   */
  ngDoCheck(): void {
    this.currentRoute = this.router.url;
  }
}
