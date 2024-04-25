import { BaseComponent } from "@modules/base.components/base.component";
import { Locator, Page } from "@playwright/test";

export class FooterColumnComp extends BaseComponent {

    public static compSlt = '.footer';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
        this.compLct.scrollIntoViewIfNeeded();
    };

    titleLct = () => this.findLctByLct(this.compLct, '.h3');

    linkLcts = () => this.findLctsByLct(this.compLct, 'li a');
}