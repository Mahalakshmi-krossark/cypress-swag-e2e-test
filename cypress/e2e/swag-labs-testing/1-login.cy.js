/// <reference types="cypress" />

import { LoginAction } from "../../actions/login_action";

describe('login page tests', () => {
    const login = new LoginAction();
   
    beforeEach(() => {
        cy.visit('/');      
    })
  
    it('when user enters a valid username and password, it should login successfully', () => {       
      login.enterCredentials("standard_user","secret_sauce");
      cy.get('.title').should('have.text', 'Products');     
    })

    it('when user enters a incorrect username, it should display error message', () => {
       login.enterCredentials("Invalid_user","secret_sauce");
       cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user');
    })
    

    it('when user enters a incorrect password, it should display error message', () => {
        login.enterCredentials("standard_user","Invalid_password");
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user');
     })

     it('when user logins with locked account credentials, it should display error message', () => {
        login.enterCredentials("locked_out_user","secret_sauce");
        cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out');
     })
})

    

      

