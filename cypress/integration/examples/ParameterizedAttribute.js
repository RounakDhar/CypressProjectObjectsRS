/// <reference types ="cypress" />

/// <reference types ="cypress-iframe" />

import HomePage from '../PageObjects/HomePage'
import ProductPage from '../PageObjects/ProductPage'

import 'cypress-iframe'
import cypress from 'cypress'


describe("My Test-Framework Test Suite", function() {

    before(function() {
        // root-level hook
        // runs once before all tests
        cy.fixture("example").then(function(data){

                this.data = data
        })
        
      })
      

    it('My Test-Framework Test Case',function(){

        //Cypress.config("defaultCommandTimeout",8000)

        const homePage = new HomePage()
        const productPage = new ProductPage()

        //cy.visit(Cypress.env('url')+"/angularpractice/'")

        
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding.should("have.value",this.data.name)
        homePage.getEditBox().should("have.attr","minlength",2)
        homePage.getEntrepreneaur().should("be.disabled")
        homePage.getShopTab().click()


        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        productPage.checkoutButton().click()
        

        

        
        

    })

     

})