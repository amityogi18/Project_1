import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TypeAheadComponent } from './type-ahead.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [TypeAheadComponent],
  exports: [TypeAheadComponent]
})
export class TypeAheadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TypeAheadModule
    };
  }
}
