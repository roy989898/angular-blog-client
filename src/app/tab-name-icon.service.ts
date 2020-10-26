import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TabNameIconService {

    tab1Icon = 'account_balance';
    tab1Text = 'Index';
    tab2Icon = 'category';
    tab2Text = 'Category';
    tab3Icon = 'local_offer';
    tab3Text = 'Tag';
    tab4Icon = 'timeline';
    tab4Text = 'timeLine';
    tab5Icon = 'face';
    tab5Text = 'About Me';


    constructor() {
    }
}
