import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

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


    constructor() {
    }

    ngOnInit() {
    }

    replyClick() {
        this.replyClickEvent.emit(this.author);
    }
}
