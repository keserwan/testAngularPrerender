import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 

  { path: '', redirectTo: '/home', pathMatch: 'full' },
 

  {
    path: '',
    loadChildren: './_wrapper-modules/home-wrapper.module#HomeWrapperModule'
  },
  {
    path: 'home',
    loadChildren: './_wrapper-modules/home-wrapper.module#HomeWrapperModule'
  },
   
  {
    path: 'game',
    loadChildren: './_wrapper-modules/game-wrapper.module#GameWrapperModule'
  },
   {
    path: 'about',
    loadChildren: './_wrapper-modules/about-wrapper.module#AboutWrapperModule'
  },
  {
    path: 'camps',
    loadChildren: './_wrapper-modules/camp-wrapper.module#CampWrapperModule'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
