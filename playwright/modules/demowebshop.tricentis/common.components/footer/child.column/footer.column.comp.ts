import { BaseComponent } from "@core/models/base.component";
import { Locator } from "@playwright/test";

export abstract class FooterColumnComp extends BaseComponent {

    public static compSlt = '.footer';

    protected constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
        this.compLct.scrollIntoViewIfNeeded();
    };

    titleLct = () => this.findLctByLct(this.compLct, '.h3');

    linkLcts = () => this.findLctsByLct(this.compLct, 'li a');
}