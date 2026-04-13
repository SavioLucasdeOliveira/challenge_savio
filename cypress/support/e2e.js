// Importa os comandos customizados
import './commands'

// Ignora erros de JavaScript do ambiente demo para não quebrar os testes
Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('initComponentMessenger is not defined') ||
    err.message.includes('initialize is not defined') ||
    err.message.includes('getMessages is not defined') ||
    err.message.includes('message is not defined') ||
    err.message.includes('Cannot read properties of undefined') ||
    err.message.includes('hyvaCheckout')
  ) {
    return false
  }
})