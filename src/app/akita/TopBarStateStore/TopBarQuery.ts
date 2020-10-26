import {Query} from '@datorama/akita';
import {TopBarState, TopBarStore} from './TopBarStore';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TopBarQuery extends Query<TopBarState> {

    indexBtOn$ = this.select('indexBtOn');
    categoryBtOn$ = this.select('categoryBtOn');
    tagBtOn$ = this.select('tagBtOn');
    timeLineBtOn$ = this.select('timeLineBtOn');
    aboutMeBtOn$ = this.select('aboutMeBtOn');

    constructor(protected store: TopBarStore) {
        super(store);
    }

}
