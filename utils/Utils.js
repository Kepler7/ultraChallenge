class Utils{
    constructor(page){
        this.page = page
    }

    getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
    
        // get random item
        const item = arr[randomIndex];
    
        return item;
    }

    getRandomString(){
        return Math.random().toString(10).slice(2)
    }

    generateName(){
        return `Automation${this.getRandomString()}`
    }

    generateLastName(){
        return `Last${this.getRandomString()}`
    }

    generateZipCode(){
        return ("" + Math.random()).substring(2,7)
    }
}
module.exports = { Utils }