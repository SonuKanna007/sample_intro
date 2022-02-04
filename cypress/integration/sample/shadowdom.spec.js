/// <reference types ='cypress'/>
describe('type of locators',()=>{
    it('shadow application',()=>{
        cy.visit('https://radogado.github.io/shadow-dom-demo/')
       cy.get('#app').shadow().find('#container')
       const strwe="hello Welcome"
        cy.get('#app').shadow().find('#container').then((label)=>{
            const strVa = label.text()
            cy.log('DOM Label'+strVa)
        })

        cy.get('#app').shadow().find('#container')
          .invoke('text').as('textVal')
          
          cy.get('@textVal').then(str=>{
              cy.log('Using alias'+str)
          })
       cy.log('global variable'+strwe)        
    })
})