import {TopBarStore} from './TopBarStore';
import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class TopBarStoreService {

    constructor(private topBarStore: TopBarStore) {
    }


    updateTopState(indexBtOn: boolean, categoryBtOn: boolean, tagBtOn: boolean, timeLineBtOn: boolean, aboutMeBtOn: boolean): void {
        this.topBarStore.update({
            indexBtOn,
            categoryBtOn,
            tagBtOn,
            timeLineBtOn,
            aboutMeBtOn
        });

    }
}

