import {test, expect, Browser, Page} from '@playwright/test'

test('assertions Demo', async({page}) => {

    await page.goto('https://saucedemo.com')
    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user")
    await page.locator('input[data-test="login-button"]').click();
    await page.pause()
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Password is required')
    
    // await page.locator("input[name='password']").click()

    //assertion
    // check element present or not

    // await expect(page.locator("input[name='password']")).toHaveCount(1)

     
    // if( await page.$('[class="error-button"]')){
    //     await page.locator('[class="error-button"]').click()
    // }
    // await page.locator('input[data-test="login-button"]').click();
    
    //check element hidden or visible
    //await expect(page.locator("")).toBeVisible()
    //await expect(page.locator("")).toBeHidden()

    //check element enabled or disabled
   // await expect(page.locator("")).toBeEnabled()
   // await expect(page.locator("")).toBeDisabled()
    
});
