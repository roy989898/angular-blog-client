import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {MainLoadingState, MainLoadingStore} from '../MainLoadingStore/MainLoadingStore';
import {SlideMenuState, SlideMenuStore} from './SlideMenuStore';

@Injectable({
    providedIn: 'root',
})
export class SlideMenuQuery extends Query<SlideMenuState> {

    count$ = this.select('count');

    constructor(protected store: SlideMenuStore) {
        super(store);
    }

}
