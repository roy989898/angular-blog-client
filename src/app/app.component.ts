import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';
import {TopBarQuery} from './akita/TopBarStateStore/TopBarQuery';
import {TabNameIconService} from './tab-name-icon.service';
import {MatDrawer} from '@angular/material/sidenav';
import {SlideMenuQuery} from './akita/SlideMenuStore/SlideMenuQuery';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('drawer') drawer: MatDrawer;
    displayMobileTopBar = false;
    slideMenuQueryD?: Subscription;
    tab1Icon = this.tabNameIconService.tab1Icon;
    tab1Text = this.tabNameIconService.tab1Text;


    tab2Icon = this.tabNameIconService.tab2Icon;
    tab2Text = this.tabNameIconService.tab2Text;


    tab3Icon = this.tabNameIconService.tab3Icon;
    tab3Text = this.tabNameIconService.tab3Text;


    tab4Icon = this.tabNameIconService.tab4Icon;
    tab4Text = this.tabNameIconService.tab4Text;


    tab5Icon = this.tabNameIconService.tab5Icon;
    tab5Text = this.tabNameIconService.tab5Text;


    tab1Active$ = this.topBarQuery.indexBtOn$;
    tab2Active$ = this.topBarQuery.categoryBtOn$;
    tab3Active$ = this.topBarQuery.tagBtOn$;
    tab4Active$ = this.topBarQuery.timeLineBtOn$;
    tab5Active$ = this.topBarQuery.aboutMeBtOn$;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private topBarQuery: TopBarQuery, public tabNameIconService: TabNameIconService,
        private slideMenuQuery: SlideMenuQuery
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();


        });
    }

    ngOnInit(): void {


    }


    tab1Click() {
        this.tabNameIconService.tab1Click();
        this.drawer.close();
    }

    tab2Click() {
        this.tabNameIconService.tab2Click();
        this.drawer.close();
    }

    tab3Click() {
        this.tabNameIconService.tab3Click();
        this.drawer.close();
    }

    tab4Click() {
        this.tabNameIconService.tab4Click();
        this.drawer.close();
    }

    tab5Click() {
        this.tabNameIconService.tab5Click();
        this.drawer.close();
    }

    ngOnDestroy(): void {

        this.slideMenuQueryD.unsubscribe();
    }

    ngAfterViewInit(): void {
        this.slideMenuQueryD = this.slideMenuQuery.isOpen$.subscribe((isOpen) => {
            console.log('slideMenuQueryD');
            if (isOpen) {

                this.drawer.open();
            } else {
                this.drawer.close();
            }

        });
    }
}
