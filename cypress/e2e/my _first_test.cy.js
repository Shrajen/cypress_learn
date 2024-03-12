/// <reference types="cypress" />

it('google test', ()=>{
    cy.visit("https://google.com");
    cy.get('#APjFqb').type('bimesh rajbanshi linkedin {enter}');
    cy.contains('Change to English').click();
})