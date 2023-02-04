class LoginPage{
    
    constructor(page){
        this.page = page
        this.userName = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.signInbutton= page.locator("#login-button");
    }

    async validLogin(username, password){
        await this.userName.fill(username)
        await this.passwordField.fill(password)
        await this.signInbutton.click()
    }

    async goToLoginPage(baseURL){
        await this.page.goto(baseURL);
    }
}

module.exports = {LoginPage}