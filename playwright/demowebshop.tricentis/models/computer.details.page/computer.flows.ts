import { BasePage } from "@core/models";
import { Page } from "@playwright/test";
import { ComputerCompConstructor, ComputerDetailsPage } from "./computer.details.page";
import { ComputerEssentialComp } from "./computer.essential.comp";

export class OrderComputerFlow extends BasePage {

    private computerCompClass: ComputerCompConstructor<ComputerEssentialComp>;

    constructor(page: Page, computerCompClass: ComputerCompConstructor<ComputerEssentialComp>) {
        super(page);
        this.computerCompClass = computerCompClass;
    };

    buildComputerAndAddToCart = async (): Promise<void> => {
        const computerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp = computerDetailsPage.computerComp(this.computerCompClass);

        await computerComp.selectProcessorType("2.2 GHz");
        await computerComp.selectRAMType("4GB");
        await computerComp.selectHDDType("400 GB");

        await this.page.waitForTimeout(3000);
    };
}