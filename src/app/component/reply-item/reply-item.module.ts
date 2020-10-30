import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReplyItemComponent} from './reply-item.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    declarations: [ReplyItemComponent],
    exports: [
        ReplyItemComponent
    ],
    imports: [
        CommonModule,
        MatCardModule
    ]
})
export class ReplyItemModule {
}
