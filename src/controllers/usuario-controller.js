const UsuarioModel = require("../models/usuario-model")
const UsuarioDAO = require('../DAO/usuario-dao')


function usuarioController(app, bd) {

    const DAO = new UsuarioDAO(bd);

    app.get('/usuario', async (req, res) => {
        try {
            let usuario = await DAO.listarUsuarios()
            res.status(200).send(usuario);
        } catch (e) {
            res.status(500).send({mensagem: "Falha ao listar usuarios."})
        }
        
    });

    
    app.get("/usuario/:email", async (req, res) =>{
        try{
            let email = req.params.email;
            let usuarioEmail = await DAO.listarEmail(email)
            res.status(200).send(usuarioEmail);
        } catch (e) {
            res.status(500).send({mensagem: "Falha ao listar usuario."})
        }

    });

    app.post('/usuario', async (req, res) => {
        try {
            const body = req.body;
            let usuarios = new UsuarioModel(0, body.NOME, body.EMAIL, body.SENHA);
            const novoUsuario = await DAO.inserirUsuario(usuarios);
            res.status(201).send(novoUsuario)

        } catch (e) {
            res.status(500).send({mensagem: "Falha ao criar novo usuario."})
        }
        
    });
    
    app.put('/usuario/:email', async (req, res) =>{
        try {
            const body = req.body;
            let email = req.params.email;
            await DAO.alterarUsuario(email, body)
            res.status(202).send({mensagem: "Usuario alterado com sucesso!"})

        } catch (e) {
            res.satus(500).send({mensagem: "Falha ao alterar usuario."})
        }
        

    });

    app.delete('/usuario/:email', async(req, res) => {
        try {
            let email = req.params.email;
            await DAO.deletarUsuario(email);
            res.status(200).send({mensagem:  "Usuario deletado com sucesso!"})
        } catch (e) {
            res.status(500).send({mensagem: "Falha ao remover usuario."})
        }
        
    });

};

module.exports = usuarioController;