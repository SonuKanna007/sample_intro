/// <reference types ='cypress'/>
describe('accessibiity test',()=>{
    it('a11y test case',()=>{

    
    cy.visit('https://demo.opencart.com/')
    cy.injectAxe()
    cy.checkA11y()
    cy.checkA11y({
        exclude:['.input-group-btn > .btn'],
    })
    })
    
})