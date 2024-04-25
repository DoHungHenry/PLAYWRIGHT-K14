import { HomePage } from '@modules/demowebshop.tricentis/home.page/home.page';
import { expect, Page, test } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});

test.describe('Verify info column in footer', () => {

    test('Verify link text in Info column', async () => {
        const expectedLinkTexts = ["Sitemap", "Shipping & Returns", "Privacy Notice", "Conditions of Use", "About us", "Contact us"];

        await page.goto('https://demowebshop.tricentis.com/');
        const footerInfoComp = new HomePage(page).footerComp().infoColumnComp();

        const actualLinkTexts: string[] = [];

        const linkLcts = await footerInfoComp.linkLcts();

        for (const linkLct of linkLcts) {
            const link = (await linkLct.textContent()).trim();
            console.log(`Link text: ${linkLct}`);
            actualLinkTexts.push(link);
        };

        expect(actualLinkTexts).toEqual(expectedLinkTexts);

        await page.waitForTimeout(2000);
    });

    test('Verify hyperlink in Info column', async () => {
        const expectedLinks = ["/sitemap", "/shipping-returns", "/privacy-policy", "/conditions-of-use", "/about-us", "/contactus"];

        await page.goto('https://demowebshop.tricentis.com/');
        const footerInfoComp = new HomePage(page).footerComp().infoColumnComp();

        const actualLinks: string[] = [];

        const linkLcts = await footerInfoComp.linkLcts();

        for (const linkLct of linkLcts) {
            const link = await linkLct.getAttribute('href');
            console.log(`Link: ${link}`);
            actualLinks.push(link);
        };

        expect(actualLinks).toEqual(expectedLinks);

        await page.waitForTimeout(2000);
    });
});

test.describe('Verify customer service column in footer', () => {

    test('Verify link text in CustomerService column', async () => {
        const expectedLinkTexts = ["Search", "News", "Blog", "Recently viewed products", "Compare products list", "New products"];

        await page.goto('https://demowebshop.tricentis.com/');
        const footerCustomerServiceComp = new HomePage(page).footerComp().customerServiceColumnComp();

        const actualLinkTexts: string[] = [];

        const linkLcts = await footerCustomerServiceComp.linkLcts();

        for (const linkLct of linkLcts) {
            const link = (await linkLct.textContent()).trim();
            console.log(`Link text: ${linkLct}`);
            actualLinkTexts.push(link);
        };

        expect(actualLinkTexts).toEqual(expectedLinkTexts);

        await page.waitForTimeout(2000);
    });

    test('Verify hyperlink in CustomerService column', async () => {
        const expectedLinks = ["/search", "/news", "/blog", "/recentlyviewedproducts", "/compareproducts", "/newproducts"];

        await page.goto('https://demowebshop.tricentis.com/');
        const footerCustomerServiceComp = new HomePage(page).footerComp().customerServiceColumnComp();

        const actualLinks: string[] = [];

        const linkLcts = await footerCustomerServiceComp.linkLcts();

        for (const linkLct of linkLcts) {
            const link = await linkLct.getAttribute('href');
            console.log(`Link: ${link}`);
            actualLinks.push(link);
        };

        expect(actualLinks).toEqual(expectedLinks);

        await page.waitForTimeout(2000);
    });
});

test.describe('Verify my account column in footer', () => {

    test('Verify link text in MyAccount column', async () => {
        const expectedLinkTexts = ["My account", "Orders", "Addresses", "Shopping cart", "Wishlist"];

        await page.goto('https://demowebshop.tricentis.com/');
        const footerMyAccountComp = new HomePage(page).footerComp().myAccountColumnComp();

        const actualLinkTexts: string[] = [];

        const linkLcts = await footerMyAccountComp.linkLcts();

        for (const linkLct of linkLcts) {
            const link = (await linkLct.textContent()).trim();
            console.log(`Link text: ${linkLct}`);
            actualLinkTexts.push(link);
        };

        expect(actualLinkTexts).toEqual(expectedLinkTexts);

        await page.waitForTimeout(2000);
    });

    test('Verify hyperlink in MyAccount column', async () => {
        const expectedLinks = ["/customer/info", "/customer/orders", "/customer/addresses", "/cart", "/wishlist"];

        await page.goto('https://demowebshop.tricentis.com/');
        const footerMyAccountComp = new HomePage(page).footerComp().myAccountColumnComp();

        const actualLinks: string[] = [];

        const linkLcts = await footerMyAccountComp.linkLcts();

        for (const linkLct of linkLcts) {
            const link = await linkLct.getAttribute('href');
            console.log(`Link: ${link}`);
            actualLinks.push(link);
        };

        expect(actualLinks).toEqual(expectedLinks);

        await page.waitForTimeout(2000);
    });
});

test.describe('Verify follow us column in footer', () => {

    test('Verify link text in FollowUs column', async () => {
        const expectedLinkTexts = ["Facebook", "Twitter", "RSS", "YouTube", "Google+"];

        await page.goto('https://demowebshop.tricentis.com/');
        const footerFollowUsComp = new HomePage(page).footerComp().followUsColumnComp();

        const actualLinkTexts: string[] = [];

        const linkLcts = await footerFollowUsComp.linkLcts();

        for (const linkLct of linkLcts) {
            const link = (await linkLct.textContent()).trim();
            console.log(`Link text: ${linkLct}`);
            actualLinkTexts.push(link);
        };

        expect(actualLinkTexts).toEqual(expectedLinkTexts);

        await page.waitForTimeout(2000);
    });

    test('Verify hyperlink in FollowUs column', async () => {
        const expectedLinks = ["http://www.facebook.com/nopCommerce", "https://twitter.com/nopCommerce", "/news/rss/1", "http://www.youtube.com/user/nopCommerce", "https://plus.google.com/+nopcommerce"];

        await page.goto('https://demowebshop.tricentis.com/');
        const footerFollowUsComp = new HomePage(page).footerComp().followUsColumnComp();

        const actualLinks: string[] = [];

        const linkLcts = await footerFollowUsComp.linkLcts();

        for (const linkLct of linkLcts) {
            const link = await linkLct.getAttribute('href');
            console.log(`Link: ${link}`);
            actualLinks.push(link);
        };

        expect(actualLinks).toEqual(expectedLinks);

        await page.waitForTimeout(2000);
    });

});
