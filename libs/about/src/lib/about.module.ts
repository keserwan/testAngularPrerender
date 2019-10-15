import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  imports: [
    AboutRoutingModule
  ],
  declarations: [
    AboutUsComponent,
  ]
})
export class AboutModule { }
