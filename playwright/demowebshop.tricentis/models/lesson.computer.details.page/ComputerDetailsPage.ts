import { Locator, Page } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";
import HeaderComponent from "./HeaderComponent";

export type ComputerComponentConstructor<Tun extends ComputerEssentialComponent> = new (component: Locator) => Tun;

export class ComputerDetailsPage {

    private barNotificationSel = '#bar-notification p';

    constructor(private page: Page) {
        this.page = page;
    }

    public async getBarNotificationText(): Promise<string> {
        return await this.page.locator(this.barNotificationSel).textContent();
    }

    public headerComponent(): HeaderComponent {
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }

    // Boundary Generic type
    computerComp<Tun extends ComputerEssentialComponent>(
        computerComponentClass: ComputerComponentConstructor<Tun>
    ): Tun {
        return new computerComponentClass(this.page.locator((computerComponentClass as any).selectorValue));
    }

}