/// <reference types ="cypress" />



describe('My API Test Suite',function(){

    it('My API Test Case',function(){

   
        cy.request('POST','http://216.10.245.166/Library/Addbook.php', {

        "name": "Learn Appium Automation with Java",
        "isbn": "RS218",
        "aisle": "111",
        "author":"John foe"
    
        }).then(function(response){
            
            expect(response.body).to.have.property('msg','successfully added')
            expect(response.status).to.eq(200) 
    })

       
    })
})