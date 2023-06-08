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

  it('should display a background image of healthcare heroes', () => {
    cy.get('body').should('have.css', 'background-image', 'url("https://www.amnhealthcare.com/siteassets/amn-insights/blog/covid-articles/supporting-healthcare-heroes.jpg?format=webp")');
  })

  it('should not display a background image that is not of healthcare heroes', () => {
    cy.get('body').should('not.have.css', 'background-image', ':not(:contains(url("https://www.amnhealthcare.com/siteassets/amn-insights/blog/covid-articles/supporting-healthcare-heroes.jpg?format=webp")))');
  })

  it('should not render any cards if no cards are favorited"', () => {
   
  })

  it('should render cards that are favorited"', () => {
   
  })

  it('should not render cards that are not favorited"', () => {
   
  })


  it('should go to a new url when user clicks on "All Quotes', () => {
   
  })

  it('should display an error message when url is neither "/" nor "/favorites"', () => {
    cy.visit("http://localhost:3000/other-url")
    cy.contains("h2", "Page was not found").should('be.visible')

    cy.visit("http://localhost:3000/other-url")
    cy.contains("p", 'Please click on "All Quotes" above to be directed to your dose!').should('be.visible')
  })
})