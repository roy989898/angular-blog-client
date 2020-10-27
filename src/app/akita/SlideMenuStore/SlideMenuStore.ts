import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

export interface SlideMenuState {
    count: number;
}

export function createInitialState(): SlideMenuState {
    return {
        count: 0
    };
}


@Injectable({providedIn: 'root'})
@StoreConfig({name: 'slidemenustore'})
export class SlideMenuStore extends Store<SlideMenuState> {

    constructor() {
        super(createInitialState());
    }
}

