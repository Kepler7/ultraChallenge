const { CheckoutPage } = require('./CheckoutPage');
const {LoginPage} = require('./LoginPage');
const { OverviewPage } = require('./OverviewPage');
const {ProductsPage} = require('./ProductsPage')
const {YourCartPage} = require('./YourCartPage')

class POManager{

    constructor(page){
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.productsPage = new ProductsPage(this.page)
        this.yourCartPage = new YourCartPage(this.page)
        this.checkoutPage = new CheckoutPage(this.page)
        this.overviewPage = new OverviewPage(this.page)
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getProductsPage()
    {
        return this.productsPage;
    }

    getYourCartPage()
    {
        return this.yourCartPage;
    }

    getCheckoutPage()
    {
        return this.checkoutPage;
    }

    getOverviewPage()
    {
        return this.overviewPage;
    }
}

module.exports = {POManager}