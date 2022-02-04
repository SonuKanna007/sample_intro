/// <reference types ='cypress'/>
describe('type of locators',()=>{
    it('automation page',()=>{
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts') 
      cy.contains('Click for JS Alert').click()
      cy.on('window:alert',str=>{
          expect(str).equals('I am a JS Alert')
      })

      cy.contains('Click for JS Confirm').click()
      cy.on('window:confirm',str=>{
          expect(str).to.be.equals('I am a JS Confirm')
      })
      cy.get('#result').should('contain','You clicked: Ok')
      
    })
})