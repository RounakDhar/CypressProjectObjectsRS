/// <reference types ="cypress" />

//const { method } = require("cypress/types/bluebird")

describe('My First Test Suite',function(){

    it('My First Test Case',function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
        
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        
        
        }, {
            
             statusCode: 200,
             body: [{
                    "book_name": "Learn Appium Automation with Java",
                    "isbn": "RS218",
                    "aisle": "111"
                }],
        
         }).as('bookretrievals')

         cy.get('button.btn.btn-primary').click()
         cy.wait('@bookretrievals').should(({request,response})=>{

            cy.get('tr').should('have.length', response.body.length+1)
            

         })
         cy.get('p').should('have.text','Oops only 1 Book available')
    })
})