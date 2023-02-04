class YourCartPage{
    
    constructor(page){
        this.page = page
        this.checkoutButton = page.locator('#checkout')
        this.continueShoppingButton = page.locator('#continue-shopping')
    }

    getCheckoutButton(){
        return this.checkoutButton
    }

    getContinueShoppingButton(){
        return this.continueShoppingButton
    }

    
}

module.exports = {YourCartPage}