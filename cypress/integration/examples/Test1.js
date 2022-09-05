/// <reference types ="cypress" />

describe("My First Test Suite", function() {

    it('My First Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)

        cy.get(".product").should("have.length",5)
            //or
        cy.get(".product:visible").should("have.length",4)
            //or
            //parent child chaining
        cy.get(".products").find(".product").should("have.length",4)

        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()
        //cy.contains("ADD TO CART")


            //without parent child chaining //just copy-paste from playground
        //cy.get(':nth-child(3) > .product-action > button')


        cy.get(".products").find(".product").each(($el,index, $list) => {
            const textVeg = $el.find("h4.product-name").text()
            if(textVeg.includes("Cashews")){

                //$el.find("button").click()
                cy.wrap($el).find("button").click()

            }
        })


        
        cy.get(".brand").then(function(logoelement){
            cy.log(logoelement.text())
        })
        
        const logo = cy.get(".brand")
        //cy.log(cy.get(".brand").text())
        //cy.log(logo.text())

    })

    // it('My First Second Case',function(){

        
    // })

})