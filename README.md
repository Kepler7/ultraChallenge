# ultraChallenge

End to End testing suite template using:

- Playwright https://playwright.dev/
- Javascript 
- Allure [https://docs.qameta.io/allure/]

## 🤖 Starting up

1. Install the dependencies using `npm install` or `yarn install`
2. Check out the test by running the `ultra` command
3. After execution create allure report(locally) using `allure generate ./allure-results --clean`
4. Now open report: `allure open ./allure-report`
5. Have fun building something! to run test cases do: `npm run ultra`
6. Before running your test cases locally you need to add you credentials in the loginCredentialsData.json

## 📁 Structure

```sh
 |- data # data file/s to feed test cases
 |- pageObjects # Sets of pages for our applications
 |- tests # Here is the magic 🧙‍♂️
 |- ultraFlows # re-usable flows created
 |- utils # re-usable methods to be used in tests
```
