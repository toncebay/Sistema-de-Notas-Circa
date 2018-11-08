'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfesorEsquema = Schema({
  ProfDni: {type: String},
  ProfNom: {type: String},
  ProfApe: {type: String},
  ProfEdad: {type: Number},
  ProfFecNacDia :{type: Number},
  ProfFecNacMes :{type: Number},
  ProfFecNacAnio :{type: Number},
  ProfGenero: {type: String, enum:['masculino','femenino']},
  ProfTel :{type: Number},
  ProfCorreo : {type : String}
})

//Cambio

module.exports = mongoose.model('Profesor', ProfesorEsquema)
