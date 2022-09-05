/// <reference types ="cypress" />

/// <reference types ="cypress-iframe" />

import HomePage     from '../PageObjects/HomePage'
import ProductPage  from '../PageObjects/ProductPage'

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

        Cypress.config("defaultCommandTimeout",8000)

        const homePage = new HomePage()
        const productPage = new ProductPage()

        
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        // cy.get(':nth-child(4) > .ng-untouched').should("have.value",this.data.name)
        homePage.getTwoWayDataBinding.should("have.value",this.data.name)

        homePage.getEditBox().should("have.attr","minlength",2)
        homePage.getEntrepreneaur().should("be.disabled")
        Cypress.config('defaultCommandTimeout',8000)
        homePage.getShopTab().click()
        cy.get(":nth-child(2) > .nav-link").click()

        // cy.get(':nth-child(1) > .form-control').type(this.data.name)
        // cy.get(':nth-child(4) > .ng-pristine').should("have.value",this.data.name)

        // cy.get("select").select(this.data.gender)
        
        // cy.get(':nth-child(1) > .form-control').should("have.attr","minlength",2)
        
        // cy.get('#inlineRadio3').should("be.disabled")


            //as per POM
        //productPage.checkoutButton .click()
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        //cy.get('a.nav-link.btn.btn-primary').click()

        var sum = 0

        cy.get("tr td:nth-child(4) strong").each(($el,index,$list)=>{
            //cy.log($el.text())
            const amount = $el.text()
             var res =  amount.split(" ")
             res = res[1].trim()
             sum = Number(sum)+Number(res)
             cy.log(res)
         }).then(function(){
            cy.log(sum)
         })
        
         cy.get("h3 strong").then(function(element){
            element.text()
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
         })
        
        cy.contains("Checkout").click()
        

        cy.get("#country").type("India")

        cy.get('.suggestions > ul > li > a').click()
        cy.get("#checkbox2").click({force: true})

        //cy.get("input.btn.btn-success").click()
        cy.get("input[type='submit']").click()

        //cy.get(".alert").should("have.text","Success! Thank you! Your order will be delivered in next few weeks :-).")
        cy.get(".alert").then(function(element){

            const actualText = element.text()
            
            expect(actualText.includes("Success")).to.be.true
        })
        

    })

     

})