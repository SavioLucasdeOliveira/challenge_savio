````md
# Q.A Challenge Luma Store

Este projeto contém testes automatizados end-to-end da **Luma Store**, desenvolvidos com **Cypress**, com foco na validação dos principais fluxos da aplicação por meio de testes de **caixa preta**.

> This is a challenge by [Coodesh](https://coodesh.com/)

---

## Descrição

O objetivo deste projeto é automatizar cenários funcionais da **Luma Store**, validando o comportamento esperado da aplicação conforme os casos de uso propostos no challenge.

O site escolhido para execução dos testes foi:

- https://demo.hyva.io/default/

A proposta deste repositório é apresentar uma solução simples, organizada e de fácil entendimento, com foco em **legibilidade**, **manutenção**, **clareza técnica** e **boa documentação**.

---

## Objetivo do challenge

Demonstrar habilidades como **QA/Tester**, automatizando fluxos essenciais da aplicação e documentando o raciocínio técnico adotado durante a construção da solução.

Além da implementação dos testes, este repositório também documenta:

- a escolha da ferramenta
- as decisões técnicas tomadas
- os cenários obrigatórios
- os diferenciais implementados
- a estrutura do projeto
- a forma de instalação e execução
- a geração de relatório automático

---

## Tecnologias utilizadas

- **Linguagem:** JavaScript
- **Framework de automação:** Cypress
- **Gerenciador de pacotes:** npm
- **Relatórios:** Mocha JUnit Reporter
- **Massa de dados fictícia:** [Random User](https://randomuser.me/)

---

## Escolha da ferramenta

### Cypress

O **Cypress** foi a ferramenta escolhida para este challenge por oferecer uma abordagem prática e moderna para automação de testes end-to-end, especialmente em aplicações web.

### Motivos da escolha

- API simples e intuitiva
- Fácil configuração inicial
- Boa experiência de depuração
- Execução rápida
- Esperas automáticas para elementos e requisições
- Facilidade para inspecionar falhas durante a execução
- Suporte nativo para interceptação de requisições
- Ótima documentação e comunidade ativa

### Vantagens do Cypress para este desafio

- Permite escrever testes de forma mais legível
- Facilita a automação de fluxos reais do usuário
- Ajuda na validação visual e funcional da interface
- Torna mais simples trabalhar com elementos dinâmicos
- Possui ótimo suporte para evidências e relatórios

### Ferramentas não escolhidas

#### Selenium
Apesar de ser uma ferramenta muito consolidada, exige mais configuração inicial, maior esforço de manutenção e tende a ter uma implementação mais extensa para um desafio com escopo curto.

#### Robot Framework
É uma boa opção para automação, mas para este contexto o Cypress se mostrou mais direto, flexível e aderente ao tipo de fluxo web que precisava ser testado.

#### Ghost Inspector
É uma alternativa interessante para testes automatizados com menos código, porém oferece menor flexibilidade para personalizações técnicas mais avançadas, interceptação de requisições e controle detalhado do fluxo.

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
├─ package-lock.json
├─ .gitignore
└─ README.md
````

---

## Cenários testados

## Cenários obrigatórios

### 1. Validação da home page

Teste responsável por verificar se a página inicial está carregando corretamente e se os principais elementos da home estão disponíveis para navegação.

* **Arquivo:** `cypress/e2e/home.cy.js`

### 2. Busca por produto

Teste que realiza a busca por `shirt` e valida se a página de resultados foi carregada corretamente.

* **Arquivo:** `cypress/e2e/search.cy.js`

### 3. Adição de produto ao carrinho

Teste que seleciona um produto, configura suas opções obrigatórias e o adiciona ao carrinho.

* **Arquivo:** `cypress/e2e/cart.cy.js`

### 4. Realização de checkout

Teste que executa o fluxo de checkout, validando as etapas principais da finalização da compra.

* **Arquivo:** `cypress/e2e/checkout.cy.js`

---

## Diferenciais implementados

### Diferencial 1 - Buscar por `shirt` e clicar no último resultado sugerido

Foi implementada a busca por `shirt` utilizando o campo de pesquisa com foco no comportamento sugerido da interface. Também foi utilizada escuta/interceptação da requisição para identificar o momento correto de interação com os resultados sugeridos.

* **Arquivo:** `cypress/e2e/differential1.cy.js`

### Diferencial 2 - Criar conta na tela de Login/Cadastro

Foi implementado o preenchimento do formulário de cadastro até o ponto do captcha, tratando esse elemento de forma controlada no teste.

#### Abordagem adotada para o captcha

Como o captcha é um mecanismo de proteção contra automações e não deve ser burlado em um cenário real de testes E2E sem estratégia autorizada, a abordagem adotada foi:

* preencher o formulário com dados válidos
* validar a presença do captcha
* interromper a automação nesse ponto, quando necessário
* seguir o fluxo apenas nos cenários em que não há dependência de resolução manual

Essa decisão busca respeitar o comportamento real da aplicação sem comprometer a integridade do teste.

* **Arquivo:** `cypress/e2e/differential2.cy.js`

### Diferencial 3 - Adicionar produto aleatório do catálogo masculino ao carrinho

Foi implementada a seleção de um produto aleatório da categoria masculina, simulando um comportamento mais próximo de uma navegação real do usuário.

* **Arquivo:** `cypress/e2e/differential3.cy.js`

### Diferencial 4 - Adicionar comentário em produto aleatório

Foi implementado um cenário de comentário em produto aleatório do catálogo masculino, validando a submissão da ação dentro do fluxo funcional.

* **Arquivo:** `cypress/e2e/differential4.cy.js`

### Diferencial 5 - Gerar relatório automático do teste

Foi configurada a geração automática de relatório em formato **JUnit XML**, permitindo integrar os resultados com pipelines e ferramentas de CI/CD.

* **Arquivo / saída:** `results/junit-report.xml`
* **Arquivo de teste relacionado:** `cypress/e2e/differential5.cy.js`

---

## Estratégia de testes

A automação foi construída com foco em **testes end-to-end**, priorizando a experiência do usuário e a validação dos fluxos críticos da aplicação.

### Estratégia aplicada

* validação de carregamento das páginas
* navegação entre telas
* preenchimento de formulários
* interação com busca e catálogo
* validação de carrinho e checkout
* uso de dados fictícios
* interceptação de requisições quando necessário
* validações objetivas de sucesso do fluxo

---

## Boas práticas adotadas

* estrutura de projeto organizada
* separação dos cenários por responsabilidade
* utilização de fixtures para dados de teste
* reaproveitamento de comandos em `support`
* validações mais estáveis para elementos e fluxo
* documentação clara da solução
* preocupação com legibilidade e manutenção

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* [Node.js](https://nodejs.org/)
* npm

---

## Como instalar o projeto

Clone este repositório:

```bash
git clone https://github.com/SavioLucasdeOliveira/challenge_savio.git
```

Acesse a pasta do projeto:

```bash
cd challenge_savio
```

Instale as dependências:

```bash
npm install
```

---

## Como executar os testes

### Executar todos os testes em modo headless

```bash
npm run test
```

### Executar os testes em modo interativo

```bash
npm run cypress:open
```

### Executar um teste específico

```bash
npx cypress run --spec cypress/e2e/checkout.cy.js
```

---

## Scripts disponíveis

* `npm run test`
  Executa todos os testes em modo headless.

* `npm run cypress:open`
  Abre a interface interativa do Cypress.

* `npm run test:report`
  Executa os testes e gera o relatório automático em XML.

---

## Relatórios e evidências

Os testes podem gerar evidências e relatórios úteis para análise de execução.

### Evidências disponíveis

* **Screenshots** em caso de falha
* **Relatório XML** em formato JUnit
* Evidências úteis para integração com CI/CD

### Gerar relatório automático

```bash
npm run test:report
```

### Saída do relatório

```text
results/junit-report.xml
```

### Integração possível com

* GitHub Actions
* GitLab CI
* Jenkins
* Azure DevOps
* outras ferramentas compatíveis com JUnit XML

---

## Decisões técnicas

Durante a construção da solução, algumas decisões foram tomadas para tornar o projeto mais claro, funcional e aderente ao escopo do challenge.

### Principais decisões

* uso de Cypress pela simplicidade e eficiência para testes web
* separação dos cenários em arquivos específicos
* uso de interceptação para fluxos assíncronos
* geração de relatório automático como diferencial
* abordagem controlada para o captcha, sem tentativa de burlar proteção da aplicação

---

## Pontos de melhoria futuros

Como evolução do projeto, seria possível adicionar:

* integração completa com pipeline CI/CD
* geração de relatórios HTML
* uso mais amplo de custom commands ou page objects
* parametrização adicional de massa de dados
* melhorias de cobertura para cenários negativos

---

## Autor

**Sávio Lucas de Oliveira**
QA / Software Quality Analyst

---

## Finalização

Este repositório foi desenvolvido como solução para o challenge proposto, buscando demonstrar organização, clareza técnica, capacidade analítica e conhecimento em automação de testes web.

````
````
