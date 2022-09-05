/// <reference types ="cypress" />

import HomePage     from '../../../PageObjects/HomePage'
import ProductPage  from '../../../PageObjects/ProductPage'


import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage()
const productPage = new ProductPage()

let name

   Given('I Open E-Commerce Page',function() {
    //Given('I Open E-Commerce Page',()=>{

    //before each test
    cy.visit(Cypress.env('url')+"/angularpractice/")
    cy.wait(5000)

    })

    //1st scenario

    When('I Add Items to Cart',function() {

        homePage.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        productPage.checkoutButton().click()
    })

    And('Validate the Total Prices',function() {

        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
            const amount = $el.text()
            var res = amount.split(" ")
            res=res[1].trim()
            sum=Number(sum)+Number(res)
        }).then(function(){
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
    })

    Then('Select the Country Submit and Verify Thank You',function()  {

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get("#checkbox2").click({force: true})
        cy.get("input[type='submit']").click()
        cy.get(".alert").then(function(element){

            const actualText = element.text()
            
            expect(actualText.includes("Success")).to.be.true
        })
        
    })

        // 2nd  Scenario

    When ('I Fill the Form Details',function(dataTable){ 

        name = dataTable.rawTable[1][0]

        homePage.getEditBox().type(dataTable.rawTable[1][0])
        homePage.getGender().select(dataTable.rawTable[1][1])

    })

    Then ('Validate the Forms Behaviour',function(){
        homePage.getTwoWayDataBinding.should("have.value",name)
        homePage.getEditBox().should("have.attr","minlength",2)
        homePage.getEntrepreneaur().should("be.disabled")
        Cypress.config('defaultCommandTimeout',8000)

    })

    And ('Select the Shop Page',function(){

         homePage.getShopTab().click()

    })