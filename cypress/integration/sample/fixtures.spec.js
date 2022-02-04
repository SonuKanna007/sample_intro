/// <reference types ='cypress'/>
describe('type of locators',()=>{
    it.skip('fixtures check',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')

    })
    it('fixtures check 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture('user').then( (user) =>{
            const strname=user.username
            const pwd = user.password
            cy.get('#username').type(strname)
            cy.get('#password').type(pwd)
            
        })
        cy.get('.radius').click()
    })
    it.only('USing custom command',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.login('tomsmith','SuperSecretPassword!')

        cy.get('.radius').click()
    })
    
})