import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [
    // Add universal-only providers here
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: UniversalInterceptor,
    //   /* Multi is important or you will delete all the other interceptors */
    //   multi: true
    // }
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
