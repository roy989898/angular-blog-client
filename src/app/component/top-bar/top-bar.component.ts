import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {TopBarQuery} from '../../akita/TopBarStateStore/TopBarQuery';
import {TabNameIconService} from '../../tab-name-icon.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
    displayMobileTopBar = true;
    breakpointObserverD?: Subscription;

    constructor(private  breakpointObserver: BreakpointObserver) {
        this.breakpointObserverD = this.breakpointObserver.observe([
            '(min-width: 576px)'
        ]).subscribe(result => {
            this.displayMobileTopBar = !result.matches;
        });
    }

    ngOnInit() {
    }

    menuButtonClick() {

    }


    ngOnDestroy(): void {
        this.breakpointObserverD?.unsubscribe();
    }
}
