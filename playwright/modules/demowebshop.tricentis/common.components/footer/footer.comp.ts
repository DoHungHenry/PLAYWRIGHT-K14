import { BaseComponent } from "@core/models/base.component";
import { Locator } from "@playwright/test";
import { InfoColumnComp } from "./child.column/info.column.comp";
import { FollowUsColumnComp } from "./child.column/follow.us.column.comp";
import { CustomerServiceColumnComp } from "./child.column/customer.service.comp";
import { MyAccountColumnComp } from "./child.column/my.account.column.comp";

export class FooterComponent extends BaseComponent {

    public static compSlt = '.footer';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    infoColumnComp = (): InfoColumnComp => new InfoColumnComp(this.findLctBySlt(InfoColumnComp.compSlt));
    followUsColumnComp = (): FollowUsColumnComp => new FollowUsColumnComp(this.findLctBySlt(FollowUsColumnComp.compSlt));
    customerServiceColumnComp = (): CustomerServiceColumnComp => new CustomerServiceColumnComp(this.findLctBySlt(CustomerServiceColumnComp.compSlt));
    myAccountColumnComp = (): MyAccountColumnComp => new MyAccountColumnComp(this.findLctBySlt(MyAccountColumnComp.compSlt));
}