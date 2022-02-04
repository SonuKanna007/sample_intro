/// <reference types ='cypress'/>
describe('type of locators',()=>{
    it('automation page',()=>{
        cy.visit('https://stqatools.com/demo/Windows.php')
        cy.contains('new Window')
           .invoke('removeAttr','target')
           .click()
           cy.url().should('contain','Windows')
           cy.get('a.navbar-brand').should('contain','Demo Test')
    })
    it('second test',()=>{
        cy.visit('https://stqatools.com/demo/Windows.php')
        cy.contains('new Tab')
          .invoke('removeAttr','target')
          .click()
          cy.visit('https://stqatools.com/demo/Windows.php')    
    })

    it.only('iframe',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function ($myframe){
            const frame = $myframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type('hello welcome')
        })
    })
})