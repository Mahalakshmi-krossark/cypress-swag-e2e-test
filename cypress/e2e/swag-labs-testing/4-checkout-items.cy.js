/// <reference types='cypress'/>

import { LoginAction } from "../../actions/login_action";
import {CheckoutPersonalInformation} from "../../actions/checkout_personal_information";

describe("checkout page tests", () => {
    const login = new LoginAction();
    const checkoutPersonalInformation = new CheckoutPersonalInformation();
  
    beforeEach(() => {
      // Login with vali credentials and adding 2 items to cart here.
         login.enterCredentials("standard_user", "secret_sauce");
         cy.contains(".inventory_item", "Sauce Labs Backpack").contains("Add to cart").click();
         cy.contains(".inventory_item", "Sauce Labs Bolt T-Shirt").contains("Add to cart").click();
         cy.get(".shopping_cart_badge").click();
         cy.get('[data-test="checkout"]').click();
        });

     
        it("user should receive error if user doesn't enter all neccessary customer information during checkout", () => {
            checkoutPersonalInformation.enterPersonalInformation("", "", "");            
            checkoutPersonalInformation.error().should('be.visible');
        });

        it("user added items and customer information should be displayed in the overview page after user checkout", () => {
            checkoutPersonalInformation.enterPersonalInformation("Maha","Lakshmi","600020");            
            cy.get('.inventory_item_name').should('have.length', 2);
        });        

        it("when user enters all the neccessary information, user should be able to complete the checkout process successfully", () => {
            checkoutPersonalInformation.enterPersonalInformation("Maha","Lakshmi","600020");            
           
            cy.get('[data-test="finish"]').click();
            cy.get(".complete-header").should('contain','Thank you for your order');
            cy.get(".complete-text").should('contain','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
            cy.get('[data-test="back-to-products"]').should('be.visible');
        }); 

})