const express = require('express');
const app = express()
const port = 3000

const usuarioController = require('./Controllers/usuario-controller')
const tarefaController = require('./Controllers/tarefa-controller')

usuarioController(app);
tarefaController(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
