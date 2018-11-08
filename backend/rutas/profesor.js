'use strict'

const express = require('express');
const profesorCtrl = require('../controladores/profesor');
const api = express.Router()

api.get('/profesor', profesorCtrl.getProfesores)
api.get('/profesor/:profesorId', profesorCtrl.getProfesor)
api.post('/profesor', profesorCtrl.saveProfesor)
api.delete('/profesor/:profesorId', profesorCtrl.deleteProfesor)
api.put('/profesor/:profesorId', profesorCtrl.updateProfesor)


module.exports = api
