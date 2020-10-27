import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeComponent} from './type.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [TypeComponent],
    imports: [
        CommonModule, MatButtonModule
    ],
    exports: [TypeComponent]
})
export class TypeModule {
}
