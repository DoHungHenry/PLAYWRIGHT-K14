import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export class LogoComp extends BasePage {

    public static compSlt = '.header-logo';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };
}