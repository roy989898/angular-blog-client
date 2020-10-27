import {Component} from '@angular/core';


interface Blog {
    title: string;
    author: string;
    brief: string;
    name: string;
    date: Date;
    view: number;
    type: string;
}


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {

    blogs: Blog[] = [
        {
            title: 't1',
            author: 'author',
            brief: 'brief',
            name: 'name',
            date: new Date(),
            view: 12,
            type: 'type1',


        },
        {
            title: 't2',
            author: 'author2',
            brief: 'brief2',
            name: 'name2',
            date: new Date(),
            view: 9,
            type: 'type2',


        },
        {
            title: 't2',
            author: 'author2',
            brief: 'brief2',
            name: 'name2',
            date: new Date(),
            view: 9,
            type: 'type2',


        },
        {
            title: 't2',
            author: 'author2',
            brief: 'brief2',
            name: 'name2',
            date: new Date(),
            view: 9,
            type: 'type2',


        },
        {
            title: 't2',
            author: 'author2',
            brief: 'brief2',
            name: 'name2',
            date: new Date(),
            view: 9,
            type: 'type2',


        },
        {
            title: 't2',
            author: 'author2',
            brief: 'brief2',
            name: 'name2',
            date: new Date(),
            view: 9,
            type: 'type2',


        },
        {
            title: 't2',
            author: 'author2',
            brief: 'brief2',
            name: 'name2',
            date: new Date(),
            view: 9,
            type: 'type2',


        },

    ];

    constructor() {
    }

}
