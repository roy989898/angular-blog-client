import {Component, OnInit} from '@angular/core';
import {HasTopBarPage} from '../HasTopbarPage';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';
import {Blog} from '../home/home.page';


interface Tag {
    name: string;
    selected: boolean;

}

@Component({
    selector: 'app-tag',
    templateUrl: './tag.page.html',
    styleUrls: ['./tag.page.scss'],
})
export class TagPage extends HasTopBarPage implements OnInit {
    tags: Tag[] = [
        {
            name: 't1',
            selected: true
        },
        {
            name: 't2',
            selected: false
        },
        {
            name: 't3',
            selected: false
        },
    ];
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

    constructor(private topBarStoreService: TopBarStoreService) {
        super();
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.topBarStoreService.updateTopState(false, false, true, false, false);
        // console.warn('HomePage ionViewWillEnter');
    }

    tagClick(tag: Tag) {
        //    todo

    }
}
