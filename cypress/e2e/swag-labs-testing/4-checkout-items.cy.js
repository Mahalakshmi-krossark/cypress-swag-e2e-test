/// <reference types='cypress'/>

import { LoginAction } from "../../actions/login_action";
import {CheckoutPersonalInformation} from "../../actions/checkout_personal_information";

describe("shopping cart tests", () => {
    const login = new LoginAction();
    const checkoutPersonalInformation = new CheckoutPersonalInformation();
  
    beforeEach(() => {
      login.enterCredentials("standard_user", "secret_sauce");
      cy.contains(".inventory_item", "Sauce Labs Backpack").contains("Add to cart").click();
      cy.contains(".inventory_item", "Sauce Labs Bolt T-Shirt").contains("Add to cart").click();
      cy.get(".shopping_cart_badge").click();
    });
  
describe('When user checking out items in the cart', () => {

        beforeEach(() => {
            cy.get('[data-test="checkout"]').click()
        })

        it("all customer information is mandatory", () => {
            checkoutPersonalInformation.enterPersonalInformation("", "", "");            
            checkoutPersonalInformation.error().should('be.visible');
        })

        it("the items in the cart should be shown in the overview", () => {
            checkoutPersonalInformation.enterPersonalInformation("Maha","Lakshmi","600020");            
            cy.get('.inventory_item_name').should('have.length',2);
        })        

        it("Checkout process should be completed successfully", () => {
            checkoutPersonalInformation.enterPersonalInformation("Maha","Lakshmi","600020");            
           
            cy.get('[data-test="finish"]').click();
            cy.get(".complete-header").should('contain','Thank you for your order');
            cy.get(".complete-text").should('contain','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
            cy.get('[data-test="back-to-products"]').should('be.visible');
        })        

    })

})