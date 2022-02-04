/// <reference types ='cypress'/>

//const { method } = require("cypress/types/bluebird")

describe('Rest API services',()=>{
   var baseURL='http://localhost:3000/'
    beforeEach(()=>{
        cy.request({
        method:'POST',
        url:'/api/reset' 
    })
    })

    it('Create a new board',()=>{
        cy.visit('/')
        cy.request({
            method:'POST',
            url:'/api/boards',
            body:{
                'name':'Create Cypress Sampless'
            }
        })
    })

    // it('updating a record',()=>{
    //     cy.visit('/')
    //     cy.request({
    //         method:'DELETE',
    //         url:'/api/boards/'

    //     })

    // })

})
