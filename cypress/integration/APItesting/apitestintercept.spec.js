/// <reference types ='cypress'/>

//const { method } = require("cypress/types/bluebird")

describe('Rest API services1',()=>{
    it('Create a new board',()=>{
        cy.intercept({
            method:'GET',
            url:'/api/boards'
        }).as('boards')
        cy.visit('/')
        cy.wait('@boards')
        .its('response.statusCode')
        .should('eq',200)
        cy.get('[data-cy=board-item]').should('have.length',5)



    })

    // it('return empty one',()=>{
    //     cy.intercept({
    //         method:'GET',
    //         url:'/api/boards'
    //     },{
    //         body:[]
    //     }).as('boards')
    //     cy.visit('/')
    // })

})   