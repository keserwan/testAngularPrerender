import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [routeAnimations],
  // animations: [
  //   slideInAnimation
  // ]
  changeDetection: ChangeDetectionStrategy.Default

})

export class AppComponent implements OnInit, OnDestroy {

   
  constructor( 
  ) {
    // console.log("local system", this.locale);
    // this.animationsService.updateRouteAnimationType(
    //   true,
    //   true
    // );
  }

  ngOnDestroy() {
 
  }
  ngOnInit() {
    
  }

 

 
}
