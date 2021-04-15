const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const bd = require('./infra/sqlite-db');
const app = express();
const port = 3000;
const usuarioController = require('./Controllers/usuario-controller')
const tarefaController = require('./Controllers/tarefa-controller')

app.use(bodyParser.json());
app.use(cors())

usuarioController(app, bd);
tarefaController(app, bd);

app.listen(port, () => {
    console.log(chalk.green('[SUCESSO]: '),`Example app listening at http://localhost:${port}`)
});

