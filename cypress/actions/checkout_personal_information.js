export class CheckoutPersonalInformation {
    
    enterPersonalInformation(firstName, lastName, postCode) {
        if (firstName) 
            cy.get('[data-test="firstName"]').type(firstName);
        
        if (lastName) 
            cy.get('[data-test="lastName"]').type(lastName);
        
        if (postCode) 
            cy.get('[data-test="postalCode"]').type(postCode);
        
        cy.get('[data-test="continue"]').click();
    }

    error() {
        return cy.get('[data-test="error"]');
    }
}