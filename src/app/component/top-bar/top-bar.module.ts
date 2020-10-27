import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBarComponent} from './top-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {AdminTopBarComponent} from '../admin-top-bar/admin-top-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {IconNameComponent} from '../ionn-name/icon-name.component';


@NgModule({
    declarations: [TopBarComponent, AdminTopBarComponent, IconNameComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [TopBarComponent, IconNameComponent]
})
export class TopBarModule {
}



