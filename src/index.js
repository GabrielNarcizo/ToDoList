const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./infra/bd')
const app = express()
const port = 3000

const usuarioController = require('./Controllers/usuario-controller')
const tarefaController = require('./Controllers/tarefa-controller')

app.use(bodyParser.json())
usuarioController(app, bd);
tarefaController(app, bd);

app.listen(port, () => {
    console.log(chalk.green('[SUCESSO]: '),`Example app listening at http://localhost:${port}`)
});

