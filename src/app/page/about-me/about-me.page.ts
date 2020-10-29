import { Component, OnInit } from '@angular/core';
import {HasTopBarPage} from '../HasTopbarPage';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage  extends HasTopBarPage implements OnInit {

  constructor(private topBarStoreService: TopBarStoreService) {
    super();
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.topBarStoreService.updateTopState(false, false, false, false, true);

  }
}
