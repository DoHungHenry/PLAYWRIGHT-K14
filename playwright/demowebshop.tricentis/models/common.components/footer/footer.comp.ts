import { Locator, Page } from "@playwright/test";
import { InfoColumnComponent } from "./child.column/info.column.comp";
import { FollowUsColumnComponent } from "./child.column/follow.us.column.comp";
import { CustomerServiceColumnComponent } from "./child.column/customer.service.comp";
import { MyAccountColumnComponent } from "./child.column/my.account.column.comp";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";

export interface IFooterColumnComponent {
    titleLct(): Promise<Locator>;
    linkLcts(): Promise<Locator[]>;
}

export class FooterComponent extends BasePage {

    static componentSelector = 'footer';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    infoColumnComponent = async (): Promise<InfoColumnComponent> => await this.findComponent(InfoColumnComponent, { parentLocator: this.componentLocator });
    followUsColumnComponent = async (): Promise<FollowUsColumnComponent> => await this.findComponent(FollowUsColumnComponent, { parentLocator: this.componentLocator });
    customerServiceColumnComponent = async (): Promise<CustomerServiceColumnComponent> => await this.findComponent(CustomerServiceColumnComponent, { parentLocator: this.componentLocator });
    myAccountColumnComponent = async (): Promise<MyAccountColumnComponent> => await this.findComponent(MyAccountColumnComponent, { parentLocator: this.componentLocator });
}