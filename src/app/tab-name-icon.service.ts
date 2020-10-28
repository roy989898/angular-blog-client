import {Injectable} from '@angular/core';
import {MyRouterService} from './my-router.service';

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


    constructor(private myRouterService: MyRouterService) {
    }

    tab1Click() {
        this.myRouterService.toHomePage();
        console.log('tab 1 click');
    }

    tab2Click() {
        this.myRouterService.toCategoryPage();
        console.log('tab 2 click');
    }

    tab3Click() {
        this.myRouterService.toTagPage();
        console.log('tab 3 click');
    }

    tab4Click() {
        console.log('tab 4 click');
    }

    tab5Click() {
        console.log('tab 5 click');
    }
}
