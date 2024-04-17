import { ProductItemComponent } from '@modules/demowebshop.tricentis/common.components/product.item.comp';
import { SearchComponent } from '@modules/demowebshop.tricentis/common.components/search.comp';
import { HomePage } from '@modules/demowebshop.tricentis/home.page/home.page';
import { test } from '@playwright/test';

test('Test Products list as searching result in Page', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const searchComponent: SearchComponent = homePage.searchComponent();
    await searchComponent.searchBoxLct().click();
    await searchComponent.searchProduct('own');

    const productItemCompList: ProductItemComponent[] = await homePage.productItemComponentList();

    for (let productItemComponent of productItemCompList) {
        const productTitle = await (productItemComponent.productTitle()).textContent();
        const productPrice = await (productItemComponent.productPrice()).textContent();
        console.log(`${productTitle.trim()}: ${productPrice.trim()}`);
    };

    // DEBUG purpose only
    await page.waitForTimeout(2000);
})