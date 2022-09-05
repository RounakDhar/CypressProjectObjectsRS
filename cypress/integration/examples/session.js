/// <reference types ="cypress" />

const cypress = require('cypress')
const neatCSV = require('neat-csv')

let ProductName = el.text()

describe('JWT Session', ()=> {


    it('is logged in through local storage',async()=>{


        cy.LoginAPI().then(function(){


            cy.visit('https://rahulshettyacademy.com/client',{

                onBeforeLoad: function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })

            
        })

        cy.get('.card-body button:last-of-type').eq(1).click().then(function(el){
            ProductName = el.text()
        })

        cy.get("button[routerlink='/dashboard/cart']").click()

        cy.contains("Checkout").click()
        //cy.get("button[type='button']:nth-child(1)").click()

        cy.get('input.input.txt.text-validated:nth-child(1)').type('India')


        //cy.get("section.ta-results.list-group.ng-star-inserted").each(($el, index, $list)=>{
            cy.get(".ta-results button").each(($el, index, $list) => {

            if($el.text() === "India"){
                cy.wrap($el).click()
            }
        })

        cy.get(".action__submit").click({force: true})
        cy.wait(2000)

        cy.get(".order-summary button").click({force: true})
        //cy.get("button.btn.btn-primary.mt-3.mb-3").click({force: true})

        Cypress.config("fileServerFolder")

        cy.readFile(Cypress.config("fileServerFolder")+"\cypress\integration\examples\session.csv")
        .then(async (text)=> {

            const csv = await neatCSV(text)
            console.log(csv)
            const actualProductCSV = csv[0]["Product Name"]

            expect(ProductName).to.equal(actualProductCSV)

        })
        
    })
})