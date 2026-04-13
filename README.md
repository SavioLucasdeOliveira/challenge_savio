# Q.A Challenge Luma Store

Este projeto contém testes automatizados end-to-end da **Luma Store**, desenvolvidos com **Cypress**, com foco na validação dos principais fluxos da aplicação por meio de testes de **caixa preta**.

> This is a challenge by [Coodesh](https://coodesh.com/)

---

## Descrição

O objetivo deste projeto é automatizar cenários funcionais da loja Luma Store, validando o comportamento esperado da aplicação conforme os casos de uso propostos no desafio.

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