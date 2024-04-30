import { Locator } from "@playwright/test";
import { FooterGenericComp } from "./footer.generic.comp";
import { compSlt } from "@core/models";

@compSlt(".column.my-account")
export class MyAccountColumnComp2 extends FooterGenericComp {

    constructor(compLct: Locator) {
        super(compLct);
    };
}