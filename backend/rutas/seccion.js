'use strict'

const express = require('express');
const seccionCtrl = require('../controladores/seccion');
const api = express.Router()

api.get('/seccion', seccionCtrl.getSeccions)
api.get('/seccion/:seccionId', seccionCtrl.getSeccion)
api.post('/seccion', seccionCtrl.saveSeccion)
api.delete('/seccion/:seccionId', seccionCtrl.deleteSeccion)
api.put('/seccion/:seccionId', seccionCtrl.updateSeccion)

module.exports = api
