import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { BrowserModule } from '@angular/platform-browser';







@NgModule({
    declarations: [
        AppComponent, Dashboard1Component
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [ 

        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
