import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HasTopBarPage} from '../HasTopbarPage';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.page.html',
    styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage extends HasTopBarPage implements OnInit {

    constructor(protected activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        const key = this.activatedRoute.snapshot.paramMap.get('key');
    }

}
