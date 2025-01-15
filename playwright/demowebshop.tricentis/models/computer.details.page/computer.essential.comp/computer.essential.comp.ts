import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export abstract class ComputerEssentialComponent extends BasePage {

    public componentLocator: Locator;

    protected constructor(componentLocator: Locator) {
        super(componentLocator.page());
        this.componentLocator = componentLocator;
    };

    abstract selectProcessorType(type: string): Promise<void>;
    abstract selectRAMType(type: string): Promise<void>;
    selectHDDType = async (type: string): Promise<void> => await this.selectComponentOption(type);
    selectSoftwareType = async (type: string): Promise<void> => await this.selectComponentOption(type);
    selectOSType = async (type: string): Promise<void> => await this.selectComponentOption(type);

    protected async selectComponentOption(type: string): Promise<void> {
        // const optionLcts = await this.findLocators(`label:has-text("${type}"):parent + dd option`);
        const optionLcts = await this.findLocators(`//label[contains(text(), "${type}")]`);
        const optionLct = optionLcts.find(async lct => (await lct.textContent()).includes(type));
        await this.click(optionLct);
    }
}