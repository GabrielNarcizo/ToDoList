const chalk = require('chalk');
const express = require('express');
const cors = require('cors')
const bd = require('./infra/sqlite-db');
const app = express();
const port = 3000;

const usuarioController = require('./controllers/usuario-controller')
const tarefaController = require('./controllers/tarefa-controller')

app.use(cors());
app.use(express.json());


usuarioController(app, bd);
tarefaController(app, bd);

app.listen(port, () => {
    console.log(chalk.green('[SUCESSO]: '),`Example app listening at http://localhost:${port}`)
});

