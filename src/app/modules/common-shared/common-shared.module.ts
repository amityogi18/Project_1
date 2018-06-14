import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AutofocusDirective } from '../../directives/focus/auto-focus.directive';
import { SsnValidatorDirective } from '../../directives/ssn-validator/ssn-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutofocusDirective,
    SsnValidatorDirective
  ],
  exports: [ AutofocusDirective,
             SsnValidatorDirective ]
})
export class CommonSharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonSharedModule
    };
  }
}
