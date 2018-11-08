'use strict'

const express = require('express');
const aulaCtrl = require('../controladores/aula');
const api = express.Router()

api.get('/aula', aulaCtrl.getAulas)
api.get('/aula/:aulaId', aulaCtrl.getAula)
api.post('/aula', aulaCtrl.saveAula)
api.delete('/aula/:aulaId', aulaCtrl.deleteAula)
api.put('/aula/:aulaId', aulaCtrl.updateAula)


module.exports = api
