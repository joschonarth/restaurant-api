# 🍽️ API de Restaurante

Esta API foi desenvolvida para gerenciar um restaurante, oferecendo funcionalidades para gerenciamento de produtos, mesas e pedidos. O projeto foi implementado utilizando **Node.js** e **TypeScript**, além de outras tecnologias como **Express**, **Knex.js**, **SQLite3** e **Zod**.

---

## 🛠️ Funcionalidades

### 🍴 Produtos

- 🆕 **Criar Produto**: Adicione novos produtos ao menu.
- 📃 **Listar Produtos**: Consulte os produtos disponíveis.
- ✏️ **Atualizar Produto**: Altere informações de um produto.
- ❌ **Deletar Produto**: Remova produtos do menu.

### 🪑 Mesas

- 📃 **Listar Mesas**: Veja todas as mesas disponíveis.
- 🔓 **Abrir Mesa**: Inicie uma nova sessão para uma mesa.
- 🔒 **Fechar Mesa**: Encerre uma sessão ativa de uma mesa.

### 📝 Pedidos

- 🆕 **Criar Pedido**: Registre pedidos para uma mesa.
- 📃 **Listar Pedidos**: Consulte todos os pedidos realizados.
- 💵 **Mostrar Total do Pedido**: Calcule o total de um pedido.

---

## 🛠️ Tecnologias Utilizadas

- 🟢 **Node.js**: Ambiente de execução para JavaScript no servidor.
- 🟦 **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- 🗂️ **SQLite3**: Banco de dados relacional leve e eficiente.
- ⚡ **Express**: Framework para construção de aplicações web e APIs.
- 🔧 **Knex.js**: Query builder para integração com o banco de dados.
- 💎 **Zod**: Biblioteca de validação e tipagem de dados.

---

## ✅ Pré-requisitos

Antes de começar, você precisará ter os seguintes itens instalados na sua máquina:

- 🟢 **Node.js**: [Clique aqui para instalar o Node.js](https://nodejs.org/)
- 📦 **npm** (gerenciador de pacotes do Node.js): O npm vem automaticamente com a instalação do Node.js.

## 💻 Como Instalar o Node.js

Para instalar o **Node.js**, siga estas etapas:

1. Acesse o [site oficial do Node.js](https://nodejs.org/).
2. Baixe o instalador adequado para o seu sistema operacional.
3. Execute o instalador e siga as instruções na tela.
4. Após a instalação, verifique se o Node.js foi instalado corretamente executando os seguintes comandos no terminal:

```bash
node -v
npm -v
```

---

## 🔧 Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/joschonarth/restaurant-api.git
```

2. Instale as dependências:

```bash
npm install
```

3. Execute as migrações:

```bash
npm run knex -- migrate:latest
```

4. Inicie o servidor:

```bash
npm run dev
```

5. Acesse a API em `http://localhost:3333`.

---

## 🔗 Endpoints

### 🍴 Produtos (`/products`)

- **GET** `/` - Listar todos os produtos.
- **POST** `/` - Criar um novo produto.
- **PUT** `/:id` - Atualizar informações de um produto.
- **DELETE** `/:id` - Remover um produto.

### 🪑 Mesas (`/tables`)

- **GET** `/` - Listar todas as mesas.

### 🔄 Sessões de Mesas (`/tables-sessions`)

- **GET** `/` - Listar todas as sessões de mesas.
- **POST** `/` - Criar uma nova sessão de mesa.
- **PATCH** `/:id` - Atualizar uma sessão de mesa.

### 📝 Pedidos (`/orders`)

- **POST** `/` - Criar um novo pedido.
- **GET** `/table-session/:table_session_id` - Listar pedidos de uma sessão de mesa.
- **GET** `/table-session/:table_session_id/total` - Mostrar o valor total de um pedido.

---

## 📚 Documentação e Links Úteis

- 🟢 **Node.js**: [Documentação oficial do Node.js](https://nodejs.org/docs/latest/api/)
- 🟦 **TypeScript**: [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)
- 🗂️ **SQLite**: [Documentação oficial do SQLite](https://www.sqlite.org/docs.html)
- ⚡ **Express**: [Documentação oficial do Express](https://expressjs.com/)
- 🔧 **Knex.js**: [Documentação oficial do Knex.js](https://knexjs.org/)
- 💎 **Zod**: [Documentação oficial do Zod](https://github.com/colinhacks/zod)

---

## Contribuições 🌟

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue com sugestões ou enviar um pull request com melhorias.

## 📞 Contato 

<div>
    <a href="https://www.linkedin.com/in/joschonarth/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
    <a href="mailto:joschonarth@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>