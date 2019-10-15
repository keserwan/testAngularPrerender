import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampOverviewComponent } from './camp-overview/camp-overview.component';

const routes: Routes = [
  { path: 'overview', component: CampOverviewComponent, data: [{ animation: true }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampRoutingModule { }
