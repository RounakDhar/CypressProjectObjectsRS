/// <reference types ="cypress" />

/// <reference types ="cypress-iframe" />

import 'cypress-iframe'


describe("My Test-Framework Test Suite", function() {

    before(function() {
        // root-level hook
        // runs once before all tests
        cy.fixture("example").then(function(data){

                this.data = data
        })
        
      })
      

    it('My Test-Framework Test Case',function(){

        
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get(':nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .nav-link').click().debug()

        cy.get("h4.card-title").each(($el,index,$list)=>{

            if($el.text().includes("Blackberry")){

                cy.get("button.btn.btn-info").eq(index).click()
            }
        })
        



        cy.selectProduct("Blackberry")
        cy.selectProduct("Nokia Edge")



    })

     

})