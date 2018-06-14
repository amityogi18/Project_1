import { Directive, HostListener, EventEmitter, Output } from '@angular/core';
import { CharKeyCodes } from '../../enums/characters/character-keycodes.enum';

 
@Directive({
    selector: '[ctrlSHotkey]'
})
export class ControlSHotkeyDirective {
 
@Output() public ctrlSPressed : EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    @HostListener('keydown', ['$event'])
    public keyEvent(evt: KeyboardEvent) : void {
      if(evt.ctrlKey && evt.keyCode === CharKeyCodes.KEY_S) {
        evt.preventDefault();
        this.ctrlSPressed.emit(true);
      } 
    }
}