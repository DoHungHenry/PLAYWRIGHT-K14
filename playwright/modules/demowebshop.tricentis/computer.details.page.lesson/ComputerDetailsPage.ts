import { Locator, Page } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";

type ComputerComponentConstructor<Tun extends ComputerEssentialComponent> = new (component: Locator) => Tun;

export default class ComputerDetailsPage {

    constructor(private page: Page) {
        this.page = page;
    }

    // Boundary Generic type
    computerComp<Tun extends ComputerEssentialComponent>(
        computerComponentClass: ComputerComponentConstructor<Tun>
    ): Tun {
        console.log(computerComponentClass.selectorValue);
        return new computerComponentClass(this.page.locator(''));
    }

}