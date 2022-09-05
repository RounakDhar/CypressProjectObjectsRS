/// <reference types ="cypress" />

describe("My Test-Framework Test Suite", function() {

    before(function () {
        // root-level hook
        // runs once before all tests
        cy.fixture("example").then(function(data){

                this.data = data
        })
        
      })
      

    it('My Test-Framework Test Case',function() {

        
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        
        //cy.get("form input.form-control :nth-child(1)").type("Test")
        //cy.get("input[name='name']:nth-child(2)").type("Test")
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)

        //cy.get("select").select("Female")
        cy.get("select").select(this.data.gender)
        
        

    })

     

})