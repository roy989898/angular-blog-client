import {Component, OnInit} from '@angular/core';
import {HasTopBarPage} from '../HasTopbarPage';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.page.html',
    styleUrls: ['./tag.page.scss'],
})
export class TagPage extends HasTopBarPage implements OnInit {

    constructor(private topBarStoreService: TopBarStoreService) {
        super();
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.topBarStoreService.updateTopState(false, false, true, false, false);
        // console.warn('HomePage ionViewWillEnter');
    }
}
