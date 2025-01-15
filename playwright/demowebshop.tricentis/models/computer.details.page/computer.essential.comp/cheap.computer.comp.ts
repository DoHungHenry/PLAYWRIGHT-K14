import { Locator } from "@playwright/test";
import { componentSelector } from "@core/models";
import { ComputerEssentialComponent } from "./computer.essential.comp";

@componentSelector(".product-essential")
export class CheapComputerComponent extends ComputerEssentialComponent {

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };

    selectProcessorType = async (type: string): Promise<void> => await this.selectComponentOption(type);

    selectRAMType = async (type: string): Promise<void> => await this.selectComponentOption(type);
}