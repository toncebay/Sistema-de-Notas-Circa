'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SeccionEsquema = Schema({
  nombre : {type :String},
  descripcion: {type : String},
  estado: {type: String}
})

module.exports = mongoose.model('Seccion', SeccionEsquema)
