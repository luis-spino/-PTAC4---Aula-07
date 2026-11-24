# PTAC4 - Aula 07

Aplicação React com CRUD de usuários consumindo a API pública JSONPlaceholder, com foco em organização do helper `api.js` e centralização de erros.
Projeto utilizado para realizar as atividades da aula 09. 
Autor: Luis Gustavo Guisone Bagi

## Descrição

Este projeto demonstra como encapsular chamadas HTTP em um único módulo para simplificar o consumo de APIs e padronizar o tratamento de erros em uma interface React.

A aplicação permite:

- listar usuários
- criar novo usuário
- editar usuário existente
- excluir usuário
- simular erros de API para validar o comportamento da UI

## Tecnologias

- React
- Vite
- JavaScript
- Fetch API

## Funcionalidades

- helper centralizado para requisições (`src/api.js`)
- criação de erros customizados (`ApiError`)
- tratamento de falhas de rede e respostas HTTP
- mensagens de erro exibidas na interface
- uso de `AbortController` para cancelar requisições em andamento

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm run dev
```

3. Acesse no navegador:

```text
http://localhost:5173
```

## Estrutura do projeto

```text
src/
├── App.jsx
├── api.js
├── main.jsx
├── testeApi.js
index.html
package.json
vite.config.js
README.md
```

## Observações importantes

- A API usada é o `JSONPlaceholder`, que é apenas uma API de testes.
- Ela não salva dados de forma persistente.
- Por isso, um usuário recém-criado pode não existir de fato no servidor e operações como edição ou exclusão podem retornar erro no backend simulado.
- A aplicação inclui botões para testar cenários de erro 404 e 500 para mostrar o comportamento do tratamento centralizado.

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run preview
```
