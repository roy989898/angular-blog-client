import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {TopBarStoreService} from './akita/TopBarStateStore/TopBarStoreService';

@Injectable({
    providedIn: 'root'
})
export class MyRouterService {

    constructor(private router: Router, private topBarStoreService: TopBarStoreService) {
    }


    toHomePage() {
        // this.topBarStoreService.updateTopState(true, false, false, false, false);

        this.router.navigate(['/home']);
    }

    toCategoryPage() {
        // this.topBarStoreService.updateTopState(false, true, false, false, false);

        this.router.navigate(['/category']);
    }


    toTagPage() {
        // this.topBarStoreService.updateTopState(false, true, false, false, false);

        this.router.navigate(['/tag']);
    }

    toTimeLinePage(key: string) {
        // this.topBarStoreService.updateTopState(false, true, false, false, false);

        this.router.navigate(['/timeline', key]);
    }

    toAboutMePage() {
        // this.topBarStoreService.updateTopState(false, true, false, false, false);

        this.router.navigate(['/about-me']);
    }

    toSearchResultPage() {
        // this.topBarStoreService.updateTopState(false, true, false, false, false);

        this.router.navigate(['/search-result']);
    }
}
