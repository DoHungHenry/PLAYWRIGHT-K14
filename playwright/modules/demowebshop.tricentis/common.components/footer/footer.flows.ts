import { BasePage } from "@core/models";
import { FooterColumnComp, HomePage } from "@modules/demowebshop.tricentis";
import { Page } from "@playwright/test";
import assert from "assert";


export class FooterFlows extends BasePage {

    homePage: HomePage;

    constructor(page: Page) {
        super(page);
        this.homePage = new HomePage(page);
    };

    // Service method
    async verifyFooterComp(): Promise<void> {
        await this.verifyInfoColumn();
        await this.verifyCustomerServiceColumn();
        await this.verifyMyAccountColumn();
        await this.verifyFollowUsColumn();
    };

    // private methods
    private async verifyInfoColumn(): Promise<void> {
        const expectedLinkTexts = ["Sitemap", "Shipping & Returns", "Privacy Notice", "Conditions of Use", "About us", "Contact us"];
        const expectedLinks = ["/sitemap", "/shipping-returns", "/privacy-policy", "/conditions-of-use", "/about-us", "/contactus"];

        const footerInfoComp = this.homePage.footerComp().infoColumnComp();

        await this.verifyFooterColumn(footerInfoComp, expectedLinkTexts, expectedLinks);

        this.page.waitForTimeout(2000);
    };

    private async verifyCustomerServiceColumn(): Promise<void> {
        const expectedLinkTexts = ["Search", "News", "Blog", "Recently viewed products", "Compare products list", "New products"];
        const expectedLinks = ["/search", "/news", "/blog", "/recentlyviewedproducts", "/compareproducts", "/newproducts"];

        const footerCustomerServiceComp = this.homePage.footerComp().customerServiceColumnComp();

        await this.verifyFooterColumn(footerCustomerServiceComp, expectedLinkTexts, expectedLinks);

        this.page.waitForTimeout(2000);
    };

    private async verifyMyAccountColumn(): Promise<void> {
        const expectedLinkTexts = ["My account", "Orders", "Addresses", "Shopping cart", "Wishlist"];
        const expectedLinks = ["/customer/info", "/customer/orders", "/customer/addresses", "/cart", "/wishlist"];

        const footerMyAccountComp = this.homePage.footerComp().myAccountColumnComp();

        await this.verifyFooterColumn(footerMyAccountComp, expectedLinkTexts, expectedLinks);

        this.page.waitForTimeout(2000);
    };

    private async verifyFollowUsColumn(): Promise<void> {
        const expectedLinkTexts = ["Facebook", "Twitter", "RSS", "YouTube", "Google+"];
        const expectedLinks = ["http://www.facebook.com/nopCommerce", "https://twitter.com/nopCommerce", "/news/rss/1", "http://www.youtube.com/user/nopCommerce", "https://plus.google.com/+nopcommerce"];

        const footerFollowUsComp = this.homePage.footerComp().followUsColumnComp();

        await this.verifyFooterColumn(footerFollowUsComp, expectedLinkTexts, expectedLinks);

        this.page.waitForTimeout(2000);
    };

    private async verifyFooterColumn(
        footerColumnComp: FooterColumnComp,
        expectedLinkTexts: string[],
        expectedLinks: string[]
    ): Promise<void> {
        let actualLinkTexts: string[] = [];
        let actualLinks: string[] = [];

        const linkLcts = await footerColumnComp.linkLcts();

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