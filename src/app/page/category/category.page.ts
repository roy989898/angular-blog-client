import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';
import {TopBarComponent} from '../../component/top-bar/top-bar.component';
import {Subscription} from 'rxjs';
import {HasTopBarPage} from '../HasTopbarPage';

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
