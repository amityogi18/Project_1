import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WizardComponent } from './wizard.component';
import { AuditModule } from '../../elements/audit/audit.module';

/**
 * The WizardModule
 *
 * Module that contains the components for the Wizard - a UI flow used for creating Deals, Contracts, etc.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuditModule
  ],
  declarations: [WizardComponent],
  exports: [WizardComponent]
})
export class WizardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WizardModule,
      providers: []
    };
  }
}
