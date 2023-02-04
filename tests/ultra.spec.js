// @ts-check
const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager');
const {UltraFlows} = require('../ultraFlows/UltraFlows')
const ultraFlows = new UltraFlows

test.describe('ultra purchase flow end2end test', ()=>{
  test('01 end to end flow', async({page, baseURL})=>{
    await ultraFlows.loginFlow(page, baseURL)
    const poManager = new POManager(page)
    const productsPage = poManager.getProductsPage()
    //await productsPage.addToCartProductByName('Test.allTheThings() T-Shirt (Red)')
    await productsPage.addCertainNumberOfProductsToCartRamdomly(3)
    await page.pause()
  })
})
