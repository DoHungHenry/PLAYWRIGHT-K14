import { Locator, Page } from "@playwright/test";

export abstract class BaseComponent {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    protected findLctBySlt = (locator: string, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }): Locator => this.page.locator(locator, options) ?? null;

    protected findLctsBySlt = async (locator: string): Promise<Locator[]> => {
        await this.page.waitForLoadState('networkidle');
        return await this.findLctBySlt(locator).all();
    };

    protected findLctByLct = (parentLocator: Locator, lct: string, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }): Locator => parentLocator.locator(lct, options) ?? null;

    protected findLctsByLct = async (parentLocator: Locator, lct: string): Promise<Locator[]> => {
        await this.page.waitForLoadState('networkidle');
        return await this.findLctByLct(parentLocator, lct).all();
    };

    protected fill = async (locator: Locator, value: string): Promise<void> => {
        await locator.fill(value, { force: true, timeout: 5000 });
        await this.page.waitForLoadState('networkidle');
    };

    protected click = async (locator: Locator): Promise<void> => {
        await locator.click({ force: true, timeout: 5000 });
        await this.page.waitForLoadState('networkidle');
    };

    protected getInnerText = async (locator: Locator): Promise<string> => (await locator.innerText({ timeout: 5000 })).trim();

    protected getTextContent = async (locator: Locator): Promise<string> => (await locator.textContent({ timeout: 5000 })).trim();
}