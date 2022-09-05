/// <reference types ="cypress" />

describe("My seventh Test Suite", function() {

    it('My seventh Test Case',function(){

        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handle alert
        cy.get("#alertbtn").click()
        cy.get("input[value='Confirm']").click()


        //handle child tab
        cy.get("#opentab").invoke("removeAttr","target").click()

        cy.url().should("include","rahulshettyacademy")

        cy.go("back")



        //handle web tables
        cy.get("tr td:nth-child(2)").each(($e1,index,$list) => {

            //cy.wrap($e1).text()

            const text = $e1.text()
            if(text.includes("Python")){

                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){

                   const priceText =  price.text()
                   expect(priceText).to.equal("25")
                })
            }


        })
        

    })

     

})