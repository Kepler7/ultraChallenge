const {LoginPage} = require('./LoginPage');
const {ProductsPage} = require('./ProductsPage')

class POManager{

    constructor(page){
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.productsPage = new ProductsPage(this.page)
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getProductsPage()
    {
        return this.productsPage;
    }
}

module.exports = {POManager}