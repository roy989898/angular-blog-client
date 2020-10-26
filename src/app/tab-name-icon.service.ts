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

    tab1Click() {
        console.log('tab 1 click');
    }

    tab2Click() {
        console.log('tab 2 click');
    }

    tab3Click() {
        console.log('tab 3 click');
    }

    tab4Click() {
        console.log('tab 4 click');
    }

    tab5Click() {
        console.log('tab 5 click');
    }
}
