describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.wait(2000)
    cy.get('#username').type("student")
  })
})