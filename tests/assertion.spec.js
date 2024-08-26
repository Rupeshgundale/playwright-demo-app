import {test, expect, Browser, Page} from '@playwright/test'

test('assertions Demo', async({page}) => {

    await page.goto('https://saucedemo.com/')
    await page.locator("input[name='user-name']").click()
    await page.locator("input[name='user-name']").fill("standard_user")
    
    await page.locator("input[name='password']").click()
    await page.locator("input[name='password']").fill('secret_sauce')
    await page.locator('input[data-test="login-button"]').click()
    

    //assertion
    // check element present or not
    await expect(page.locator('data-test=secondary-header')).toHaveCount(1)

   
    await page.pause()
})