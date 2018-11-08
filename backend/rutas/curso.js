'use strict'

const express = require('express');
const cursoCtrl = require('../controladores/curso');
const api = express.Router()

api.get('/curso', cursoCtrl.getCursos)
api.get('/curso/:cursoId', cursoCtrl.getCurso)
api.post('/curso', cursoCtrl.saveCurso)
api.delete('/curso/:cursoId', cursoCtrl.deleteCurso)
api.put('/curso/:cursoId', cursoCtrl.updateCurso)


module.exports = api
