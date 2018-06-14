import { Component, Input, ViewChild, ElementRef, HostListener, AfterViewInit, Renderer2, AfterViewChecked } from '@angular/core';
import { Defaults } from '../../../c2c-main/common-library-defaults.const';
import { AuditModel } from '../../../models/audit/audit.model';

/**
 * The WizardComponent
 *
 * Common Component for handling Wizard flow for creating new data (i.e. deals, deal memos).
 */
@Component({
  selector: 'c2c-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements AfterViewChecked {

  /** Defines the index of the current page being displayed. */
  public pageIndex: number = 1;

  /** Defines the current scroll position based on arrow clicks. */
  public scroll: number = 0;

  /** Defines the scroll width of the container holding the wizard tiles. */
  public scrollWidth: number = 0;
  public subTitle: string;

  /** Defines the audit data */
  @Input() public audit: AuditModel = Defaults.DEFAULT_WIZARD_AUDIT;

  /** Defines each section that the Wizard will be made up of. */
  @Input() public sections: any[] = Defaults.DEFAULT_WIZARD_SECTIONS;

  /** The properties to display under the Wizard. These will be joined into one string separated by pipes. */
  @Input() public subTitles: Array<string> = Defaults.DEFAULT_WIZARD_SUBTITLE;

  /** Defines the value for the page title. Used for configuring the page title to be displayed. */
  @Input() public title: string = Defaults.DEFAULT_WIZARD_TITLE;

  /** The wizard list element reference. Used to be able to scroll through the element on slide clicks. */
  @ViewChild('wizardList', { read: ElementRef }) public wizardList: ElementRef;

  /**
   * Listens to the window resize event and rechecks if scrolling is necessary for wizard tiles.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.wizardList.nativeElement.scrollWidth === this.wizardList.nativeElement.clientWidth) {
      this.scrollWidth = 0;
      this.scroll = 0;
    } else {
      this.scrollWidth = this.wizardList.nativeElement.scrollWidth - this.wizardList.nativeElement.clientWidth;
    }
  }

  /**
   * The constructor for WizardComponent
   */
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.subTitle = this.subTitles.filter(Boolean).join(' | ');
  }

  /**
   * After view init we get the client width and scroll width of the list of wizard tiles.
   * This allows us to determine when to show/hide the right/left arrows.
   */
  ngAfterViewChecked() {
    // The width of the container that has the child element of the wizard section.
    const element: HTMLElement = this.renderer.parentNode(this.elRef.nativeElement);
    let clientWidth = element.offsetWidth;

    if (clientWidth === 0) {
      clientWidth = this.wizardList.nativeElement.clientWidth;
    }

    /**
     * Calculated width of the wizard section based on the width of each tile (175 for middle tiles)
     * times the number of sections in the wizard. We need to subtract 26 due to the first and last tile
     * being 162 px wide (13px offset per).
     */
    const scrollWidth = (175 * this.sections.length) - 26;

    if (scrollWidth === clientWidth) {
      this.scrollWidth = 0;
      this.scroll = 0;
    } else {
      this.scrollWidth = scrollWidth - clientWidth;
    }
  }

  /**
   * Gets the flag class in order to display the status of each Wizard section, and adds the class to the span.
   *
   * @param status The status of the Wizard Section to compare.
   */
  public getStatusClass(status): string {
    switch (status) {
      case 'COMPLETE':
        return 'c2c-flag-complete';
      case 'INCOMPLETE':
        return 'c2c-flag-incomplete';
      case 'NOT_APPLICABLE':
        return 'c2c-flag-not-applicable';
      default:
        return '';
    }
  }

  /**
   * Scrolls the wizard list tiles all the way to the left position.
   */
  public slideLeft(position) {
    this.scroll -= (position)? position: 325;
    if (this.scroll < 0) {
      this.scroll = 0;
    }
    this.wizardList.nativeElement.scrollLeft -= (position)? position:325;
  }

  /**
   * Scrolls the wizard list tiles all the way to the right position.
   */
  public slideRight(position) {
    this.scroll += (position)? position: 325;
    if (this.scroll > this.scrollWidth) {
      this.scroll = this.scrollWidth;
    }
    this.wizardList.nativeElement.scrollLeft += (position)? position:325;
  }

  /**
   * Scroll the tab into view
   */
  public scrollTabintoView(idx) {
    if (this.wizardList.nativeElement.scrollWidth === this.wizardList.nativeElement.clientWidth) {
      this.scrollWidth = 0;
      this.scroll = 0;
    }else{
      if(this.wizardList.nativeElement.clientWidth <= idx*175){
        this.slideRight(175);
      }else this.slideLeft(175);
    }

  }
}
