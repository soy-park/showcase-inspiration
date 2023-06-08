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

  it('should render a heading', () => {
    cy.contains("h1", "Medicine for the Mind")
  })

  it('should render a nav bar', () => {
    cy.get('nav')
      .contains("All Quotes")
    cy.get('nav')
      .contains("Favorites")
  })

  it('should go to a new url when user clicks on "Favorites"', () => {
    cy.get('nav').contains('Favorites').click()
    cy.get('.favs-container').should('exist')
    cy.url().should('include', '/favorites')
  })

  it('should display a list of encouragement cards', () => {
    cy.get('main').find('.card').should('have.lengthOf', 3)
  })

  it('should display the quote, author, and favorite button for each encouragement card', () => {
    cy.get('.card').eq(0).contains("Like everyone else who makes the mistake of getting older, I begin each day with coffee and obituaries.")
    cy.get('.card').eq(0).contains("Bill Cosby")
    cy.get('.card').eq(0).find('.favorite-button')
      .should('be.visible') 
      .contains("Favorite")

    cy.get('.card').eq(1).contains("Age appears to be best in four things old wood best to burn, old wine to drink, old friends to trust, and old authors to read.")
    cy.get('.card').eq(1).contains("Francis Bacon")
    cy.get('.card').eq(0).find('.favorite-button')
      .should('be.visible') 
      .contains("Favorite")

    cy.get('.card').eq(2).contains("None are so old as those who have outlived enthusiasm.")
    cy.get('.card').eq(2).contains("Henry David Thoreau")
    cy.get('.card').eq(0).find('.favorite-button')
      .should('be.visible') 
      .contains("Favorite")
  })
})
