function tarefaController(app) {

    app.get('/tarefa', (req, res) => {
        res.send('Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados')
    })

}

module.exports = tarefaController;