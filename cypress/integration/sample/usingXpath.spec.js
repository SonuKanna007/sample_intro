/// <reference types ='cypress'/>

//import cypress = require("cypress")

describe('Using Xpath',()=>{
    it('Test Xpath',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
       // cy.xpath("//input[@id='username']").type('tomsmith')
       cy.get('#username').type(Cypress.env('username'))
    })
})