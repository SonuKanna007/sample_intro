/// <reference types ='cypress'/>
describe('Rest API services',()=>{
    const baseURL='https://jsonplaceholder.typicode.com/'
    it('API Testing',()=>{
        cy.request(baseURL.concat('users')).as('userResp')
        cy.get('@userResp').its('status').should('equals',200)


    })

    it('GET user name',()=>{
        cy.request('GET','https://reqres.in/api/users').then((Response)=>{
            expect(Response.body.data[0].first_name).equal('George')
            expect(Response.body.data).to.have.length(6)
         

        })
    })

    it('Post method',()=>{
        var userRec={
            name:'testuser',
            job:'developer'
        }
        cy.request('POST','https://reqres.in/api/users',userRec).then((Response)=>{
            expect(Response.status).equal(201)
            expect(Response.body.name).equal('testuser')
        })

        cy.request('POST','https://reqres.in/api/users',userRec)
          .its('body')
          .should('include',{name:'testuser'})

    })
    
    it('update User',()=>{
        var user1={
            name:'testuser',
            job:'TestLead'
        }
        cy.request('PUT','https://reqres.in/api/users/2',user1).then((Response)=>{
            expect(Response.status).equals(200)
            expect(Response.body.name).equal(user1.name)
            expect(Response.body.job).equal(user1.job)

        })
    })

    it('delete user',()=>{
          cy.request('DELETE','https://reqres.in/api/users/2').then((Response)=>{
              expect(Response.status).equal(204)
          })
    })

})