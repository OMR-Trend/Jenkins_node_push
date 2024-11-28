describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com/')
    cy.get('[aria-label="Subscriptions"] > #endpoint > #icon > .style-scope > .yt-spec-icon-shape > div')
  })
})