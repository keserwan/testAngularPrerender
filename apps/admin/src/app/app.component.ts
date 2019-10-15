import { Component, ViewContainerRef, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.Emulated, changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {

    constructor(
        

    ) {
    }

    ngOnInit() {

    }
}
