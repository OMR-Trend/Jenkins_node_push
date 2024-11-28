

describe("template spec", () => {
  it.skip("passes", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.get(".post-title").should("have.text", "Logged In Successfully");
  });

  it.skip("shouldmeth", () => {
    cy.visit("https://www.youtube.com/");
    //URL CHECKING
    cy.url()
      .should("eq", "https://www.youtube.com/") //First stage of report
      .and("contain", "yo")
      .and("not.contain", "tube123")
      .and("include", "youtube");
  });
 //title
  it.skip("check the tilte",()=>{
    cy.visit("https://practicetestautomation.com/practice-test-login/")
    cy.title().should("eq","Test Login | Practice Test Automation")
  })

//body
it("body",()=>{
  cy.visit("https://practicetestautomation.com/practice-test-login/")
  
  cy.get(':nth-child(1) > label').should("have.text","Username")
  
  cy.get("#username").type("student")

  cy.get('#submit').click()
  
})

});
