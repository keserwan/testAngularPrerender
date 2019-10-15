import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import localeAr from '@angular/common/locales/ar';
import localeEn from '@angular/common/locales/en';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
 
 
 

registerLocaleData(localeEn, 'en-US');
registerLocaleData(localeAr, 'ar-LBN');
export function getLocale() {

  return "fr-FR";
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'zyx-xyz-website' }),

    HttpClientModule, 
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    TransferHttpCacheModule,
    BrowserTransferStateModule,
    HttpClientXsrfModule,
  ],
  declarations: [
    AppComponent,
  ],
 
  bootstrap: [AppComponent],
  exports: [
  ],
  entryComponents: [
  ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) { 

  }
}
