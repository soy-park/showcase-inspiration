describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://quote-garden.onrender.com/api/v3/quotes", {
      statusCode: 200,
      fixture: "quotes.json"})
      .visit("http://localhost:3000/favorites")
  })
})