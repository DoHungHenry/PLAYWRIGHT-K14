import { Locator } from "@playwright/test";
import { compSlt } from "@core/models";
import { FooterGenericComp } from "./footer.generic.comp";

@compSlt(".column.information")
export class InfoColumnComp2 extends FooterGenericComp {

    constructor(compLct: Locator) {
        super(compLct);
    };

    // titleLct = () => this.compLct.locator(InfoColumnComp2.selectorValue, '.h3');

    // public titleLct(compLct: Locator, slt: string): Locator {
    //     return this.findLocator(compLct, slt);
    // }

    // public linkLcts(compLct: Locator, slt: string): Locator {
    //     throw new Error("Method not implemented.");
    // }
}