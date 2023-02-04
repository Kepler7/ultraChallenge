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

    
}

module.exports = {ProductsPage}