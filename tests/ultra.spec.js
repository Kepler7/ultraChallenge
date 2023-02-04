// @ts-check
const { test, expect } = require('@playwright/test');
const {UltraFlows} = require('../ultraFlows/UltraFlows')
const ultraFlows = new UltraFlows

test.describe('ultra purchase flow end2end test', ()=>{
  test('01 end to end flow', async({page, baseURL})=>{
    await ultraFlows.loginFlow(page, baseURL)
    await page.pause()
  })
})
