describe('Diferencial 3 - Produto aleatório no carrinho', () => {
  it('deve adicionar um produto aleatório do catálogo masculino ao carrinho', () => {
    cy.visit('https://demo.hyva.io/default/men.html')

    cy.get('main').should('be.visible')

    cy.get('a.product-item-link', { timeout: 15000 }).then(($items) => {
      const index = Math.floor(Math.random() * $items.length)
      const productName = $items[index].innerText.trim()

      cy.wrap($items[index]).click()

      cy.get('h1').should('contain.text', productName)
    })

    cy.get('body').then(($body) => {
      if ($body.find('.swatch-attribute.size label').length) {
        cy.get('.swatch-attribute.size label')
          .filter(':visible')
          .first()
          .scrollIntoView()
          .click({ force: true })
      }

      if ($body.find('.swatch-attribute.color input[type="radio"]').length) {
        cy.get('.swatch-attribute.color input[type="radio"]')
          .first()
          .check({ force: true })
      }
    })

    cy.intercept('GET', '**/customer/section/load/**').as('cartLoad')

    cy.get('#product-addtocart-button, button#product-addtocart-button', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled')
      .click()

    cy.wait('@cartLoad', { timeout: 20000 })

    cy.visit('https://demo.hyva.io/default/checkout/cart/')

    cy.get('main').should('be.visible')
    cy.get('.cart.item, .product-item-name, .item-info').should('exist')
  })
})