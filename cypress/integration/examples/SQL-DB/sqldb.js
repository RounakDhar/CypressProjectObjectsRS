/// <reference types ="cypress" />



describe("My Test-Framework Test Suite", function() {
      
    context('Window',()=>{

   

            it('database interaction',()=>{

                
                cy.sqlServer("select * from persons").then(function(result){

                    console.log(result[0][1])
                })

            


            })

    }) 

})