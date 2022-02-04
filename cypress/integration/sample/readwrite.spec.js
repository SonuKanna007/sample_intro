/// <reference types ='cypress'/>
describe('READ WRITE FILE',()=>{
    it('TEst write file',()=>{
        cy.writeFile('sample.txt','welcome to cypress',{flag:'a+'})
        
    })
    it('TEst read file',()=>{
        cy.readFile('sample.txt').should('contain','Hello World')
    })


    it.only('Read from json file', ()=>{
       // cy.writeFile('userData.json',{username:'tomsmith',password:'SuperSecretPassword!'})
        cy.readFile('userData.json')
           .its('username')
           .should('eq','tomsmith')

    })
    it('Write into JSON FILE',()=>{
        cy.writeFile('empData.json',{name:'Sonu',email:'sonu@example.cm'})
    })
    it('Verify browser content',()=>{
        cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
        cy.document().its('contentType').should('eq','text/html')
        cy.document().should('have.a.property','charset').and('eq','UTF-8')
    })

    it('upload a document',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('sample.txt')
        cy.get('#file-submit').click()
    })
})