import { Directive, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { CharKeyCodes } from '../../enums/characters/character-keycodes.enum';


@Directive({
    selector: '[c2cEnterKeyClick]'
})
export class EnterKeyClickDirective {

  @Input() preventSpacebar: boolean;
  @Output() public enterKeyPressed: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

    @HostListener('keyup', ['$event'])
    public keyEvent(evt: KeyboardEvent): void {
      if (evt.keyCode === CharKeyCodes.ENTER) {
        this.enterKeyPressed.emit(evt);
      } else {
        if (this.preventSpacebar) {
          if (evt.keyCode === CharKeyCodes.SPACE) {
            evt.stopPropagation();
            evt.preventDefault();
         }
        }
      }
    }
}
