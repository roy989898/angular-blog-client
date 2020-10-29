import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultPageRoutingModule } from './search-result-routing.module';

import { SearchResultPage } from './search-result.page';
import {TopBarModule} from '../../component/top-bar/top-bar.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchResultPageRoutingModule,
        TopBarModule
    ],
  declarations: [SearchResultPage]
})
export class SearchResultPageModule {}
