const {expect} = require('@playwright/test')
const{POManager} = require('../pageObjects/POManager')
const dataSet = JSON.parse(JSON.stringify(require('../data/loginCredentialsData.json')))

class UltraFlows{

    async loginFlow(page, baseURL){
        const poManager = new POManager(page)
        const loginPage = poManager.getLoginPage()
        await loginPage.goToLoginPage(baseURL)
        await Promise.all(
        [
            page.waitForNavigation(), 
            await loginPage.validLogin(dataSet[0].username, dataSet[0].password)
        ])
        
    }
}

module.exports = {UltraFlows}
