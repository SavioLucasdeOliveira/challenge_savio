describe('Cart Tests', () => {
  it('deve adicionar um produto ao carrinho', () => {
    cy.visit('https://demo.hyva.io/default/')

    // Busca por shirt
    cy.get('#menu-search-icon').click()

    cy.get('input#search:visible')
      .should('be.visible')
      .type('shirt{enter}')

    cy.url().should('include', 'catalogsearch')

    // Abre o primeiro produto encontrado
    cy.get('main a')
      .contains(/shirt/i)
      .first()
      .click()

    cy.get('main').should('be.visible')

    // Guarda o nome do produto para validar no carrinho
    cy.get('h1').invoke('text').then((productName) => {
      const name = productName.trim()

      // Vai até o formulário do produto
      cy.get('#product_addtocart_form').scrollIntoView()

      // Seleciona tamanho e cor
      cy.contains('.swatch-attribute.size label', 'M', { timeout: 10000 })
        .scrollIntoView()
        .click({ force: true })

      cy.get('input[name="super_attribute[93]"][aria-label="Blue"]', { timeout: 10000 })
        .check({ force: true })

      // Intercepta atualização do carrinho
      cy.intercept('GET', '**/customer/section/load/**').as('cartLoad')

      // Adiciona o produto ao carrinho
      cy.get('#product-addtocart-button', { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .click()

      cy.wait('@cartLoad')

      // Acessa a página do carrinho e valida o produto
      cy.visit('https://demo.hyva.io/default/checkout/cart/')

      cy.get('main').should('be.visible')
      cy.get('body').should('contain.text', name)
    })
  })
})