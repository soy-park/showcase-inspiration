describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://quote-garden.onrender.com/api/v3/quotes", {
      statusCode: 200,
      fixture: "quotes.json"})
      .visit("http://localhost:3000/")
  })

  it('should display an error message when quotes cannot be fetched', () => {
    cy.intercept("GET", "https://quote-garden.onrender.com/api/v3/quotes", {
      statusCode: 500,
      fixture: "quotes.json"})
      .as('fetchQuotes');

    cy.wait('@fetchQuotes')
    cy.get("p.error-message").should('be.visible');
  })

  it('should go to a base url', () => {
    cy.url().should('include', '/')
  })

  it('should display an error message when url is neither "/" nor "/favorites"', () => {
    cy.visit("http://localhost:3000/other-url")
    cy.contains("h2", "Page was not found").should('be.visible')

    cy.visit("http://localhost:3000/other-url")
    cy.contains("p", 'Please click on "All Quotes" above to be directed to your dose!').should('be.visible')
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

  it('should go to a new url when user clicks on "Favorites"', () => {
    cy.get('nav').contains('Favorites').click()
    cy.get('.favs-container').should('exist')
    cy.url().should('include', '/favorites')
  })

  it('should not stay at the current base URL when the "Favorites" is clicked', () => {
    cy.get('nav').contains('Favorites').click() 
      .url().should('not.eq', 'http://localhost:3000/') 
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
    cy.get('.card').eq(1).find('.favorite-button')
      .should('be.visible') 
      .contains("Favorite")

    cy.get('.card').eq(2).contains("None are so old as those who have outlived enthusiasm.")
    cy.get('.card').eq(2).contains("Henry David Thoreau")
    cy.get('.card').eq(2).find('.favorite-button').scrollIntoView()
      .should('be.visible') 
      .contains("Favorite")
  })

  it('should not display encouragement cards that are not part of the fetched data', () => {
    cy.get('main').find('.card').should('have.length.not.lessThan', 3);
    cy.get('main').find('.card').should('have.length.not.greaterThan', 3);

    cy.get('.card').eq(0).find('.quote').should('not.contain', ':not(:contains("Like everyone else who makes the mistake of getting older, I begin each day with coffee and obituaries."))')
    cy.get('.card').eq(0).find('.author').should('not.contain', ':not(:contains("Bill Cosby"))')

    cy.get('.card').eq(1).find('.quote').should('not.contain', ':not(:contains("Age appears to be best in four things old wood best to burn, old wine to drink, old friends to trust, and old authors to read."))')
    cy.get('.card').eq(1).find('.author').should('not.contain', ':not(:contains("Francis Bacon"))')

    cy.get('.card').eq(2).find('.quote').should('not.contain', ':not(:contains("None are so old as those who have outlived enthusiasm."))')
    cy.get('.card').eq(2).find('.author').should('not.contain', ':not(:contains("Henry David Thoreau"))')
  })
})
