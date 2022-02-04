/// <reference types ='cypress'/>
describe('type of locators',()=>{
    it('ngx application',()=>{
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-name="menu-2"]').click()
        cy.contains('nb-card','Basic form')
            .find('nb-checkbox')
           .click()
           .find('.custom-checkbox')
           .invoke('attr','class')
            .should('contain','checked')
         
        cy.contains('nb-card','Using the Grid')
            .find('[type="radio"]').then(radioBtns =>{
              cy.wrap(radioBtns)
              .first()
              .check({force:true})
              .should('be.checked')

              cy.wrap(radioBtns)
              .last()
              .check({force:true})
              .should('be.disabled')
          
          })    

        
    })
    it('handle listbox',()=>{

        cy.visit('http://localhost:4200/')
        cy.get('nav nb-select').click() 
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain','Dark') 


    
    cy.get('nav nb-select').then(dropdown =>{
        cy.wrap(dropdown).click()
        cy.get('.options-list nb-option').each((listitem,index)=>{
            const itemText=listitem.text().trim()
            cy.wrap(listitem).click()
            cy.wrap(dropdown).should('contain',itemText)
            if(index<3){
                cy.wrap(dropdown).click()
            }

        })
    })
    })

    it('handling tables',()=>{
        cy.visit('http://localhost:4200/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('[data-name="menu-2"]').click()
        cy.get('tbody').contains('tr','John').then(tablerow=>{
            cy.wrap(tablerow).find(".nb-edit").click()
            cy.wrap(tablerow).find('[placeholder="Age"]').clear()
            cy.wrap(tablerow).find('[placeholder="Age"]').type('30')
            cy.wrap(tablerow).find('.nb-checkmark').click()
            cy.wrap(tablerow).find('td').eq('6').should('contain','30') 
  
        })
    
    
    })  
    it.only('Add NEw user',()=>{
        cy.visit('http://localhost:4200/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get('[data-name="menu-2"]').click()
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tablerow=>{
            cy.wrap(tablerow).find('[placeholder="First Name"]').type('Test')
            cy.wrap(tablerow).find('[placeholder="Last Name"]').type('Training')
            cy.wrap(tablerow).find('.nb-checkmark').click()

        })
        cy.get('tbody tr').first().find('td').then(tablecol=>{
            cy.get(tablecol).eq(2).should('contain','Test')
            cy.get(tablecol).eq(3).should('contain','Training')
        })
    })
})
