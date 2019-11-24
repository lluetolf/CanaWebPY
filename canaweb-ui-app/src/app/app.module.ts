import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionPageComponent } from './version-page/version-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FieldsModule } from './fields/fields.module';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    VersionPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FieldsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
