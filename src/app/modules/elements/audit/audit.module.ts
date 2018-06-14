import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditComponent } from './audit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuditComponent],
  exports: [AuditComponent]
})
export class AuditModule { }
