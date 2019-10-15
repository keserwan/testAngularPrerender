import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard', component: Dashboard1Component 
  } ,
  { path: '**', redirectTo: 'dashboard' },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
