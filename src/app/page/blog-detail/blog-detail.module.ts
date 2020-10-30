import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogDetailPageRoutingModule } from './blog-detail-routing.module';

import { BlogDetailPage } from './blog-detail.page';
import {TopBarModule} from '../../component/top-bar/top-bar.module';
import {MarkedModule} from '../../pipe/marked/marked.module';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {TypeModule} from '../../component/type/type.module';
import {MatChipsModule} from '@angular/material/chips';
import {ReplyItemModule} from '../../component/reply-item/reply-item.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BlogDetailPageRoutingModule,
        TopBarModule,
        MarkedModule,
        MatCardModule,
        MatIconModule,
        MatBadgeModule,
        TypeModule,
        MatChipsModule,
        ReplyItemModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule
    ],
    declarations: [BlogDetailPage]
})
export class BlogDetailPageModule {}
