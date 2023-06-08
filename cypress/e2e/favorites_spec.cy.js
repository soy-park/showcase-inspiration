describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://quote-garden.onrender.com/api/v3/quotes", {
      statusCode: 200,
      fixture: "quotes.json"})
      .visit("http://localhost:3000/favorites")
  })

  it('should render a heading', () => {
    cy.contains("h1", "Medicine for the Mind")
  })

  it('should not render a heading with any text other than "Medicine for the Mind"', () => {
    cy.get('h1').should('not.contain', ':not(:contains("Medicine for the Mind"))');
  })

  it('should render a nav bar', () => {
    cy.get('nav')
      .contains("All Quotes")
    cy.get('nav')
      .contains("Favorites")
  })

  it('should not render a nav bar with links other than "All Quotes" and "Favorites"', () => {
    cy.get('nav').should('not.contain', ':not(:contains("All Quotes"))')
    cy.get('nav').should('not.contain', ':not(:contains("Favorites"))')
  })

  it('should not render any cards if no cards are favorited"', () => {
   
  })

  it('should display an error message when url is neither "/" nor "/favorites"', () => {
    cy.visit("http://localhost:3000/other-url")
    cy.contains("h2", "Page was not found").should('be.visible')

    cy.visit("http://localhost:3000/other-url")
    cy.contains("p", 'Please click on "All Quotes" above to be directed to your dose!').should('be.visible')
  })
})