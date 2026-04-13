// Exemplo de configuração para o Diferencial 5 - relatório automático.
// Você pode copiar este conteúdo para o seu cypress.config.js.

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.hyva.io/default/',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },

  video: true,
  screenshotOnRunFailure: true,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml',
    toConsole: true,
  },
})

// Execução sugerida:
// npx cypress run --spec "cypress/e2e/**/*.cy.js"
//
// Dependendo da sua versão/projeto, instale o reporter se necessário:
// npm install -D mocha-junit-reporter