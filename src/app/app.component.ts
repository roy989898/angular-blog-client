import {Component, OnDestroy, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    displayMobileTopBar = false;
    breakpointObserverD?: Subscription;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private  breakpointObserver: BreakpointObserver
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();


            this.breakpointObserverD = this.breakpointObserver.observe([
                '(min-width: 576px)'
            ]).subscribe(result => {
                this.displayMobileTopBar = !result.matches;
            });
        });
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.breakpointObserverD?.unsubscribe();
    }
}
