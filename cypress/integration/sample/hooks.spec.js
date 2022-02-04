/// <reference types ='cypress'/>
describe('type of locators',()=>{
    before('before all tests',()=>{
        cy.log('Before all Tests')
    })
    beforeEach('before each test',()=>{
        cy.log('Before Each Tests')
    })
    it('Test1',()=>{
        cy.log('Execution Task 1')
    })
    it('Test2',()=>{
        cy.log('Execution Task 2')
    })
    after('before all tests',()=>{
        cy.log('after all Tests')
    })
    afterEach('before each test',()=>{
        cy.log('after Each Tests')
    })


})