import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AutofocusDirective } from '../../directives/focus/auto-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutofocusDirective
  ],
  exports: [ AutofocusDirective ]
})
export class CommonSharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonSharedModule
    };
  }
}
