const usuarioModelo = require("../models/usuario-model")
const { response } = require("express");

function usuarioController(app, bd) {

    app.get('/usuario', (req, res) => {
        console.log('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
        const usuarios = bd.usuarios
        res.send(usuarios)
    });

    app.post('/usuario', (req, res) => {
        const body = req.body
        let userModelo = new usuarioModelo(body.id, body.username);
        bd.usuarios.push(userModelo)
        if(body.id && body.username){
        console.log('Rota POST de usuario ativada: usuário adicionado ao bando de dados')
        console.log(JSON.stringify(userModelo))
        res.send(userModelo)   
        }
        res.send('Informe todos os campos')
    })

}

module.exports = usuarioController;