/// <reference types ="cypress" />

describe("My Ninth Test Suite", function() {

    it('My Ninth Test Case',function(){

        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handle child tab-switch tab without removing target attribute
        cy.get("#opentab").then(function(el){

            const url = el.prop("href")
            cy.log(url)
            cy.visit(url)
        })

            //handle child window
    //    cy.get("#openwindow")
    //    cy.url().should("include","qaclickacademy")
        

    })

     

})