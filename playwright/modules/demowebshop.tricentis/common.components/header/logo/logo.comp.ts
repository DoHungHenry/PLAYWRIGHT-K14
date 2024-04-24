import { BaseComponent } from "@modules/base.components/base.component";
import { Locator } from "@playwright/test";

export class LogoComp extends BaseComponent {

    public static compSlt = '.header-logo';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };
}