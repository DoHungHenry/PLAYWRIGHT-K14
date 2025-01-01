import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";
import { InfoColumnComp } from "./child.column/info.column.comp";
import { FollowUsColumnComp } from "./child.column/follow.us.column.comp";
import { CustomerServiceColumnComp } from "./child.column/customer.service.comp";
import { MyAccountColumnComp } from "./child.column/my.account.column.comp";
import { appendComponentSelector } from "@core/models/base.decorator";

@appendComponentSelector('footer')
export class FooterComponent extends BasePage {

    // public static componentSelector = '.footer';

    constructor(private componentLocator: Locator) {
        super(componentLocator.page());
    };

    infoColumnComp = async (): Promise<InfoColumnComp> => new InfoColumnComp(await this.findLocator(InfoColumnComp.componentSelector));
    followUsColumnComp = async (): Promise<FollowUsColumnComp> => new FollowUsColumnComp(await this.findLocator(FollowUsColumnComp.componentSelector));
    customerServiceColumnComp = async (): Promise<CustomerServiceColumnComp> => new CustomerServiceColumnComp(await this.findLocator(CustomerServiceColumnComp.componentSelector));
    myAccountColumnComp = async (): Promise<MyAccountColumnComp> => new MyAccountColumnComp(await this.findLocator(MyAccountColumnComp.componentSelector));
}