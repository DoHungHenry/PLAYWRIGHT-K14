import { Locator, Page } from "@playwright/test";

export abstract class BaseComponent {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    protected findLct = (locator: string, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }): Locator => this.page.locator(locator, options) ?? null;

    protected findLcts = async (locator: string): Promise<Locator[]> => {
        await this.page.waitForLoadState('networkidle');
        return await this.findLct(locator).all();
    };

    protected fill = async (locator: Locator, value: string): Promise<void> => {
        await locator.fill(value, { force: true, timeout: 5000 });
        await this.page.waitForLoadState('networkidle');
    };

    protected click = async (locator: Locator): Promise<void> => {
        await locator.click({ force: true, timeout: 5000 });
        await this.page.waitForLoadState('networkidle');
    };

    protected getInnerText = async (locator: Locator): Promise<string> => (await locator.innerText({timeout: 5000})).trim();

    protected getTextContent = async (locator: Locator): Promise<string> => (await locator.textContent({timeout: 5000})).trim();
}