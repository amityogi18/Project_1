import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../elements/button/button.module';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TypeAheadNameListingComponent } from './type-ahead-name-listing.component';
import { FormModule } from '../../../modules/form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    ButtonModule,
    FormModule
  ],
  declarations: [TypeAheadNameListingComponent],
  exports: [TypeAheadNameListingComponent]
})
export class TypeAheadNameListingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TypeAheadNameListingModule

    };
  }
}
