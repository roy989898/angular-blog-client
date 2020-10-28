import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {TopBarComponent} from '../../component/top-bar/top-bar.component';
import {NgResizeObserver, ngResizeObserverProviders} from 'ng-resize-observer';
import {Subscription} from 'rxjs';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';


interface Blog {
    title: string;
    author: string;
    brief: string;
    name: string;
    date: Date;
    view: number;
    type: string;
}


interface Category {
    name: string;
    number: number;
}

interface Tag {
    name: string;

}


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],

})

export class HomePage implements AfterViewInit, OnDestroy {
    @ViewChild(TopBarComponent, {static: false}) topBar: TopBarComponent;
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
            number: 0
        },
        {
            name: 'c2',
            number: 2
        },
        {
            name: 'c3',
            number: 2
        },
        {
            name: 'c4',
            number: 6
        }
    ];

    tags: Tag[] = [
        {name: 'tag1'},
        {name: 'tag1'},
        {name: 'tag1'},
        {name: 'tag1'},
        {name: 'tag1'}
    ];

    topBarHeight = 0;
    private topBarD?: Subscription;

    constructor(private topBarStoreService: TopBarStoreService) {

        topBarStoreService.updateTopState(true, false, false, false, false);

    }

    onToBarResized($event: UIEvent) {
        console.log('onToBarResized');
        console.log($event);

    }

    ngAfterViewInit(): void {

// Create observer
        this.topBarD = this.topBar.height$.subscribe((h) => {
            this.topBarHeight = h;
        });
    }

    ngOnDestroy(): void {
        this.topBarD?.unsubscribe();
    }
}
