/// <reference types="cypress" />

import { LoginAction } from "../../actions/login_action"; 
   
    describe('inventory page tests', () => {
        const login = new LoginAction();

        beforeEach(() => {
            login.enterCredentials("standard_user", "secret_sauce")
        });
    

        it('after user successful login, all six products should be displayed', () => {
            cy.get('.inventory_item_name').should('have.length', 6);
        });

        it('check all products should have an Add To Cart button', () => {
            cy.get('[data-test^=add-to-cart]').should('have.length', 6);
        }); 

        it('check after adding a item to the cart, it should update the badge count accordingly', () => {
            cy.contains('.inventory_item','Sauce Labs Backpack').contains('Add to cart').click();          
            cy.get('.shopping_cart_badge').should('contain.text', '1');
            cy.get('[data-test^=add-to-cart]').should('have.length', 5);
            cy.get('[data-test^=remove]').should('have.length', 1);
        });

        it('when user adds two items to the cart, it should update the badge count accordingly', () => {
            cy.contains('.inventory_item','Sauce Labs Backpack').contains('Add to cart').click();
            cy.contains('.inventory_item','Sauce Labs Bike Light').contains('Add to cart').click();
            cy.get('.shopping_cart_badge').should('contain.text', '2');
        });

        it('when user adds two items to the cart and then remove one item from the cart, it should updte the badge count accordingly', () => {
            cy.contains('.inventory_item','Sauce Labs Backpack').contains('Add to cart').click();
            cy.contains('.inventory_item','Sauce Labs Bike Light').contains('Add to cart').click();
            cy.contains('.inventory_item','Sauce Labs Backpack').contains('Remove').click();
            cy.get('.shopping_cart_badge').should('contain.text', '1');
            cy.get('[data-test^=add-to-cart]').should('have.length', 5);
            cy.get('[data-test^=remove]').should('have.length', 1);
        });      
});