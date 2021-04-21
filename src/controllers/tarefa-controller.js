const tarefaModelo = require("../models/tarefa-model")
const tarefaDAO = require("../DAO/tarefa-dao")



function tarefaController(app, bd) {
    
    const DAO = new tarefaDAO(bd)
    
    app.get('/tarefa', async (req, res) => {
        try {
            let tarefa = await DAO.listarTarefa();
            res.status(200).send(tarefa);
        } catch (e) {
            res.status(500).send({mensagem: "Falha ao listar tarefas."});
        }
        
    });

    app.get('/tarefa/:titulo', async (req, res) => {
        try {
            const titulo = req.params.titulo
            let tarefaTitulo = await DAO.listarTitulo(titulo);
            res.status(200).send(tarefaTitulo)
        } catch (e) {
         res.status(500).send({mensagem: "Falha ao listar tarefa."})
        }
    });

    app.post('/tarefa', async (req, res) => {
        try {
            const body = req.body;
            let tarefa = new tarefaModelo(0, body.titulo, body.descricao, body.status, body.datacriacao, body.id_usuario);
            let novaTarefa = await DAO.inserirTarefa(tarefa);
            res.status(201).send(novaTarefa)
        } catch (e) {
            res.status(400).send({mensagem: "Falha ao criar tarefa."})
        }
    });
    
    app.put('/tarefa/:titulo', async (req, res) =>{
        try {
            const body = req.body;
            let titulo = req.params.titulo;
            await DAO.alterarTarefa(titulo, body)
            res.status(202).send({mensagem: "Tarefa alterada com sucesso!"})
        } catch (e){
            res.status(500).send({mensagem: "Falha ao alterar tarefa."})
        }
        
    });

    app.delete('/tarefa/:titulo', async (req, res) => {
        try {
            let titulo = req.params.titulo;
            await DAO.deletarTarefa(titulo)
            res.status(200).send({mensagem: "Tarefa removida com sucesso!"})
        } catch (e) {
            res.status(500).send({mensagem: "Falha ao remover tarefa."}) 
        }
    });

}

module.exports = tarefaController;