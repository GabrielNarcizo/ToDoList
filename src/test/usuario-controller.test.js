const express = require('express');
const app = express();
const request = require("supertest");
const bd = require("../test/database-test.db");
const usuarioController = require("../controllers/usuario-controller");

usuarioController(app, bd)


request(app)
    .get('/usuario')
    .expect(200)
    .end((err, res) => {
        if(err) {
            throw err
        } else {
            console.log('PASSOU!')
        };
    })