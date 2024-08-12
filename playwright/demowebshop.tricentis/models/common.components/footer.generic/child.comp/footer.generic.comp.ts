import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export abstract class FooterGenericComp extends BasePage {

    protected constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    titleLct = (lct: Locator) => lct.locator('h3');

}