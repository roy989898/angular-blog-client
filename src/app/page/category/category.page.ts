import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';
import {TopBarComponent} from '../../component/top-bar/top-bar.component';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements AfterViewInit, OnDestroy {
    @ViewChild(TopBarComponent, {static: false}) topBar: TopBarComponent;

    topBarHeight = 0;
    private topBarD?: Subscription;

    constructor(private topBarStoreService: TopBarStoreService) {
        topBarStoreService.updateTopState(false, true, false, false, false);
    }


    ngAfterViewInit(): void {
        this.topBarD = this.topBar.height$.subscribe((h) => {
            this.topBarHeight = h;
        });
    }

    ngOnDestroy(): void {
        this.topBarD?.unsubscribe();
    }

}
