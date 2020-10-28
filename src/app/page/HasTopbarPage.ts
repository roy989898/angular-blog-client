import {AfterViewInit, OnDestroy, ViewChild} from '@angular/core';
import {TopBarComponent} from '../component/top-bar/top-bar.component';
import {Subscription} from 'rxjs';

export class HasTopBarPage implements AfterViewInit, OnDestroy {
    @ViewChild(TopBarComponent, {static: false}) topBar: TopBarComponent;

    topBarHeight = 0;
    protected topBarD?: Subscription;


    ngAfterViewInit(): void {
        this.topBarD = this.topBar.height$.subscribe((h) => {
            this.topBarHeight = h;
        });
    }

    ngOnDestroy(): void {
        /* console.warn('ngOnDestroy');
         this.topBarD?.unsubscribe();*/
    }

    ionViewWillLeave() {
        // console.warn('ionViewWillLeave');
        this.topBarD?.unsubscribe();
    }
}
