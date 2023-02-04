class CheckoutPage{
    
    constructor(page){
        this.page = page
        this.firstNameField = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.zipCode = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
        this.cancelButton = page.locator('#cancel')
    }

    async fillOutInformationForm(firstName, lastName, zipCode){
        await this.firstNameField.fill(firstName)
        await this.lastName.fill(lastName)
        await this.zipCode.fill(zipCode)
    }

    getContinueButton(){
        return this.continueButton
    }

    getCancelButton(){
        return this.cancelButton
    }
        
}

module.exports = {CheckoutPage}