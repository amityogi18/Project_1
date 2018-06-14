import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent
  ],
  exports : [
    FooterComponent //ensures that an application that imports the footerModule will be able
    //to use the footerComponent

    //https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e
  ]
})
export class FooterModule { 
  static forRoot():ModuleWithProviders{
    return {
      ngModule:FooterModule
    }
  }
}

