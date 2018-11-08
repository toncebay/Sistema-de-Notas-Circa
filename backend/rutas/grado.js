'use strict'

const express = require('express');
const gradoCtrl = require('../controladores/grado');
const api = express.Router()

api.get('/grado', gradoCtrl.getGrados)
api.get('/grado/:gradoId', gradoCtrl.getGrado)
api.post('/grado', gradoCtrl.saveGrado)
api.delete('/grado/:gradoId', gradoCtrl.deleteGrado)
api.put('/grado/:gradoId', gradoCtrl.updateGrado)


module.exports = api
