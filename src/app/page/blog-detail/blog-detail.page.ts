import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HasTopBarPage} from '../HasTopbarPage';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.page.html',
    styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage extends HasTopBarPage implements OnInit {

    blogDetail = '### Features\n' +
        '\n' +
        '- Support Standard Markdown / CommonMark and GFM(GitHub Flavored Markdown);\n' +
        '- Full-featured: Real-time Preview, Image (cross-domain) upload, Preformatted text/Code blocks/Tables insert, Code fold, Search replace, Read only, Themes, Multi-languages, L18n, HTML entities, Code syntax highlighting...;\n' +
        '- Markdown Extras : Support ToC (Table of Contents), Emoji, Task lists, @Links...;\n' +
        '- Compatible with all major browsers (IE8+), compatible Zepto.js and iPad;\n' +
        '- Support identification, interpretation, fliter of the HTML tags;\n' +
        '- Support TeX (LaTeX expressions, Based on KaTeX), Flowchart and Sequence Diagram of Markdown extended syntax;\n' +
        '- Support AMD/CMD (Require.js & Sea.js) Module Loader, and Custom/define editor plugins;';

    constructor(protected activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        const key = this.activatedRoute.snapshot.paramMap.get('key');
    }

}
