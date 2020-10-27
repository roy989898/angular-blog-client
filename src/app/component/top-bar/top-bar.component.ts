import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {TopBarQuery} from '../../akita/TopBarStateStore/TopBarQuery';
import {TabNameIconService} from '../../tab-name-icon.service';
import {Subscription} from 'rxjs';
import {SlideMenuService} from '../../akita/SlideMenuStore/slide-menu.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
    displayMobileTopBar = true;
    breakpointObserverD?: Subscription;

    constructor(private  breakpointObserver: BreakpointObserver, private slideMenuService: SlideMenuService) {
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
