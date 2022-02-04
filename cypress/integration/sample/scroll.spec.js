/// <reference types ='cypress'/>
describe('Scroll',()=>{
    it('TEst scroll',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get('.form-control').type('phone')
        cy.get('.input-group-btn').click()
        cy.get('.image').scrollIntoView()
       // cy.get('.image').screenshot()
        cy.get('[placeholder="Search"]').scrollIntoView()
        cy.get('[placeholder="Search"]').clear()
    })
})