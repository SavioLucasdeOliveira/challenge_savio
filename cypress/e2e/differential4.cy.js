describe('Diferencial 4 - Comentário em produto aleatório masculino', () => {
  it('deve adicionar um comentário em um produto aleatório do catálogo masculino', () => {
    cy.visit('https://demo.hyva.io/default/men.html')

    cy.get('a.product-item-link', { timeout: 15000 }).then(($items) => {
      const index = Math.floor(Math.random() * $items.length)
      cy.wrap($items[index]).click()
    })

    cy.get('main').should('be.visible')

    // Interpretação adotada do requisito:
    // comentar/review no produto aleatório do catálogo masculino.
    cy.contains('Write Your Own Review', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')

    cy.get('#nickname_field, input[name="nickname"]', { timeout: 10000 })
      .should('be.visible')
      .first()
      .type('Savio QA')

    cy.get('#summary_field, input[name="title"]')
      .should('be.visible')
      .first()
      .type('Comentário automático de teste')

    cy.get('#review_field, textarea[name="detail"]')
      .should('be.visible')
      .first()
      .type('Comentário gerado automaticamente para validar o fluxo de review do produto.')

    cy.get('body').then(($body) => {
      if ($body.find('#Rating_5, input[name="ratings[4]"]').length) {
        cy.get('#Rating_5, input[name="ratings[4]"]')
          .first()
          .check({ force: true })
      }
    })

    cy.get('button[title="Submit Review"], button.action.submit.primary')
      .contains(/submit review/i)
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })

    cy.contains('You submitted your review for moderation.', { timeout: 15000 })
      .should('be.visible')
  })
})