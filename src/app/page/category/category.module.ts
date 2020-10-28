import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import {TopBarModule} from '../../component/top-bar/top-bar.module';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {BlogListItemModule} from '../../component/blog-list-item/blog-list-item.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CategoryPageRoutingModule,
        TopBarModule,
        MatCardModule,
        MatChipsModule,
        BlogListItemModule
    ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
