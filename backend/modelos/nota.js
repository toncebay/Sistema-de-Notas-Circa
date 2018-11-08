'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotaEsquema = Schema({
  curso : {type: Schema.ObjectId, ref:'Curso'},
  periodo: {type: Schema.ObjectId, ref:'Periodo'},
  competenciaA: {type: Number},
  competenciaB: {type: Number},
  competenciaC: {type: Number},
  competenciaD: {type: Number},
  competenciaE: {type: Number},
  promedio :{type: Number}

})

module.exports = mongoose.model('Nota', NotaEsquema)
