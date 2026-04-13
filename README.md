# Q.A Challenge Magento

Este projeto contém testes automatizados end-to-end da **Magento**, desenvolvidos com **Cypress**, com foco na validação dos principais fluxos da aplicação por meio de testes de **caixa preta**.

> This is a challenge by [Coodesh](https://coodesh.com/)

---

## Descrição

O objetivo deste projeto é automatizar cenários funcionais da loja Magento, validando o comportamento esperado da aplicação conforme os casos de uso propostos no desafio.

O site escolhido para execução dos testes foi:

- https://demo.hyva.io/default/

A proposta deste repositório é apresentar uma solução simples, organizada e de fácil entendimento, com foco em legibilidade, manutenção e clareza na explicação dos fluxos testados.

---

## Objetivo do challenge

Demonstrar habilidades como **QA/Tester**, automatizando fluxos essenciais da aplicação e documentando o raciocínio técnico adotado durante a construção da solução.

Além da implementação dos testes, este README também documenta:

- a escolha da ferramenta
- as decisões técnicas
- os cenários obrigatórios
- os diferenciais
- a estrutura do projeto
- a forma de execução

---

## Tecnologias utilizadas

- **Linguagem:** JavaScript
- **Framework de automação:** Cypress
- **Gerenciador de pacotes:** npm
- **Massa de dados fictícia:** [Random User](https://randomuser.me/)

---

## Estrutura do projeto

```text
challenge_savio/
├─ cypress/
│  ├─ e2e/
│  │  ├─ home.cy.js
│  │  ├─ search.cy.js
│  │  ├─ cart.cy.js
│  │  ├─ checkout.cy.js
│  │  ├─ differential1.cy.js
│  │  ├─ differential2.cy.js
│  │  ├─ differential3.cy.js
│  │  ├─ differential4.cy.js
│  │  └─ differential5.cy.js
│  ├─ fixtures/
│  │  └─ user.json
│  └─ support/
│     ├─ commands.js
│     └─ e2e.js
├─ results/
│  └─ junit-report.xml
├─ cypress.config.js
├─ package.json
├─ .gitignore
└─ README.md
```

---

## Cenários testados

### Cenários obrigatórios
- **Home**: Validação da página inicial e navegação
- **Busca**: Funcionalidade de pesquisa de produtos
- **Carrinho**: Adição, remoção e atualização de itens
- **Checkout**: Processo completo de finalização de compra

### Cenários diferenciais
- **Diferencial 1**: Buscar por "shirt" e clicar no último resultado com escuta de requisições
- **Diferencial 2**: Criar conta na tela de Login/Cadastro (com abordagem para captcha)
- **Diferencial 3**: Adicionar produto aleatório da categoria de moda masculina
- **Diferencial 4**: Adicionar comentário em produto aleatório da categoria masculina
- **Diferencial 5**: Gerar relatório automático em XML (Mocha JUnit Reporter)

---

## Como executar os testes

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm

### Instalação
```bash
npm install
```

### Execução dos testes
```bash
# Executar todos os testes em modo headless
npm run test

# Executar testes no modo interativo
npm run cypress:open

# Executar teste específico
npx cypress run --spec cypress/e2e/checkout.cy.js
```

### Scripts disponíveis
- `npm run test`: Executa todos os testes em headless mode
- `npm run cypress:open`: Abre a interface do Cypress
- `npm run test:report`: Executa testes e gera relatório XML em `results/junit-report.xml`

---

## Detalhamento dos Diferenciais Implementados

### Diferencial 1 - Busca com Escuta de Requisições
Busca por "shirt" no menu superior e clica no **último resultado sugerido** com escuta da requisição de resposta. Valida o momento correto de clique através de interceptação de requisições.
- **Arquivo**: `cypress/e2e/differential1.cy.js`

### Diferencial 2 - Criação de Conta
Criação de conta na tela de Login/Cadastro com abordagem para o captcha (validação de visibilidade do campo sem interação direta).
- **Arquivo**: `cypress/e2e/differential2.cy.js`
- **Nota**: Captcha é contornado através de validações de presença do elemento

### Diferencial 3 - Produto Aleatório (Moda Masculina)
Adiciona um produto **aleatório** da categoria de moda masculina no carrinho, validando a seleção de tamanho, cor e quantidade.
- **Arquivo**: `cypress/e2e/differential3.cy.js`

### Diferencial 4 - Comentário em Produto
Adiciona um comentário em um produto **aleatório** da categoria de moda masculina, validando a submissão e exibição do comentário.
- **Arquivo**: `cypress/e2e/differential4.cy.js`

### Diferencial 5 - Relatório Automático
Gera relatório automático em formato **XML (JUnit)** após execução dos testes, pronto para integração com ferramentas de CI/CD.
- **Comando**: `npm run test:report`
- **Saída**: `results/junit-report.xml`
- **Tecnologia**: Mocha JUnit Reporter

---

## Decisões técnicas

### Escolha do Cypress ✅
**Por que Cypress foi escolhido:**
- **Facilidade de uso**: API intuitiva e curva de aprendizado baixa
- **Debugging**: Ferramentas integradas para depuração, screenshots e vídeos
- **Velocidade**: Execução rápida e paralela dos testes
- **Integração**: Suporte nativo a CI/CD
- **Comunidade**: Comunidade ativa e documentação excelente
- **Developer Experience**: Time travels, snapshots e hot reload

**Ferramentas desconsideradas e por quê:**
- **Selenium**: Framework mais complexo, maior tempo de setup, manutenção mais cara
- **Robot Framework**: Curva de aprendizado acentuada para não-especialistas em Python
- **Ghost Inspector**: Menos flexível que Cypress para customizações e hooks avançados

### Estratégia de testes
- **Testes E2E**: Foco em fluxos completos do usuário
- **Page Objects**: Uso de custom commands para reutilização
- **Fixtures**: Dados de teste centralizados
- **Intercepts**: Controle de requisições assíncronas

### Boas práticas implementadas
- Custom commands para ações repetitivas
- Timeouts apropriados para elementos dinâmicos
- Validações robustas de sucesso/falha
- Estrutura organizada e documentada

---

## Relatórios e evidências

Os testes geram automaticamente:
- **Screenshots** em caso de falha (pasta `cypress/screenshots/`)
- **Vídeos** da execução (pasta `cypress/videos/`) - opcional
- **Relatórios XML** em formato JUnit (arquivo `results/junit-report.xml`) - para integração com CI/CD

### Gerar Relatório Automático
```bash
npm run test:report
```

Este comando executa todos os testes e gera um relatório em XML que pode ser integrado com:
- Jenkins
- GitLab CI
- GitHub Actions
- Azure DevOps
- Outras ferramentas de CI/CD que suportam formato JUnit

---

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## Autor

**Savio Oliveira** - QA Engineer

---

