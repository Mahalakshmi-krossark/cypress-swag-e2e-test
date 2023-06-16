/// <reference types="cypress" />

import { LoginAction } from "../../actions/login_action";

describe('login page testing', () => {
    const login = new LoginAction()
   
    beforeEach(() => {
        cy.visit('/');
      
    })
  
    it('when user enter a Valid Username and password ', () => {       
      login.enterCredentials("standard_user","secret_sauce");
      cy.get('.title').should('have.text', 'Products');     
    })

    it('when user enter a Incorrect Username',() => {
       login.enterCredentials("Invalid_user","secret_sauce")
       cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user')
    })
    

    it('when user enter a Incorrect password',() => {
        login.enterCredentials("standard_user","Invalid_password")
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user')
     })

     it('when user login with locked account',() =>{
        login.enterCredentials("locked_out_user","secret_sauce")
        cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out')
     })   
})

    

      

