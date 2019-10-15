import { NgModule } from '@angular/core';
import { CampOverviewComponent } from './camp-overview/camp-overview.component';
import { CampRoutingModule } from './camp-routing.module';


@NgModule({
  declarations: [CampOverviewComponent,],
  imports: [
    CampRoutingModule, 
  ],
  entryComponents: [ ]
})
export class CampModule { }
