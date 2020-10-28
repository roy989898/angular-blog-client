import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {TopBarQuery} from '../../akita/TopBarStateStore/TopBarQuery';
import {TabNameIconService} from '../../tab-name-icon.service';
import {Subscription} from 'rxjs';
import {SlideMenuService} from '../../akita/SlideMenuStore/slide-menu.service';
import {NgResizeObserver, ngResizeObserverProviders} from 'ng-resize-observer';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    // 1. Add providers
    providers: [ngResizeObserverProviders]
})
export class TopBarComponent implements OnInit, OnDestroy {
    displayMobileTopBar = true;
    breakpointObserverD?: Subscription;
    height$ = this.resize$.pipe(
        map(entry => entry.contentRect.height as number)
    );

    constructor(private  breakpointObserver: BreakpointObserver, private slideMenuService: SlideMenuService,
                private resize$: NgResizeObserver) {
        this.breakpointObserverD = this.breakpointObserver.observe([
            '(min-width: 576px)'
        ]).subscribe(result => {
            this.displayMobileTopBar = !result.matches;
        });
    }

    ngOnInit() {
    }

    menuButtonClick() {
        console.log('menuButtonClick');
        this.slideMenuService.click();

    }


    ngOnDestroy(): void {
        this.breakpointObserverD?.unsubscribe();
    }
}
