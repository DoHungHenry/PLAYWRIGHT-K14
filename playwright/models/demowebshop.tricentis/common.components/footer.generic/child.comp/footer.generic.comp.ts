import { BaseComponent } from "@core/models/base.component";
import { Locator } from "@playwright/test";

export abstract class FooterGenericComp extends BaseComponent {

    protected constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
        // this.compLct.scrollIntoViewIfNeeded();
    };

    titleLct = (lct: Locator) => lct.locator('h3');

    // linkLcts = () => this.findLctsByLct(this.compLct, 'li a');
}