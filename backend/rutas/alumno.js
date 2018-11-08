'use strict'

const express = require('express');
const alumnoCtrl = require('../controladores/alumno');
const api = express.Router()

api.get('/alumno', alumnoCtrl.getAlumnos)
api.get('/alumno/:alumnoId', alumnoCtrl.getAlumno)
api.post('/alumno', alumnoCtrl.saveAlumno)
api.delete('/alumno/:alumnoId', alumnoCtrl.deleteAlumno)
api.put('/alumno/:alumnoId', alumnoCtrl.updateAlumno)


module.exports = api
