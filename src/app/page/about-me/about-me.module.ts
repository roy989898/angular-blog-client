import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutMePageRoutingModule } from './about-me-routing.module';

import { AboutMePage } from './about-me.page';
import {TopBarModule} from '../../component/top-bar/top-bar.module';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutMePageRoutingModule,
        TopBarModule,
        MatCardModule,
        MatChipsModule
    ],
  declarations: [AboutMePage]
})
export class AboutMePageModule {}
