'use strict'

const express = require('express');
const notaCtrl = require('../controladores/nota');
const api = express.Router()

api.get('/nota', notaCtrl.getNotas)
api.get('/nota/:notaId', notaCtrl.getNota)
api.post('/nota', notaCtrl.saveNota)
api.delete('/nota/:notaId', notaCtrl.deleteNota)
api.put('/nota/:notaId', notaCtrl.updateNota)


module.exports = api
