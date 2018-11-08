'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatriculaEsquema = Schema({
    alumno : {type: Schema.ObjectId ,ref:'Alumno'},
    grado : {type:Schema.ObjectId, ref:'Grado'},
    seccion : {type: Schema.ObjectId, ref:'Seccion'},
    aula :{type: Schema.ObjectId, ref:'Aula'}
})

//Cambio

module.exports = mongoose.model('Matricula', MatriculaEsquema)
