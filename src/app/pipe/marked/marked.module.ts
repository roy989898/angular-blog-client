import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkedPipe} from './marked.pipe';



@NgModule({
  declarations: [MarkedPipe],
  exports: [
    MarkedPipe
  ],
  imports: [
    CommonModule
  ]
})
export class MarkedModule { }
