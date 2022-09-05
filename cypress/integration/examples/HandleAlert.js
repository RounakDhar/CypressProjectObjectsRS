/// <reference types ="cypress" />

describe("My sixth Test Suite", function() {

    it('My sixth Test Case',function(){

        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handle alert
        cy.get("#alertbtn").click()
        cy.get("input[value='Confirm']").click()


        //window alert
        cy.on("window:alert",(str)=> {

            //Mocha
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

        //window confirm
        cy.on("window:confirm",(str)=> {

            //Mocha
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

        cy.get("#opentab").invoke("removeAttr","target").click()
        

    })

     

})