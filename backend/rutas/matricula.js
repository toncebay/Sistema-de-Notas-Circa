'use strict'

const express = require('express');
const matriculaCtrl = require('../controladores/matricula');
const api = express.Router()

api.get('/matricula', matriculaCtrl.getMatriculas)
api.get('/matricula/:matriculaId', matriculaCtrl.getMatricula)
api.post('/matricula', matriculaCtrl.saveMatricula)
api.delete('/matricula/:matriculaId', matriculaCtrl.deleteMatricula)
api.put('/matricula/:matriculaId', matriculaCtrl.updateMatricula)


module.exports = api
