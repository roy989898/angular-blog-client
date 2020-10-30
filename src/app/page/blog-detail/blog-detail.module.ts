import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogDetailPageRoutingModule } from './blog-detail-routing.module';

import { BlogDetailPage } from './blog-detail.page';
import {TopBarModule} from '../../component/top-bar/top-bar.module';
import {MarkedModule} from '../../pipe/marked/marked.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BlogDetailPageRoutingModule,
        TopBarModule,
        MarkedModule
    ],
    declarations: [BlogDetailPage]
})
export class BlogDetailPageModule {}
