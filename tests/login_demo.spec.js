import {test, expect, Browser, Page} from '@playwright/test'

test('login_demo',async({page}) => {


    await page.goto('https://saucedemo.com')
    
    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user")
    
    await page.locator("input[name='password']").click()
    await page.locator("input[name='password']").fill('secret_sauce')
    await page.locator('input[data-test="login-button"]').click();
    await expect(page.locator('//*[@id="header_container"]/div[1]/div[2]/div')).toHaveText('Swag Labs')

    await page.waitForTimeout(2000)
    await page.close()
});

test('home page',async({page}) => {

    await page.goto('https://saucedemo.com')
    
    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user")
    
    await page.locator("input[name='password']").click()
    await page.locator("input[name='password']").fill('secret_sauce')
    await page.locator('input[data-test="login-button"]').click();
    
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    
    await expect(page.locator('//*[@id="header_container"]/div[1]/div[2]/div')).toHaveText('Swag Labs')

    await page.waitForTimeout(2000)


    await page.close()

});

test('cart-checkout page',async({page}) => {

    await page.goto('https://saucedemo.com')
    
    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user")
    
    await page.locator("input[name='password']").click()
    await page.locator("input[name='password']").fill('secret_sauce')
    await page.locator('input[data-test="login-button"]').click();
    
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Rupesh');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Gundale');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('411033');
    await page.locator('[data-test="continue"]').click();

    await page.locator('[data-test="finish"]').click();
    

    
    //await expect(page.locator('//*[@id="header_container"]/div[1]/div[2]/div')).toHaveText('Swag Labs')

    await page.waitForTimeout(2000)


    await page.close()

}); 

test('all items-checkout page',async({page}) => {

    await page.goto('https://saucedemo.com')
    
    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user")
    
    await page.locator("input[name='password']").click()
    await page.locator("input[name='password']").fill('secret_sauce')
    await page.locator('input[data-test="login-button"]').click();
    
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Rupesh');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Gundale');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('411033');
    await page.locator('[data-test="continue"]').click();

    await page.locator('[data-test="finish"]').click();

    await page.locator('[data-test="back-to-products"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="inventory-sidebar-link"]').click();
    await page.locator('[data-test="about-sidebar-link"]').click();
    await page.getByRole('banner').getByText('Products').click();
    await page.getByText('ProductsPlatform for TestPlatform for TestSauce Cross-BrowserSauce MobileMobile').click();
    await page.getByRole('link', { name: 'location Sauce Cross-Browser' }).click();
    //await page.getByRole('link', { name: 'location Mobile App' }).click();
    await page.getByText('Solutions', { exact: true }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'location Test creation' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: 'Home' }).click();
    await page1.getByRole('link', { name: 'Docs' }).click();
    //await page1.getByRole('link', { name: 'API' }).click();
    await page1.getByRole('link', { name: 'CLI' }).click();
    await page1.getByRole('link', { name: 'Visual (New)' }).click();
    await page1.getByRole('link', { name: 'Beta Testing' }).click();
    await page1.getByRole('button', { name: 'Sauce Trusted Connection' }).click();
    await page1.getByRole('link', { name: 'Getting Started' }).first().click();
    await page1.getByRole('button', { name: 'Sauce Connect 5 (New)' }).click();
    await page1.getByRole('link', { name: 'Overview', exact: true }).first().click();
    //await page1.getByRole('link', { name: 'Quickstart', exact: true }).click();
    await page1.getByRole('link', { name: 'Migrating', exact: true }).click();
    await page1.getByRole('link', { name: 'Installation', exact: true }).click();
    await page1.getByLabel('Docs sidebar').getByRole('link', { name: 'Linux' }).click();
    await page1.getByRole('link', { name: 'macOS', exact: true }).click();
    await page1.getByRole('link', { name: 'Windows', exact: true }).click();
    await page1.getByRole('button', { name: 'Web Apps' }).click();
    await page1.getByRole('button', { name: 'Web Apps' }).click();
    await page1.getByRole('button', { name: 'Test Results' }).click();
    await page1.getByRole('button', { name: 'Test Results' }).click();
    await page1.goto('https://docs.saucelabs.com/secure-connections/sauce-connect-5/installation/macos/');
    await page1.goto('https://docs.saucelabs.com/secure-connections/sauce-connect-5/installation/linux/');
    await page1.goto('https://docs.saucelabs.com/secure-connections/sauce-connect-5/installation/');
    await page1.goto('https://docs.saucelabs.com/secure-connections/sauce-connect-5/migrating/');
    await page1.goto('https://docs.saucelabs.com/secure-connections/sauce-connect-5/quickstart/');
    await page1.goto('https://docs.saucelabs.com/secure-connections/sauce-connect-5/');
    await page1.goto('https://docs.saucelabs.com/secure-connections/');
    await page1.goto('https://docs.saucelabs.com/testfairy/');
    await page1.goto('https://docs.saucelabs.com/visual-testing/');
    await page1.goto('https://docs.saucelabs.com/dev/cli/');
    await page1.goto('https://docs.saucelabs.com/dev/api/');
    await page1.goto('https://docs.saucelabs.com/overview/');
    await page1.goto('https://docs.saucelabs.com/basics/integrations-overview/#low-codeno-codemodel-based-test-case-generation');
    await page1.close();
    await page.getByRole('button', { name: 'Close' }).click();

    // await page.getByRole('link', { name: 'location Mobile App' }).click();
    //await page.getByRole('link', { name: 'location Sauce Mobile' }).click();
    // await page.getByRole('link', { name: 'location Sauce Cross-Browser' }).click();
  
    

    
    //await expect(page.locator('//*[@id="header_container"]/div[1]/div[2]/div')).toHaveText('Swag Labs')

    //await page.waitForTimeout(2000)


    await page.close()

}); 

test('username pass page',async({page}) => {

    await page.goto('https://saucedemo.com')
    
    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user")
    
    await page.locator("input[name='password']").click()
    await page.locator("input[name='password']").fill('secret_sauce')
    await page.locator('input[data-test="login-button"]').click();
    await expect(page.locator("input[name='password']")).toBeVisible();
    await page.close()
});

test('username page',async({page}) => {

    await page.goto('https://saucedemo.com')

    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user")
    await expect(page.locator("input[name='user-name']")).toBeVisible();

    await page.locator("input[name='password']").click()
    
    await page.locator('input[data-test="login-button"]').click();

    
    await page.pause()
   
});