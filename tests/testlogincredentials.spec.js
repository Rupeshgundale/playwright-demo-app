import {test, expect, Browser, Page} from '@playwright/test'

test('testlogin', async({page}) => {

    await page.goto('https://saucedemo.com')
    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user")
    await page.locator('input[data-test="login-button"]').click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Password is required');
});

test('testlogincheckusername', async({page}) => {

    await page.goto('https://saucedemo.com')
    await page.locator("input[name='password']").click()
    await page.locator("input[name='password']").fill("secret_sauce")
    await page.locator('input[data-test="login-button"]').click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username is required');
    
});

test('test', async({page}) => {

    await page.goto('https://saucedemo.com')
    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("Rupesh Gundale")
    
    await page.locator("input[name='password']").click()
    await page.locator("input[name='password']").fill("24852")

    await page.locator('input[data-test="login-button"]').click();

    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
});

test('testall', async({page}) => {

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

    await page.locator('[data-test="finish"]').click()

    //await expect(page.locator('//*[@id="header_container"]/div[1]/div[2]/div')).toHaveText('Swag Labs')

    //await page.waitForTimeout(5000)

    
});

