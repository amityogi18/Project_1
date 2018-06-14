import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * The Welcome Component
 *
 * This is just a component for displaying links to each Common Component.
 * The links help provide a sandbox for creating/editing/and demoing components.
 */
@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public content: string = 'Test content';

  /** Components list for creating links to each component */
  public structuralComponents: Object[] = [
    {title: 'Header', link: 'header'},
    {title: 'Sidebar', link: 'sidebar'},
    {title: 'Wizard', link: 'wizard'}
  ];

  public elementComponents: Object[] = [
    {title: 'Audit', link: 'audit'},
    {title: 'Buttons', link: 'buttons'},
    {title: 'Grid', link: 'grid'},
    {title: 'Type Ahead', link: 'typeAhead'}
  ];

  public formComponents: Object[] = [
    {title: 'Checkbox', link: 'checkbox'},
    {title: 'Datepicker', link: 'datepicker'},
    {title: 'Datepicker (Reactive)', link: 'datepicker-reactive'},
    {title: 'Dropdown', link: 'dropdown'},
    {title: 'Dropdown (Reactive)', link: 'dropdown-reactive'},
    {title: 'Input', link: 'input'},
    {title: 'Label', link: 'label'},
    // {title: 'List', link: 'formList'},
    {title: 'Note', link: 'note'},
    {title: 'Radio', link: 'radioButton'}
  ];
  /**
   * Constructor for the WelcomeComponent.
   */
  constructor(private modalService: NgbModal) { }

  public openModal(content) {
    console.log('Modal clicked!');
    this.modalService.open(content);
  }

}
