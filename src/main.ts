import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';

import { AppState } from './app/_store/app-state.state';
import { AppComponent } from './app/app.component';

registerLocaleData(localeEsMx, 'es-Mx');

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,

      //NGXS store module
      NgxsModule.forRoot([AppState], {})
    ),
  ],
}).catch((err) => console.error(err));
