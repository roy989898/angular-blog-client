import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class MyRouterService {

    constructor(private router: Router) {
    }


    toHomePage() {

        this.router.navigate(['/home']);
    }

    toCategoryPage() {

        this.router.navigate(['/category']);
    }
}
