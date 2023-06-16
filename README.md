# Swag Labs Cypress Automation Testing

### Running Locally

### Install Node

Before running locally you will need to have node installed. An easy way to install node while having the ability to change versions is to use [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) for your OS (There is a [version specifically for Windows](https://github.com/coreybutler/nvm-windows) as well). Please use NodeJs version minimum 14.12.0.


### Steps To Run E2E Tests

Run the command `npm install`

Then, run the command `npm run cypress:open`

Then, you will be prompted with cypress window. You will need to click on `E2E Testing` option.

Then, choose `chrome` browser (Or any browser i.e Firefox, Electron, Edge) and click on `Start E2E Testing in Chrome`.

Then, cypress testing explorer will open up in browser and you can select spec files and start the E2E testing.


Note: If you want to run all the tests at once, you can run the following command: `npm run cypress:run`. It will run all the tests and display the result in command prompt and test vedios and screenshots will be uploaded to the screenshots and vedios folder in your project directory.