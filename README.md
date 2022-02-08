<h1 align="center">
<a href="#" alt="site do ecoleta"> Eduick </a>
</h1>

<h3 align="center">
    Desafio para desenvolvedor front-end
</h3>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-Páginas-a-serem-construídas)
   * [Layout](#-layout)
     * [Web](#web)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
     * [WebSite](#user-content-website--react----typescript)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Análise sobre o desenvolvimento do projeto

Coloque sua analise



---

## ⚙️ Páginas a serem construídas

- [] LandingPage;
  - [] Implementar ação visual de check dos itens: "I'm a teacher" e "I'm a student";
  - [] Arquivo modal-menu deverá ser resultado do clique no menu hamburguer (responsive mode);
  - [] Ao clicar em "Get Started" mostrar modal de login;
    - [] Login mockado;
  - [] Usabilidade de formulário e autenticação (React Hook Form e Yup)
  - [] Login social com GitHub (NextAuth)
- [] Dashboard (Rota privada);
  - []  Requests com a fake api;
  - [] Implementar scroll infinito ou paginação;
  - [] Na versão mobile implementar ação de dropdown (onde aparece change to teacher mode);
- [] Html Semântico;
- [] CSS bem estruturado;
- [] Comentar o código, quando necessário, para explicar a intenção de trechos complexos;
- [] Escrever um bom README explicando como instalar e executar o projeto;
---

## 🎨 Layout

O layout da aplicação está disponível no Figma: https://www.figma.com/file/vxbTpBRViZn0dY5EnjlVMZ/Eduick

<a href="https://www.figma.com/file/XTbAE7DPmkrAI0b5hmzB64Vd/Appetit-Web?node-id=1%3A3">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Print das telas desenvolvidas

<!-- <p align="center" style="display: flex; align-items: flex-start; justify-content: center;"> -->

  ### LandingPage

  <!-- <img alt="login" title="#login" src="./print_pages/print-1.PNG" width="1200px"> -->

  #

  ### MenuBurguer

  <!-- <div align="center">
    <img alt="lista de pedidos" title="#orders-list" src="./print_pages/print-2.PNG" width="350px">
  </div> -->

  #

  ### Login/Login Social
<!--
  <div align="center">
    <img alt="Detalhes de pedidos" title="#order-details" src="./print_pages/print-3.PNG" width="350px">
  </div>


  <img alt="Detalhes de pedidos" title="#order-details" src="./print_pages/print-3.1.PNG" width="1200px"> -->

  #

  ### Dashboard
<!--
  <img alt="Novo pedido" title="#new-order" src="./print_pages/print-4.PNG" width="1200px"> -->

  #


  ### Dropdown
<!--
  <div align="center">
    <img alt="Informações do pedido" title="#user-order" src="./print_pages/print-6.PNG" width="350px">
  </div> -->

  #

  ### Modal Profile

  <!-- <img alt="Feedback do Pedido" title="#feedback-order" src="./print_pages/print-5.PNG" width="1200px"> -->

</p>

---
#### 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone https://github.com/odailsonsilva/desafio-intraversa.git

# Acesse a pasta do projeto no seu terminal/cmd
cd desafio-intraversa

# check se esta na banch master

# Instalando dependências
$ yarn

#  ou

$ npm install

# Execute a aplicação em modo de desenvolvimento (roda o ambiente front (porta 3000 e o json-server porta 5000))
$ yarn dev

#   ou

$ npm run dev

## Comandos para build
$ yarn build

# DEPOIS
$ yarn start

## OUTROS COMANDOS

# STORYBOOK (EXECUTA A DOCUMENTAÇÃO DOS COMPONENTE ISOLADO, AQUI SÓ ESTÃ0 ALGUNS COMPONENTE PARA EXEMPLIFICAR A CONTRUÇÃO DOS MESMOS)
$ yarn storybook

# Testes  (AQUI SOMENTE ALGUNS COMPONENTE FORAM TESTADOS, OS QUE ESTÃO DENTRO DE ATOMOS)
$ yarn test

# Automatização para criação de componentes, (CRIA UMA ESTRUTURA COM - index.tsx, styles.ts, stories.tsx e tests.ts)
$ yarn generate [nome]

```
