const {Utils} = require('../utils/Utils')

class ProductsPage{
    
    constructor(page){
        this.page = page
        this.productsNames = page.locator('.inventory_item_name')
       
    }

    async addToCartProductByName(name){
        const productNames = this.getProductsNames()
        var count = await productNames.count()
        for(var c = 0; c < count; c++){
            let currentName = await productNames.nth(c).textContent()
            let currentNameLower = currentName.toLowerCase()
            if( currentNameLower === name.toLowerCase()){
                let currentNameWithDash = currentNameLower.replaceAll(" ", "-")
                //await this.page.locator(`#add-to-cart-${currentNameWithDash}`).click()
                await this.page.locator(`button[id="add-to-cart-${currentNameWithDash}"]`).click()
                break
            }
            else{
                if( currentNameLower != name.toLowerCase() && c == count - 1){
                    throw Error(`${name} Not Found!!`)
                }
            }
        }
    }

    getProductsNames(){
        return this.productsNames
    }

    async addCertainNumberOfProductsToCartRamdomly(quantity){
        const utils = new Utils(this.page)
        const productNames = this.getProductsNames()
        var count  = await productNames.count()
        var productNamesArray = []
        for (var p = 0; p < count; p++){
            productNamesArray.push(await productNames.nth(p).textContent())
        }
        if(quantity > count){
            throw Error(`${quantity} Items you want to add however there are only ${count} available`)
        }
        else{
            for(var q = 1; q <= quantity; q++){
                let randomProduct = utils.getRandomItem(productNamesArray)
                await new Promise(r => setTimeout(r, 1000));
                await this.addToCartProductByName(randomProduct)
                let index = productNamesArray.indexOf(randomProduct)
                productNamesArray.splice(index, 1)
            }
        }
    }

    
}

module.exports = {ProductsPage}