'use strict'
const Seccion = require('../modelos/seccion');

function getSeccion (req, res) {
  let seccionId = req.params.seccionId

  Seccion.findById(seccionId, (err, seccion) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!seccion) return res.status(400).send({message: `el seccion no existe `})

    res.status(200).send({ seccion })
  })
}

function getSeccions (req, res) {
  Seccion.find({},(err, seccions) =>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!seccions) return res.status(404).send({message: `No existen seccions `})

    res.status(200).send({seccions})
  })
}

function saveSeccion(req, res) {
  console.log('Post /api/seccion')
  console.log(req.body)
  let seccion =  new Seccion()
  seccion.nombre = req.body.nombre
  seccion.descripcion = req.body.descripcion
  seccion.estado = req.body.estado

  seccion.save((err, seccionStored) => {
    if(err) res.status(500).send({message:` error al salvar la bd: ${err} `})
    res.status(200).send({seccion :seccionStored})
  })
}

function updateSeccion (res, req) {
  let seccionId = req.params.seccionId
  let update = req.body
  Seccion.findByIdAndUpdate(seccionId, update, (err,seccionUpdate) => {
    if(err) res.status(500),send({message:`error al actualizar al seccion ${err}`})
    res.status(200).send({ seccion: seccionId })
  })
}

function deleteSeccion (req, res) {
  let seccionId = req.params.seccionId
  Seccion.findById(seccionId, (err, seccion) =>{
    if(err) res.status(500),send({message:`error al borrar al seccion ${err}`})
    seccion.remove(err => {
      if(err) res.status(500),send({message:`error al borrar al seccion ${err}`})
        res.status(200).send({message: `El seccion ha sido eliminado`})
    })
  })
}

module.exports = {
  getSeccion,
  getSeccions,
  saveSeccion,
  updateSeccion,
  deleteSeccion
}
