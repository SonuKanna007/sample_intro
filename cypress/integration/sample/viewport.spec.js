/// <reference types ='cypress'/>
describe('type of locators',()=>{
    it('view port page',()=>{
        //cy.viewport(1280,720)
        cy.viewport('iphone-8',"landscape")
        cy.wait(3000)
        cy.visit('http://www.example.com/')

    })
})