import { Component, OnInit } from '@angular/core';
import {HasTopBarPage} from '../HasTopbarPage';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage extends HasTopBarPage implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
