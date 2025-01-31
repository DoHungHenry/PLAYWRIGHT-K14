import { Page } from "@playwright/test";
import { ComputerComponentConstructor, ComputerDetailsPage } from "./computer.details.page";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";
import { ComputerEssentialComponent } from "./computer.essential.comp/computer.essential.comp";

export class OrderComputerFlow extends BasePage {

    private computerComponentClass: ComputerComponentConstructor<ComputerEssentialComponent>;

    constructor(page: Page, computerComponentClass: ComputerComponentConstructor<ComputerEssentialComponent>) {
        super(page);
        this.computerComponentClass = computerComponentClass;
    };

    buildComputerAndAddToCart = async (): Promise<void> => {
        const computerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComponent = computerDetailsPage.computerComponent(this.computerComponentClass);

        await computerComponent.selectProcessorType("2.2 GHz");
        await computerComponent.selectRAMType("4GB");
        await computerComponent.selectHDDType("400 GB");

        await this.page.waitForTimeout(3000);
    };
}