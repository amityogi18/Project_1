import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsnValidatorDirective } from '../../directives/ssn-validator/ssn-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SsnValidatorDirective],
  exports: [SsnValidatorDirective]
})
export class SsnValidatorModule { }
