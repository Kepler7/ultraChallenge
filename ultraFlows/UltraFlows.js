const {expect, test} = require('@playwright/test')
const{POManager} = require('../pageObjects/POManager')
const { Utils } = require('../utils/Utils')
const dataSet = JSON.parse(JSON.stringify(require('../data/loginCredentialsData.json')))
let username = process.env.ULTRA_USER || dataSet[0].username
let password = process.env.ULTRA_PASSWORD || dataSet[0].password

class UltraFlows{

    async loginFlow(page, baseURL){
        const poManager = new POManager(page)
        const loginPage = poManager.getLoginPage()
        await loginPage.goToLoginPage(baseURL)
        await Promise.all(
        [
            page.waitForNavigation(), 
            await loginPage.validLogin(username, password)
        ])   
    }
}

module.exports = {UltraFlows}
