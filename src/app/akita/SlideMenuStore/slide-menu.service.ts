import {Injectable} from '@angular/core';
import {SlideMenuStore} from './SlideMenuStore';

@Injectable({
    providedIn: 'root'
})
export class SlideMenuService {

    constructor(private store: SlideMenuStore) {
    }

    toggle() {


        this.store.update({isOpen: !this.store.getValue().isOpen});

    }
}
