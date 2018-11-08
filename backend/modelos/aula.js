'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AulaEsquema = Schema({
  AulaNumMacEst : {type :String},
  AulaEst: {type : String}
})

module.exports = mongoose.model('Aula', AulaEsquema)
