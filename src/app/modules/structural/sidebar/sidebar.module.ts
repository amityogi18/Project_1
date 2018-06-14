import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from '../../../services/http/sidebar/sidebar.service';
import { HttpClient } from '@angular/common/http';

/**
 * The SidebarModule
 *
 * Module that contains the Sidebar (left-hand navigation) for C2C.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [SidebarComponent]
})
export class SidebarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SidebarModule,
      providers: [SidebarService, HttpClient]
    };
  }
}
