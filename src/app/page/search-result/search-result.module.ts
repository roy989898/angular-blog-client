import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultPageRoutingModule } from './search-result-routing.module';

import { SearchResultPage } from './search-result.page';
import {TopBarModule} from '../../component/top-bar/top-bar.module';
import {MatCardModule} from '@angular/material/card';
import {BlogListItemModule} from '../../component/blog-list-item/blog-list-item.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchResultPageRoutingModule,
        TopBarModule,
        MatCardModule,
        BlogListItemModule
    ],
  declarations: [SearchResultPage]
})
export class SearchResultPageModule {}
