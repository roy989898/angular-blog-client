import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-blog-list-item',
    templateUrl: './blog-list-item.component.html',
    styleUrls: ['./blog-list-item.component.scss']
})
export class BlogListItemComponent implements OnInit {

    constructor() {
    }

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

}
