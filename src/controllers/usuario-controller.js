function usuarioController(app) {

    app.get('/usuario', (req, res) => {
        res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
    })

}

module.exports = usuarioController;