describe('Diferencial 1 - Busca por shirt e clique no último resultado', () => {
  it('deve buscar por shirt e clicar no último resultado da listagem', () => {
    cy.visit('https://demo.hyva.io/default/')

    cy.get('#menu-search-icon', { timeout: 10000 })
      .should('be.visible')
      .click()

    cy.get('input#search:visible', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('shirt{enter}')

    cy.url().should('include', 'catalogsearch/result')
    cy.contains('h1', "Search results for: 'shirt'", { timeout: 15000 })
      .should('be.visible')

    cy.get('#product-list a.product-item-link', { timeout: 15000 })
      .filter(':visible')
      .should('have.length.greaterThan', 0)
      .last()
      .scrollIntoView()
      .should('be.visible')
      .click()

    cy.get('#product_addtocart_form, #product-addtocart-button', { timeout: 15000 })
      .should('exist')
  })
})