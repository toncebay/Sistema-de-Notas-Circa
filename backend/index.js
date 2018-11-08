'use strict'
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res) => {
  if(err) {
    return console.log(`Error al conectar a bas de datos: ${err}`)
  }
  console.log('Coneccion a la base de datos extablecida')

  app.listen(config.port, () => {
    console.log('API REST corriendo');
  })
})
