import {Directive, HostListener, ElementRef} from '@angular/core';
import { SpecialStrings } from '../../enums/characters/special-strings.enum';

@Directive({
    selector:"[ssnValidator]"
  })

export class SsnValidatorDirective {

    @HostListener("keyup", ["$event"])
    public onKeydown(evt:KeyboardEvent) : void {

        let el : ElementRef = new ElementRef(evt.target);
            el.nativeElement = evt.target
            el.nativeElement.value = this.format(el.nativeElement.value);
    }

    constructor() {}

    private format(value:string) : string {

        if(value) {
            let val = value.replace(/\D/g, '');
            let newVal = '';
            let sizes = [3, 2, 4];

            for (var i in sizes) {
                if (val.length > sizes[i]) {
                    newVal += val.substr(0, sizes[i]) + '-';
                    val = val.substr(sizes[i]);
                } else
                    break;
            }

            return newVal += val;
        } else {
            return SpecialStrings.EMPTY;
        }
    }
}
