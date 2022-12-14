/// <reference types ="cypress" />

describe("My Third Test Suite", function() {

    it('My Third Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)

        console.log("Hello World")

        //handle alias
        cy.get(".products").as("productLocator")
        

        cy.get("@productLocator").find(".product").each(($el,index, $list) => {
            const textVeg = $el.find("h4.product-name").text()
            if(textVeg.includes("Cashews")){

                cy.wrap($el).find("button").click()

            }
        })

        cy.get('.cart-icon > img').click()

        //cy.get('.search-keyword').click()
        cy.contains("PROCEED TO CHECKOUT").click()

        //cy.get(':nth-child(14)').click()
        cy.contains("Place Order").click()


        

    })

     

})