describe('Search Tests', () => {
  it('deve realizar busca de produtos com sucesso', () => {
    cy.visit('https://demo.hyva.io/default/')

    // Clica no ícone de busca
    cy.get('#menu-search-icon').click()

    // Digita termo de busca
    cy.get('input#search:visible')
      .should('be.visible')
      .type('shirt{enter}')

    // Valida que foi redirecionado para página de resultados
    cy.url().should('include', 'catalogsearch')

    // Valida que há resultados
    cy.get('main').should('contain', 'shirt')
  })
})