import {Store, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';

export interface TopBarState {
    indexBtOn: boolean;
    categoryBtOn: boolean;
    tagBtOn: boolean;
    timeLineBtOn: boolean;
    aboutMeBtOn: boolean;
}

export function createInitialState(): TopBarState {
    return {
        indexBtOn: false,
        categoryBtOn: false,
        tagBtOn: false,
        timeLineBtOn: false,
        aboutMeBtOn: false,
    };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'topbar'})
export class TopBarStore extends Store<TopBarState> {
    constructor() {
        super(createInitialState());
    }
}
