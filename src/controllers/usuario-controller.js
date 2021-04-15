const usuarioModelo = require("../models/usuario-model")
const usuarioDAO = require('../DAO/usuario-dao')

const { response } = require("express");

function usuarioController(app, bd) {

    const DAO = new usuarioDAO(bd)

    app.get('/usuarios', (req, res) => {
        DAO.listarUsuarios()
            .then((usuarios) => { res.send(usuarios) })
            .catch((err) => res.send('Falha ao listar os usuários')) 
    })

    

    app.get("/usuarios/:email", (req, res) =>{
        const usuarios = bd.usuario;
        const email = req.params.email;

        usuarios.forEach((usuario) => {
            console.log(usuario);
            if(email === usuario.email) {
                return res.send(usuario)
            } else {
                res.send('E-mail não cadastrado')
            }
        })
    });

    app.post('/usuarios', (req, res) => {
        const body = req.body
        let usuario = new usuarioModelo(0, body.nome, body.email, body.senha);
        
        bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?, ?, ?)'
            , [usuario.nome, usuario.email, usuario.senha]
            , (err) => { if (err) throw new Error(err)})

        res.send({mensagem: "Usuário criado com sucesso."})
    });

    app.delete('/usuarios/:email', (req, res) => {
        const usuarios = bd.usuario;
        const email = req.params.email;

        for(let i = 0; i < usuarios.length; i++){
            if(email === usuarios[i].email){
                usuarios.splice(i, 1);
                return res.send(`{"Mensagem: "<${email} deletado}`)
            } else {
                res.send(`${email} não encontrado`)
            }
        };        
    });

    app.put('/usuarios/:email', (req, res) =>{
        const body = req.body.email;
        let usuarios = bd.usuario;
        const email = req.params.email;

        for(let i = 0; i < usuarios.length; i++){
            if(email === usuarios[i].email){
                usuarios = body;
            };
        };

        res.send(`{"Mensagem: "<${email} atualizado}`)
    });

};

module.exports = usuarioController;