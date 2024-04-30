import { Locator } from "@playwright/test";
import { FooterGenericComp } from "./footer.generic.comp";
import { compSlt } from "@core/models";

@compSlt(".column.follow-us")
export class FollowUsColumnComp2 extends FooterGenericComp {

    constructor(compLct: Locator) {
        super(compLct);
    };
}