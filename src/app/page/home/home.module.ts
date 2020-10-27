import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {TopBarModule} from '../../component/top-bar/top-bar.module';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {TypeModule} from '../../component/type/type.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        TopBarModule,
        MatCardModule,
        MatIconModule,
        MatBadgeModule,
        TypeModule
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
