/// <reference types ='cypress'/>
describe('Screenshot',()=>{
    it('TEst screenshot',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.screenshot({capture:'fullPage'})
    })
    it('screenshot 2',()=>{
        cy.visit('http://www.example.com/')
        cy.get('h1').screenshot()
    })
})