import { Locator, Page } from "@playwright/test";

export class BaseComponent {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    protected findLctBySlt = (selector: string, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }): Locator => this.page.locator(selector, options) ?? null;

    protected findLctsBySlt = async (selector: string, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }): Promise<Locator[]> => {
        await this.page.waitForLoadState('networkidle');
        return await this.findLctBySlt(selector, options).all();
    };

    protected findLctByLct = (parentLocator: Locator, lct: string, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }): Locator => parentLocator.locator(lct, options) ?? null;

    protected findLctsByLct = async (parentLocator: Locator, lct: string, options?: {
        has?: Locator;
        hasNot?: Locator;
        hasNotText?: string | RegExp;
        hasText?: string | RegExp;
    }): Promise<Locator[]> => {
        await this.page.waitForLoadState('networkidle');
        return await this.findLctByLct(parentLocator, lct, options).all();
    };

    protected fill = async (locator: Locator, value: string): Promise<void> => {
        await locator.waitFor({ state: 'visible', timeout: 5000 })
        await locator.fill(value, { force: true, timeout: 5000 });
        await this.page.waitForLoadState('networkidle');
    };

    protected click = async (locator: Locator): Promise<void> => {
        await locator.waitFor({ state: 'visible', timeout: 5000 })
        await locator.click({ force: true, timeout: 5000 });
        await this.page.waitForLoadState('networkidle');
    };

    protected getInnerText = async (locator: Locator): Promise<string> => (await locator.innerText({ timeout: 5000 })).trim();

    protected getTextContent = async (locator: Locator): Promise<string> => (await locator.textContent({ timeout: 5000 })).trim();
}