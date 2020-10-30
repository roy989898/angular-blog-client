import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HasTopBarPage} from '../HasTopbarPage';
import {mdLong} from '../../MdData';
import {Tag} from '@angular/compiler/src/i18n/serializers/xml_helper';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.page.html',
    styleUrls: ['./blog-detail.page.scss'],
})
interface Comment {
    date: Date;
    name: string;
    content: string;
    childrenComments: Comment[];

}

export class BlogDetailPage extends HasTopBarPage implements OnInit {
    tags = [
        {
            name: 't1',

        },
        {
            name: 't2',

        },
        {
            name: 't3',

        },
    ];
    blogDetail = '### Features\n' +
        '\n' +
        '- Support Standard Markdown / CommonMark and GFM(GitHub Flavored Markdown);\n' +
        '- Full-featured: Real-time Preview, Image (cross-domain) upload, Preformatted text/Code blocks/Tables insert, Code fold, Search replace, Read only, Themes, Multi-languages, L18n, HTML entities, Code syntax highlighting...;\n' +
        '- Markdown Extras : Support ToC (Table of Contents), Emoji, Task lists, @Links...;\n' +
        '- Compatible with all major browsers (IE8+), compatible Zepto.js and iPad;\n' +
        '- Support identification, interpretation, fliter of the HTML tags;\n' +
        '- Support TeX (LaTeX expressions, Based on KaTeX), Flowchart and Sequence Diagram of Markdown extended syntax;\n' +
        '- Support AMD/CMD (Require.js & Sea.js) Module Loader, and Custom/define editor plugins;';
    blogDetail2 = mdLong;
    header = '';

    title = 't1';
    author = 'author';
    brief = 'brief';
    name = 'name';
    date = new Date();
    view = 12;
    type = 'type1';
    icon = 'data:image/jpeg;base64,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';

    comments: Comment[] = [
        {date: new Date(), name: 'Peter', content: 'cccccc', childrenComments: []},
        {
            date: new Date(), name: 'Peter', content: 'cccccc', childrenComments: [
                {date: new Date(), name: 'Peter', content: 'cccccc', childrenComments: []},
                {date: new Date(), name: 'Peter', content: 'cccccc', childrenComments: []},
                {date: new Date(), name: 'Peter', content: 'cccccc', childrenComments: []},
            ]
        },
        {date: new Date(), name: 'Peter', content: 'cccccc', childrenComments: []},
        {date: new Date(), name: 'Peter', content: 'cccccc', childrenComments: []},
    ];

    constructor(protected activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        const key = this.activatedRoute.snapshot.paramMap.get('key');
        this.header = key;
    }

}
