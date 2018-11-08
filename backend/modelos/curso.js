'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CursoEsquema = Schema({
  CurCod: {type: String},
  CurNom : {type: String},
  CurEst : {type: String},
  Descripcion : {type: String},
  CurProfId : {type: Schema.ObjectId }
})

//Cambio

module.exports = mongoose.model('Curso', CursoEsquema)
