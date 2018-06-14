import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefreshButtonComponent } from './refresh-button/refresh-button.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { CancelButtonComponent } from './cancel-button/cancel-button.component';
import { SaveButtonComponent } from './save-button/save-button.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { PdfButtonComponent } from './pdf-button/pdf-button.component';
import { ButtonComponent } from './button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { MinusButtonComponent } from './minus-button/minus-button.component';
import { ContinueButtonComponent } from './continue-button/continue-button.component';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RefreshButtonComponent,
    AddButtonComponent,
    CancelButtonComponent,
    SaveButtonComponent,
    ResetButtonComponent,
    PdfButtonComponent,
    ButtonComponent,
    EditButtonComponent,
    MinusButtonComponent,
    ContinueButtonComponent,
    BackButtonComponent
  ],
  exports: [
    RefreshButtonComponent,
    AddButtonComponent,
    CancelButtonComponent,
    SaveButtonComponent,
    ResetButtonComponent,
    PdfButtonComponent,
    EditButtonComponent,
    MinusButtonComponent,
    ContinueButtonComponent,
    BackButtonComponent
  ]
})
export class ButtonModule {}
