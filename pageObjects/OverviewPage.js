class OverviewPage{
    
    constructor(page){
        this.page = page
        this.finishButton = page.locator('#finish')
        this.cancelButton = page.locator('#cancel')
    }

   getFinishButton(){
    return this.finishButton
   }

   getCancelButton(){
    return this.cancelButton
   }
        
}

module.exports = {OverviewPage}