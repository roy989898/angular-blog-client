import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';
import {TopBarComponent} from '../../component/top-bar/top-bar.component';
import {Subscription} from 'rxjs';
import {HasTopBarPage} from '../HasTopbarPage';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage extends HasTopBarPage implements OnInit {


    constructor(private topBarStoreService: TopBarStoreService) {
        super();
    }

    ngOnInit(): void {
        // this.topBarStoreService.updateTopState(false, true, false, false, false);

    }

    ionViewWillEnter() {
        this.topBarStoreService.updateTopState(false, true, false, false, false);

    }
}
