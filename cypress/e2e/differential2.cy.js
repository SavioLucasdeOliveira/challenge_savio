describe('Diferencial 2 - Criar conta', () => {
  it('deve preencher o cadastro até a etapa do captcha', () => {
    const timestamp = Date.now()
    const email = `savio.qa.${timestamp}@example.com`

    cy.visit('https://demo.hyva.io/default/')

    cy.contains('h1', 'Create New Customer Account', { timeout: 15000 })
      .should('be.visible')

    cy.get('#accountcreate', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.get('#firstname')
          .should('be.visible')
          .clear()
          .type('Savio')

        cy.get('#lastname')
          .should('be.visible')
          .clear()
          .type('Oliveira')

        cy.get('#email_address')
          .should('be.visible')
          .clear()
          .type(email)

        cy.get('#password')
          .should('be.visible')
          .clear()
          .type('Savio@12345')

        cy.get('#password-confirmation')
          .should('be.visible')
          .clear()
          .type('Savio@12345')

        cy.get('button[title="Create an Account"], button.action.submit.primary')
          .first()
          .scrollIntoView()
          .should('be.visible')
      })

    // Não envia por causa do captcha
  })
})