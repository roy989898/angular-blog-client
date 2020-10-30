import {TopBarStore} from './TopBarStore';
import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class TopBarStoreService {

    constructor(private topBarStore: TopBarStore) {
    }

    updateTopState(indexBtOn: boolean = false, categoryBtOn: boolean = false,
                   tagBtOn: boolean = false, timeLineBtOn: boolean = false, aboutMeBtOn: boolean = false,
                   searchBtOn: boolean = false): void {
        this.topBarStore.update({
            indexBtOn,
            categoryBtOn,
            tagBtOn,
            timeLineBtOn,
            aboutMeBtOn,
            searchBtOn
        });

    }
}

