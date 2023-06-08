describe('Favorites Page', () => {
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
    cy.get('.favs-container').should('exist')
      .find('.fav-card').should('have.lengthOf', 0)

    cy.get('.fav-card').should('not.exist')
  })

  it('should render cards that are favorited"', () => {
    cy.visit("http://localhost:3000/")
    cy.get('.cards-container').find('.favorite-button').eq(2).click()
    cy.get('nav').contains('Favorites').click()
    cy.get('.favs-container').find('.fav-card').should('have.lengthOf', 1) 

    cy.get('.favs-container').find('.fav-card')
      .contains('h3', 'None are so old as those who have outlived enthusiasm.')

    cy.get('.favs-container').find('.fav-card')
      .contains('p', 'Henry David Thoreau')

    cy.get('.favs-container').find('.fav-card')
      .get('.delete-button').contains("Remove from Favorites")
  })

  it('should not render cards that are not favorited"', () => {
    cy.visit("http://localhost:3000/")
    cy.get('.cards-container').find('.favorite-button').eq(2).click()
    cy.get('nav').contains('Favorites').click()
    cy.get('.favs-container').find('.fav-card').should('have.length.not.lessThan', 1)
    cy.get('.favs-container').find('.fav-card').should('have.length.not.greaterThan', 1)

    cy.expect('.fav-card').to.not.contain('h3', 'Like everyone else who makes the mistake of getting older, I begin each day with coffee and obituaries.')
    cy.expect('.fav-card').to.not.contain('p', 'Bill Cosby')

    cy.expect('.fav-card').to.not.contain('h3', 'Age appears to be best in four things old wood best to burn, old wine to drink, old friends to trust, and old authors to read.')
    cy.expect('.fav-card').to.not.contain('p', 'Francis Bacon')

    cy.get('.fav-card').find('.quote').should('not.contain', ':not(:contains("None are so old as those who have outlived enthusiasm."))')
    cy.get('.fav-card').find('.author').should('not.contain', ':not(:contains("Henry David Thoreau"))')
  })

  it('should render each card with a "Remove from Favorites" button', () => {
    cy.visit("http://localhost:3000/")
    cy.get('.cards-container').find('.favorite-button').eq(2).click()
    cy.get('nav').contains('Favorites').click()
    cy.get('.fav-card').find('.delete-button').should('contain', "Remove from Favorites")
  })

  it('should not display the card when the user clicks on "Remove from Favorites" button', () => {
    cy.visit("http://localhost:3000/")
    cy.get('.cards-container').find('.favorite-button').eq(2).click()
    cy.get('nav').contains('Favorites').click()
    cy.get('.fav-card').find('.delete-button').click()
    cy.get('.favs-container').find('.fav-card').should('not.exist')
  })

  it('should go to a new url when user clicks on "All Quotes', () => {
    cy.get('nav').contains("All Quotes").click()
    cy.url().should('include', '/')
  })

  it('should display an error message when url is neither "/" nor "/favorites"', () => {
    cy.visit("http://localhost:3000/other-url")
    cy.contains("h2", "Page was not found").should('be.visible')

    cy.visit("http://localhost:3000/other-url")
    cy.contains("p", 'Please click on "All Quotes" above to be directed to your dose!').should('be.visible')
  })
})