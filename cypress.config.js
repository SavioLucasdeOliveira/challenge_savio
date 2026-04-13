const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'https://demo.hyva.io/default/',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    video: false,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      // Configuração do Mocha JUnit Reporter para gerar relatórios em XML
      require('cypress-plugin-tab');
    },
  },

  // Configuração do Reporter
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'results/junit-report.xml',
    toConsole: true,
    jenkinsMode: false,
    testCaseSwitches: ['stdout', 'json']
  }
});
