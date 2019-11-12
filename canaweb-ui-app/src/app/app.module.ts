import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionPageComponent } from './version-page/version-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FieldsModule } from './fields/fields.module';

@NgModule({
  declarations: [
    AppComponent,
    VersionPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FieldsModule,
    AppRoutingModule // needs to be last as otherwise path matching would hit **
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
