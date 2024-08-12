import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export class LinkComp extends BasePage {

    public static compSlt = '.header-links-wrapper';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    linkLcts = async (): Promise<Locator[]> => await this.findLocators(this.compLct);
};