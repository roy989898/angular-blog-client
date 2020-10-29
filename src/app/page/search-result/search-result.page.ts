import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HasTopBarPage} from '../HasTopbarPage';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.page.html',
    styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage extends HasTopBarPage implements OnInit {
    key: string;

    constructor(protected activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.key = this.activatedRoute.snapshot.paramMap.get('key');

    }

}
