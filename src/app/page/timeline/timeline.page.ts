import {Component, OnInit} from '@angular/core';
import {HasTopBarPage} from '../HasTopbarPage';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.page.html',
    styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage extends HasTopBarPage implements OnInit {

    constructor(private topBarStoreService: TopBarStoreService) {
        super();
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.topBarStoreService.updateTopState(false, false, false, true, false);
        // console.warn('HomePage ionViewWillEnter');
    }
}
