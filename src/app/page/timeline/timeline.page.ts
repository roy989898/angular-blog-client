import {Component, OnInit} from '@angular/core';
import {HasTopBarPage} from '../HasTopbarPage';
import {TopBarStoreService} from '../../akita/TopBarStateStore/TopBarStoreService';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

interface BlogWithDate {
    title: string;
    date: Date;

}


@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.page.html',
    styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage extends HasTopBarPage implements OnInit {
    blogs: BlogWithDate[] = [
        {title: 't3', date: new Date(2001, 11, 15)},
        {title: 't1', date: new Date(2020, 11, 17)},
        {title: 't2', date: new Date()},
        {title: 't4', date: new Date()},
        {title: 't5', date: new Date(2019, 11, 17)}
    ];
    try$ = of([1, 2, 3, 4]);
    blogs$ = of(this.blogs).pipe(map((bds) => {
            const result = bds.sort((a, b) => {

                if (!(a.date < b.date)) {
                    return -1;
                } else {
                    return 1;
                }
            });
            // console.log(result);
            return result;
        }),
        map((bds) => {

            const yearBdsMap = new Map<number, BlogWithDate[]>();
            bds.forEach((bd) => {
                const year = bd.date.getFullYear();

                if (!yearBdsMap.has(year)) {
                    yearBdsMap.set(year, []);
                }
                const bdArray = yearBdsMap.get(year);
                bdArray.push(bd);
                yearBdsMap.set(year, bdArray);
            });
            const keys = Array.from(yearBdsMap.keys());
            // console.log(keys);
            return {keys, yearBdsMap};
        })
    );

    constructor(private topBarStoreService: TopBarStoreService) {
        super();
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.topBarStoreService.updateTopState(false, false, false, true, false);
        // console.warn('HomePage ionViewWillEnter');
    }

    blogClick(blog: BlogWithDate) {
        console.log(blog);

    }
}
