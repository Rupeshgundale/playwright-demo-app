const { test, expect} = require('@playwright/test');

test ('Food Market Hub Home page', async ({page})=>{

await page.goto('https://web.foodmarkethub.com/login')



const pageTitle = page.title();

 console.log('page title is:', pageTitle);


 await expect (page).toHaveTitle('Food Market Hub');

 const pageURL = page.title();
 page.pause();

 console.log('page url is:', pageURL);

 await expect (page).toHaveURL('https://web.foodmarkethub.com/login');

 await page.close();



})

test ('Sauce lab login crd page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await  page.locator('[placeholder="Username"]').click()
    await  page.locator('[placeholder="Username"]').fill("")
    await  page.locator('[placeholder="Password"]').click()
    await  page.locator('[placeholder="Password"]').fill("secret_sauce")

    await  expect(page.locator('[class="error-message-container"]')).toBeVisible()
 
    await  page.locator('[data-test="login-button"]').click()
    await  page.pause();
    
})