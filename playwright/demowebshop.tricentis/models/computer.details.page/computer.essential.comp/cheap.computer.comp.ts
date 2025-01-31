import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./computer.essential.comp";

export class CheapComputerComponent extends ComputerEssentialComponent {

    static componentSelector = '.product-essential';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };

    selectProcessorType = async (type: string): Promise<void> => await this.selectComponentOption(type);

    selectRAMType = async (type: string): Promise<void> => await this.selectComponentOption(type);
}