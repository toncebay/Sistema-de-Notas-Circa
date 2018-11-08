'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GradoEsquema = Schema({
  nombre : {type :String},
  descripcion: {type : String}
})

module.exports = mongoose.model('Grado', GradoEsquema)
