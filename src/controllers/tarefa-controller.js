const tarefaModelo = require("../models/tarefa-model")
function tarefaController(app, bd) {

    app.get('/tarefa', (req, res) => {
        console.log('Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados')
        const tarefas = bd.tarefas
        res.send(tarefas)
    });

    app.post('/tarefa', (req, res) => {
        const body = req.body
        let tarModelo = new tarefaModelo(body.id, body.task, body.status, body.data);
        
        
        if(body.id && body.task && body.status, body.data){
            bd.tarefas.push(tarModelo)

            console.log(JSON.stringify(tarModelo))
            res.send(tarModelo)   
        }
        res.send('Informe todos os campos')
    })

}

module.exports = tarefaController;