# Projeto ToDo API com Node.js

Projeto feito durando o **módulo 3** da Resilia educação, o desafio era criar uma API Rest com Node.js para uma ToDo List.

### Tecnologias ⚒📚:
- **Node.js**
- **NPM**
- **Cors**
- **Javascript**
-  **Chalk**
- **Sqlite3**
- **Express.js**


### Requisitos🔐
##### O projeto deverá obrigatoriamente: 
- Utilizar o padrão MVC; 
- Utilizar os verbos HTTP seguindo o padrão REST; 
- Implementar todas as operações de CRUD; 
- Utilizar o padrão de projeto (design pattern) DAO para abstração de transações no banco, com Promises; 
- Utilizar o README.md do repositório para documentação, contendo informações como: 
- Como instalar as dependências do projeto; 
- Como executar o projeto; 
- Quais são as rotas possíveis; 
- Quaisquer outros pontos que você achar necessários; 
- Ter o código fonte hospedado em um repositório no Github. 

##### Os dados necessários para cada uma das entidades são: 
- **Usuários 👩‍🏫:** 
	id 
	nome 
	email 
	senha 
- **Tarefas ⏳:** 
	id 
	título 
	descrição 
	status 
	data de criação 
	id do usuário que é dono 

### As rotas a serem desenvolvidas para as entidades são: 
#### '/usuario' 👨‍🎓: 
	Listagem de todos os usuários 
	Listagem de um único usuário com base em um parâmetro de rota Inserção de um usuário 
	Modificação de um usuário 
	Deleção de um usuários 
#### '/tarefa' ⚙: 
	Listagem de todas as tarefas 
	Listagem de uma tarefa com base em um parâmetro de rota Inserção de uma tarefa 
	Modificação de uma tarefa 
	Deleção de uma tarefa

## Instalando as dependências do projeto 💻⌨

O projeto é em Node.js então precisa ter o node instalado: https://nodejs.org/en/

***A partir daqui as instalações serão no terminal, segue a lista de comandos***

**NPM:**
- `npm install`
- `npm init`

**Chalk**
- `npm i chalk --save`

**Express**
- `npm install express --save`

**Cors**
- `npm i cors`

**Sqlite3**
- `npm i sqlite3@latest --save`

### Executar projeto 🔙🔚:
Depois de instalar todas as dependências, rode o comando no terminal para a aplicação ser iniciada:
- `npm run start`

### Autor: 
**Eli Gabriel Narcizo**
