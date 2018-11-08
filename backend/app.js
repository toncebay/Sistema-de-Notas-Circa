'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req,res,next) => {
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY ,x-access-token,Origin, X-Requested-With, Accept , Content-Type , Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE,x-access-token');
	next();
});

//direcciones de las rutas en bd
const api = require('./rutas/alumno');
const aula = require('./rutas/aula');
const curso = require('./rutas/curso');
const grado = require('./rutas/grado');
const matricula = require('./rutas/matricula');
const nota = require('./rutas/nota');
const profesor = require('./rutas/profesor');
const seccion = require('./rutas/seccion');

app.use(bodyParser.urlencoded({ extended :false}))
app.use(bodyParser.json())

app.use('/api', api)
app.use('/api', profesor)
app.use('/api', curso)
app.use('/api', aula)
app.use('/api', grado)
app.use('/api', matricula)
app.use('/api', nota)
app.use('/api', seccion)

module.exports = app
