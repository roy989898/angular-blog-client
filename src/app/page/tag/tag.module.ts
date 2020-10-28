import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagPageRoutingModule } from './tag-routing.module';

import { TagPage } from './tag.page';
import {TopBarModule} from '../../component/top-bar/top-bar.module';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {BlogListItemModule} from '../../component/blog-list-item/blog-list-item.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TagPageRoutingModule,
        TopBarModule,
        MatCardModule,
        MatChipsModule,
        BlogListItemModule
    ],
  declarations: [TagPage]
})
export class TagPageModule {}
