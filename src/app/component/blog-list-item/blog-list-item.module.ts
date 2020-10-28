import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogListItemComponent} from './blog-list-item.component';
import {IonicModule} from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {TypeModule} from '../type/type.module';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
    declarations: [BlogListItemComponent],
    imports: [
        CommonModule,
        IonicModule,
        MatIconModule,
        MatCardModule,
        TypeModule,
        MatBadgeModule,
        MatRippleModule
    ],
    exports: [BlogListItemComponent]
})
export class BlogListItemModule {
}
