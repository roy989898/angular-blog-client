import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {TopBarModule} from './component/top-bar/top-bar.module';
import {BreedingRhombusSpinnerModule} from 'angular-epic-spinners';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, environment.production ? [] : AkitaNgDevtools.forRoot(),
        MatToolbarModule
        , AkitaNgRouterStoreModule.forRoot(), BrowserAnimationsModule, MatButtonModule, MatIconModule, MatSidenavModule, TopBarModule, BreedingRhombusSpinnerModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: NG_ENTITY_SERVICE_CONFIG, useValue: {baseUrl: 'https://jsonplaceholder.typicode.com'}}
    ],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
