function usuarioController(app) {

    app.get('/usuario', (req, res) => {
        res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
    });

    app.post('/usuario', (req, res) => {
        console.log('Rota POST de usuario ativada: usuário adicionado ao bando de dados')
        res.send(req.body)
    })

}

module.exports = usuarioController;