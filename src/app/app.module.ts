import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslocoModule} from '@ngneat/transloco';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {I18nTranslocoModule} from './i18n/i18n.transloco.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    I18nTranslocoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
