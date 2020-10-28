import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';
import {TopBarComponent} from '../../component/top-bar/top-bar.component';
import {Subscription} from 'rxjs';
import {HasTopBarPage} from '../HasTopbarPage';
import {Blog} from '../home/home.page';

interface Category {
    name: string;
    selected: boolean;

}


@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage extends HasTopBarPage implements OnInit {
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
    categories: Category[] = [
        {
            name: 'c1',
            selected: true
        },
        {
            name: 'c2',
            selected: false
        },
        {
            name: 'c3',
            selected: false
        },
    ];


    constructor(private topBarStoreService: TopBarStoreService) {
        super();
    }

    ngOnInit(): void {
        // this.topBarStoreService.updateTopState(false, true, false, false, false);

    }

    ionViewWillEnter() {
        this.topBarStoreService.updateTopState(false, true, false, false, false);

    }

    categoryClick(category: Category) {
        //    TODO
        this.categories.forEach((c) => {
            c.selected = c.name === category.name;
        });
        console.log(category);

    }
}
