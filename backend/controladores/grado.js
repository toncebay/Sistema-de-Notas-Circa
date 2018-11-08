'use strict'
const Grado = require('../modelos/grado');

function getGrado (req, res) {
  let gradoId = req.params.gradoId

  Grado.findById(gradoId, (err, grado) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!grado) return res.status(400).send({message: `el grado no existe `})

    res.status(200).send({ grado })
  })
}

function getGrados (req, res) {
  Grado.find({},(err, grados) =>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!grados) return res.status(404).send({message: `No existen grados `})

    res.status(200).send({grados})
  })
}

function saveGrado(req, res) {
  console.log('Post /api/grado')
  console.log(req.body)
  let grado =  new Grado()
  grado.nombre = req.body.nombre
  grado.descripcion = req.body.descripcion

  grado.save((err, gradoStored) => {
    if(err) res.status(500).send({message:` error al salvar la bd: ${err} `})
    res.status(200).send({grado :gradoStored})
  })
}

function updateGrado (res, req) {
  let gradoId = req.params.gradoId
  let update = req.body
  Grado.findByIdAndUpdate(gradoId, update, (err,gradoUpdate) => {
    if(err) res.status(500),send({message:`error al actualizar al grado ${err}`})
    res.status(200).send({ grado: gradoId })
  })
}

function deleteGrado (req, res) {
  let gradoId = req.params.gradoId
  Grado.findById(gradoId, (err, grado) =>{
    if(err) res.status(500),send({message:`error al borrar al grado ${err}`})
    grado.remove(err => {
      if(err) res.status(500),send({message:`error al borrar al grado ${err}`})
        res.status(200).send({message: `El grado ha sido eliminado`})
    })
  })
}

module.exports = {
  getGrado,
  getGrados,
  saveGrado,
  updateGrado,
  deleteGrado
}
