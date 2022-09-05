/// <reference types ="cypress" />

describe("My Fifth Test Suite", function() {

    it('My Fifth Test Case',function(){

        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //checkbox
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
        cy.get("input[type='checkbox']").check(["option2","option3"])


        //radiobutton
        cy.get("input[value='radio2']").check().should("be.checked")
    })

     

})