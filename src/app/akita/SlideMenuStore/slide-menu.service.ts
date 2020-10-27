import {Injectable} from '@angular/core';
import {SlideMenuStore} from './SlideMenuStore';

@Injectable({
    providedIn: 'root'
})
export class SlideMenuService {

    constructor(private store: SlideMenuStore) {
    }

    click() {


        this.store.update({count: this.store.getValue().count + 1});

    }
}
