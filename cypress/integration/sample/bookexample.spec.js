/// <reference types ='cypress'/>
describe('type of locators',()=>{
    it(('book application'),()=>{
        cy.visit('https://books.toscrape.com/index.html')
        cy.contains('Travel').click()

        cy.get('.image_container').its('length').should('eq',11)
    })
})