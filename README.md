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


### Test Cases Covered

login page tests
    - when user enters a valid username and password, it should login successfully 
    - when user enters a incorrect username, it should display error message 
    - when user enters a incorrect password, it should display error message 
    - when user logins with locked account credentials, it should display error message


 inventory page tests
    - after user successful login, all six products should be displayed 

    - check all products should have an Add To Cart button 

    - check after adding a item to the cart, it should update the badge count accordingly 

    - when user adds two items to the cart, it should update the badge count accordingly 

    - when user adds two items to the cart and then remove one item from the cart, it should updte the badge count accordingly 


  shopping cart page tests
    - when user adds a item into the cart, it should show the corresponding product information in the cart page properly 

    - when user adds item into the cart, it should show the product information like description, quantity & price in shopping cart page

    - when user removes items from the cart, it should be removed from the cart list

    - when adding multiple items into a shopping cart, it should show the details of the each item in the cart


  checkout page tests
    - user should receive error if user doesn't enter all neccessary customer information during checkout 

    - user added items and customer information should be displayed in the overview page after user checkout

    - when user enters all the neccessary information, user should be able to complete the checkout process successfully
    

