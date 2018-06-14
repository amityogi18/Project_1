import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[c2cAutoFocus]'
})
export class AutofocusDirective implements AfterViewInit {

    @Input() public focusOnFirst: boolean;
    @Input() public focusOnSingleItem: boolean;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
      if (this.focusOnFirst) {
        this.el.nativeElement.focus(); // set focus to first item in a group, otherwise focus would be on the last item
        return;
      } else if (this.focusOnSingleItem) {
        this.el.nativeElement.focus(); // only one item, so set focus to it
        return;
      } else {
        this.el.nativeElement.focus();
        return;
      }
  }

}
