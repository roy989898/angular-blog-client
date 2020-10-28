import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Blog} from '../../page/home/home.page';

@Component({
    selector: 'app-blog-list-item',
    templateUrl: './blog-list-item.component.html',
    styleUrls: ['./blog-list-item.component.scss']
})
export class BlogListItemComponent implements OnInit {

    constructor() {
    }

    @Output() blogCLick = new EventEmitter<string>();

    @Input()
    title = '';
    @Input()
    brief = '';
    @Input()
    author = '';
    @Input()
    date: Date = undefined;
    @Input()
    view = 0;
    @Input()
    tag = '';

    ngOnInit(): void {
    }

    wholeClick() {
        this.blogCLick.emit(this.title);

    }
}
