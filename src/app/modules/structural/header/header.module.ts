import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericModalModule } from '../../elements/generic-modal/generic-modal.module';
import { HeaderComponent } from './header.component';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TypeAheadModule } from '../../.././modules/elements/type-ahead/type-ahead.module';
import { FormModule } from '../../form/form.module';

/**
 * The HeaderModule
 *
 * Module that contains the Header for C2C.
 */
@NgModule({
  imports: [
    CommonModule,
    TypeAheadModule,
    FormModule,
    GenericModalModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    BannerComponent,
    NavBarComponent
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    NavBarComponent
  ]
})
export class HeaderModule {

}
