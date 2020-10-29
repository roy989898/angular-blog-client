import {Component, OnInit} from '@angular/core';
import {HasTopBarPage} from '../HasTopbarPage';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.page.html',
    styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage extends HasTopBarPage implements OnInit {
    img = 'https://ichef.bbci.co.uk/news/800/cpsprodpb/AAE7/production/_111515734_gettyimages-1208779325.jpg';
    categories = ['c1', 'c2', 'c3', 'c4'];
    tags = ['tpe1', 'tpe2', 'tpe3', 'tpe4'];
    aboutMe = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate';

    constructor(private topBarStoreService: TopBarStoreService) {
        super();
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.topBarStoreService.updateTopState(false, false, false, false, true);

    }

    categoryClick(cat: string) {
        console.log(cat);

    }

    tagClick(tag: string) {
        console.log(tag);
    }
}
