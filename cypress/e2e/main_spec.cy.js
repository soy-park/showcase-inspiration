describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://quote-garden.onrender.com/api/v3/quotes", {
      statusCode: 200,
      fixture: "quotes.json"})
      .visit("http://localhost:3000/")
  })

  it('should go to a base url', () => {
    cy.url().should('include', '/')
  })

  // it('should render a heading', () => {
  //   cy.contains("h1", "POKEMON CARDS!")
  //   cy.contains("h3", "Browse cards and build your deck")
  // })
})
