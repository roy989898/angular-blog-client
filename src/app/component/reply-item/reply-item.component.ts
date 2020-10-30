import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MyComment} from '../../page/blog-detail/blog-detail.page';

@Component({
    selector: 'app-reply-item',
    templateUrl: './reply-item.component.html',
    styleUrls: ['./reply-item.component.scss'],
})
export class ReplyItemComponent implements OnInit {
    @Input()
    icon: string;
    @Input()
    author: string;
    @Input()
    date: Date;
    @Input()
    content: string;
    @Output() replyClickEvent = new EventEmitter<string>();
    @Input()
    childComments: MyComment[];


    constructor() {
    }

    ngOnInit() {
    }

    replyClick() {
        this.replyClickEvent.emit(this.author);
    }

    childreplyClick($event: string) {
        this.replyClickEvent.emit($event);

    }
}
