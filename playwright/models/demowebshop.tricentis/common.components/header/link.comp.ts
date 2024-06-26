import { BaseComponent } from "@core/models";
import { Locator } from "@playwright/test";

export class LinkComp extends BaseComponent {

    public static compSlt = '.header-links-wrapper';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    linkLcts = (): Promise<Locator[]> => this.findLctsByLct(this.compLct, 'li a');
};