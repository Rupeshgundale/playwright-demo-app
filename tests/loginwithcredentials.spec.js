import {test, expect, Browser, Page} from '@playwright/test'

test('sauce', async({page}) => {
await page.pause()
    await page.goto('https://saucedemo.com')

    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user");
    await page.locator("input[name='password']").click()
    await page.locator("input[name='password']").fill("secret_sauce")
    await page.locator('input[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    await page.locator('[data-test="shopping-cart-link"]').click()
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').click()
    await page.locator('[data-test="firstName"]').fill("Rupesh")

    await page.locator('[data-test="lastName"]').click()
    await page.locator('[data-test="lastName"]').fill("Gundale")

    await page.locator('[data-test="postalCode"]').click()
    await page.locator('[data-test="postalCode"]').fill("411033")

    
    await page.locator('[data-test="continue"]').click()
    await expect(page.locator('[data-test="finish"]')).toHaveText("Finish")

    await page.locator('[data-test="finish"]').click()
    
});