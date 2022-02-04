/// <reference types ='cypress'/>
describe('type of locators',()=>{
    it('Mouse click',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get('.form-control').type('phone')
        cy.get('.input-group-btn').trigger('click')
    })
    it('Mouse Move',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get(':nth-child(3)>.dropdown-toggle')
          .invoke('show')
          .should('be.visible')
          .trigger('mouseover')
        cy.get('ul.nav li:nth-child(3)>div')
        .invoke('show')
        .should('be.visible')
        cy.get('ul.nav li:nth-child(3)> div ul li:nth-child(2) ').click()
    })
    it.only('right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.contains('right click me').rightclick()
        cy.get('.context-menu-icon-copy').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.be.equal('clicked: copy')
        })


    })
    it.only('double click',()=>{
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.contains('Copy Text').dblclick()
    })
})