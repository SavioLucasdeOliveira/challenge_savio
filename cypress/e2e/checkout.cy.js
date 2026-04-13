describe('Checkout Tests', () => {
  it('deve acessar o checkout e tentar finalizar a compra', () => {
    cy.visit('https://demo.hyva.io/default/')

    // Busca por shirt
    cy.get('#menu-search-icon')
      .should('be.visible')
      .click()

    cy.get('input#search:visible')
      .should('be.visible')
      .type('shirt{enter}')

    cy.url().should('include', 'catalogsearch')

    // Abre o primeiro produto encontrado
    cy.get('main a')
      .contains(/shirt/i)
      .should('be.visible')
      .first()
      .click()

    cy.get('main').should('be.visible')

    // Seleciona tamanho
    cy.contains('.swatch-attribute.size label', 'M', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click()

    // Seleciona cor
    cy.get('input[name="super_attribute[93]"][aria-label="Blue"]', { timeout: 10000 })
      .should('exist')
      .check({ force: true })

    // Adiciona ao carrinho
    cy.get('#product-addtocart-button', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click()

    // Vai para o checkout
    cy.visit('https://demo.hyva.io/default/checkout/')
    cy.url().should('include', '/checkout/')

    // Preenche os dados
    cy.fixture('user').then((user) => {
      cy.get('#guest_details-email_address', { timeout: 15000 })
        .should('be.visible')
        .clear()
        .type(user.email)

      cy.get('#shipping-firstname')
        .should('be.visible')
        .clear()
        .type(user.firstName)

      cy.get('#shipping-lastname')
        .should('be.visible')
        .clear()
        .type(user.lastName)

      cy.get('#shipping-street-0')
        .should('be.visible')
        .clear()
        .type(user.street)

      cy.get('#shipping-country_id')
        .should('be.visible')
        .select('US')

      cy.get('#shipping-region')
        .should('be.visible')
        .select('Florida')

      cy.get('#shipping-postcode')
        .should('be.visible')
        .clear()
        .type(user.zipCode)

      cy.get('#shipping-city')
        .should('be.visible')
        .clear()
        .type(user.city)

      cy.get('#shipping-telephone')
        .should('be.visible')
        .clear()
        .type(user.phone)

      cy.get('#billing-as-shipping')
        .check({ force: true })
    })

    // Seleciona frete
    cy.get('#shipping-method-flatrate', { timeout: 20000 })
      .should('be.visible')
      .check({ force: true })

    // Seleciona pagamento
    cy.get('#payment-method-checkmo', { timeout: 20000 })
      .should('be.visible')
      .check({ force: true })

    // Finaliza pedido
    cy.get('button.btn-place-order', { timeout: 20000 })
      .scrollIntoView()
      .wait(1000)
      .should('be.visible')
      .and('not.be.disabled')
      .click()

    // Valida comportamento final
    cy.contains('Order process completed successfully.', { timeout: 20000 })
  .should('be.visible')
  })
})