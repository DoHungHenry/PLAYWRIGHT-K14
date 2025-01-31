import { Page } from "@playwright/test";
import assert from "assert";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";
import { FooterColumnComponent } from "../child.column/footer.column.comp";
import { HomePage } from "demowebshop.tricentis/models/home.page";


export class FooterFlows extends BasePage {

    homePage: HomePage;

    constructor(page: Page) {
        super(page);
        this.homePage = new HomePage(page, this.page.locator(HomePage.componentSelector));
    };

    // Service method
    async verifyFooterComponent(): Promise<void> {
        await this.verifyInfoColumn();
        await this.verifyCustomerServiceColumn();
        await this.verifyMyAccountColumn();
        await this.verifyFollowUsColumn();
    };

    // private methods
    private async verifyInfoColumn(): Promise<void> {
        const expectedLinkTexts = ["Sitemap", "Shipping & Returns", "Privacy Notice", "Conditions of Use", "About us", "Contact us"];
        const expectedLinks = ["/sitemap", "/shipping-returns", "/privacy-policy", "/conditions-of-use", "/about-us", "/contactus"];

        // const homePage = await this.homePage();

        const footerInfoComponent = await (await this.homePage.footerComponent()).infoColumnComponent();

        await this.verifyFooterColumn(footerInfoComponent, expectedLinkTexts, expectedLinks);

        this.page.waitForTimeout(2000);
    };

    private async verifyCustomerServiceColumn(): Promise<void> {
        const expectedLinkTexts = ["Search", "News", "Blog", "Recently viewed products", "Compare products list", "New products"];
        const expectedLinks = ["/search", "/news", "/blog", "/recentlyviewedproducts", "/compareproducts", "/newproducts"];

        // const homePage = await this.homePage();

        const footerCustomerServiceComponent = await (await this.homePage.footerComponent()).customerServiceColumnComponent();

        await this.verifyFooterColumn(footerCustomerServiceComponent, expectedLinkTexts, expectedLinks);

        this.page.waitForTimeout(2000);
    };

    private async verifyMyAccountColumn(): Promise<void> {
        const expectedLinkTexts = ["My account", "Orders", "Addresses", "Shopping cart", "Wishlist"];
        const expectedLinks = ["/customer/info", "/customer/orders", "/customer/addresses", "/cart", "/wishlist"];

        // const homePage = await this.homePage();

        const footerMyAccountComponent = await (await this.homePage.footerComponent()).myAccountColumnComponent();

        await this.verifyFooterColumn(footerMyAccountComponent, expectedLinkTexts, expectedLinks);

        this.page.waitForTimeout(2000);
    };

    private async verifyFollowUsColumn(): Promise<void> {
        const expectedLinkTexts = ["Facebook", "Twitter", "RSS", "YouTube", "Google+"];
        const expectedLinks = ["http://www.facebook.com/nopCommerce", "https://twitter.com/nopCommerce", "/news/rss/1", "http://www.youtube.com/user/nopCommerce", "https://plus.google.com/+nopcommerce"];
        // const homePage = await this.homePage();

        const footerFollowUsComponent = await (await this.homePage.footerComponent()).followUsColumnComponent();

        await this.verifyFooterColumn(footerFollowUsComponent, expectedLinkTexts, expectedLinks);

        this.page.waitForTimeout(2000);
    };

    private async verifyFooterColumn(
        footerColumnComponent: FooterColumnComponent,
        expectedLinkTexts: string[],
        expectedLinks: string[]
    ): Promise<void> {
        let actualLinkTexts: string[] = [];
        let actualLinks: string[] = [];

        const linkLcts = await footerColumnComponent.linkLcts();

        for (const linkLct of linkLcts) {
            const link = (await linkLct.textContent()).trim();
            const href = await linkLct.getAttribute('href');
            console.log(`Link text: ${link}`);
            actualLinkTexts.push(link);
            console.log(`Link: ${href}`);
            actualLinks.push(href);
        };

        // expect(actualLinkTexts).toEqual(expectedLinkTexts);
        // expect(actualLinks).toEqual(expectedLinks);
        assert.deepStrictEqual(actualLinkTexts, expectedLinkTexts);
        assert.deepStrictEqual(actualLinks, expectedLinks);

        this.page.waitForTimeout(2000);
    };

}