'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlumnoEsquema = Schema({
  dni: {type: String},
  nombre: {type: String},
  apellido: {type: String},
  edad: {type: Number},
  genero: {type: String},
  ciclo: {type: String}
})

module.exports = mongoose.model('Alumno', AlumnoEsquema)
