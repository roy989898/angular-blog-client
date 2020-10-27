import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

export interface SlideMenuState {
    isOpen: boolean;
}

export function createInitialState(): SlideMenuState {
    return {
        isOpen: false
    };
}


@Injectable({providedIn: 'root'})
@StoreConfig({name: 'slidemenustore'})
export class SlideMenuStore extends Store<SlideMenuState> {

    constructor() {
        super(createInitialState());
    }
}

