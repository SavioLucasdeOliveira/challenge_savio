describe('Home Tests', () => {
  it('deve carregar a home corretamente', () => {
    cy.visit('https://demo.hyva.io/default/')

    // Valida a URL da home
    cy.url().should('include', '/default/')

    // Valida elementos principais da página
    cy.get('body').should('be.visible')
    cy.get('header').should('be.visible')
    cy.get('#menu-search-icon').should('be.visible')
  })
})