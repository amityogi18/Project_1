import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from './modules/elements/button/button.module';
import { FooterModule } from './modules/structural/footer/footer.module';
import { FormModule } from './modules/form/form.module';
import { GridModule } from './modules/elements/grid/grid.module';
import { HeaderModule } from './modules/structural/header/header.module';
import { NameSearchModule } from './modules/name-search/name-search.module';
import { SidebarModule } from './modules/structural/sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { HowToComponent } from './c2c-main/how-to/how-to.component';
import { WelcomeComponent } from './c2c-main/welcome/welcome.component';

import { ModalEventService } from './services/events/modal/modal-event.service';
import { TypeAheadEventService } from './services/events/type-ahead/type-ahead-event.service';
import { UrlResolverService } from './services/non-http-data/url-resolver.service';
import { UnsavedChangesComponent } from './modal/unsaved-changes/unsaved-changes.component';
import { AuditComponent } from './modules/elements/audit/audit.component';
import { AuditModule } from './modules/elements/audit/audit.module';
import { UnsavedChangesModule } from './modal/unsaved-changes/unsaved-changes.module';
import { WizardModule } from '@app/modules/structural/wizard/wizard.module';

/**
 * The AppModule
 *
 * The main app module for the Common Library. We do not export anything app-level related.
 * The main purpose of AppModule is to provide a central place to work on Common Components.
 */
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HowToComponent
  ],
  imports: [
    AuditModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    NameSearchModule.forRoot(),
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    SidebarModule.forRoot(),
    GridModule.forRoot(),
    BrowserAnimationsModule,
    ButtonModule,
    UnsavedChangesModule,
    WizardModule.forRoot()
  ],
  providers: [HttpClient, TypeAheadEventService, UrlResolverService, ModalEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
