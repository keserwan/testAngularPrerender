
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    HomeRoutingModule, 
  ],
  declarations: [
    HomeComponent,
   ],
  exports: [ 
  ],
  entryComponents: []
})
export class HomeModule { }
