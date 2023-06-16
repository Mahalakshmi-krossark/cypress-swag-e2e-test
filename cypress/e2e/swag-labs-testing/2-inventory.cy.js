/// <reference types="cypress" />

import { LoginAction } from "../../actions/login_action";

describe('When browsing the product catalog', () => {

    const login = new LoginAction()

    beforeEach(() => {
        login.enterCredentials("standard_user", "secret_sauce")
    });

    describe('inventory-page-tests', () => {
        it('after successfull login check whether all six products should be displayed', () => {
            cy.get('.inventory_item_name').should('have.length', 6)
        });
    }); 

    describe('after displaying all products it should verify whether customer should be able to add any item to the cart', () => {
        it('in each product should have an Add To Cart button', () => {
            cy.get('[data-test^=add-to-cart]').should('have.length', 6)
        }); 

        it('check after adding a item to the cart it should update the count into the cart ', () => {
            cy.contains('.inventory_item','Sauce Labs Backpack').contains('Add to cart').click();          
            cy.get('.shopping_cart_badge').should('contain.text','1')
            cy.get('[data-test^=add-to-cart]').should('have.length',5)
            cy.get('[data-test^=remove]').should('have.length',1)
        });

        it('user adding two items to the cart', () => {
            cy.contains('.inventory_item','Sauce Labs Backpack').contains('Add to cart').click()
            cy.contains('.inventory_item','Sauce Labs Bike Light').contains('Add to cart').click()
            cy.get('.shopping_cart_badge').should('contain.text','2')
        });

        it('after adding two items to the cart then removing one item from the cart', () => {
            cy.contains('.inventory_item','Sauce Labs Backpack').contains('Add to cart').click()
            cy.contains('.inventory_item','Sauce Labs Bike Light').contains('Add to cart').click()
            cy.contains('.inventory_item','Sauce Labs Backpack').contains('Remove').click()
            cy.get('.shopping_cart_badge').should('contain.text','1')
            cy.get('[data-test^=add-to-cart]').should('have.length',5)
            cy.get('[data-test^=remove]').should('have.length',1)
        });      
    });

});