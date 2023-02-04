// @ts-check
const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager');
const {UltraFlows} = require('../ultraFlows/UltraFlows');
const { Utils } = require('../utils/Utils');
const ultraFlows = new UltraFlows

test.describe('ultra purchase flow end2end test', ()=>{
  test('01 purchase single product', async({page, baseURL})=>{
    await ultraFlows.loginFlow(page, baseURL)
    const poManager = new POManager(page)
    const productsPage = poManager.getProductsPage()
    await productsPage.addToCartProductByName('Test.allTheThings() T-Shirt (Red)')
    await productsPage.getCartIcon().click()
    const yourCartPage = poManager.getYourCartPage()
    await yourCartPage.getCheckoutButton().click()
    const checkoutPage = poManager.getCheckoutPage()
    const utils = new Utils(page)
    checkoutPage.fillOutInformationForm(utils.generateName(), utils.generateLastName(), utils.generateZipCode())
    await checkoutPage.getContinueButton().click()
    const overviewPage = poManager.getOverviewPage()
    await overviewPage.getFinishButton().click()
    expect(page.locator('.complete-header')).toContainText('THANK YOU FOR YOUR ORDER')
  })
  test('02 purchase more than one product', async({page, baseURL})=>{
    await ultraFlows.loginFlow(page, baseURL)
    const poManager = new POManager(page)
    const productsPage = poManager.getProductsPage()
    await productsPage.addCertainNumberOfProductsToCartRamdomly(3)
    await productsPage.getCartIcon().click()
    const yourCartPage = poManager.getYourCartPage()
    await yourCartPage.getCheckoutButton().click()
    const checkoutPage = poManager.getCheckoutPage()
    const utils = new Utils(page)
    checkoutPage.fillOutInformationForm(utils.generateName(), utils.generateLastName(), utils.generateZipCode())
    await checkoutPage.getContinueButton().click()
    const overviewPage = poManager.getOverviewPage()
    await overviewPage.getFinishButton().click()
    expect(page.locator('.complete-header')).toContainText('THANK YOU FOR YOUR ORDER')
  })
})
