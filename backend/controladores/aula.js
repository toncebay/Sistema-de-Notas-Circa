'use strict'
const Aula = require('../modelos/aula');

function getAula (req, res) {
  let aulaId = req.params.aulaId

  Aula.findById(aulaId, (err, aula) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!aula) return res.status(400).send({message: `el aula no existe `})

    res.status(200).send({ aula })
  })
}

function getAulas (req, res) {
  Aula.find({},(err, aulas) =>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!aulas) return res.status(404).send({message: `No existen aulas `})

    res.status(200).send({aulas})
  })
}

function saveAula(req, res) {
  console.log('Post /api/aula')
  console.log(req.body)
  let aula =  new Aula()
  aula.AulaNumMacEst = req.body.AulaNumMacEst
  aula.AulaEst = req.body.AulaEst

  aula.save((err, aulaStored) => {
    if(err) res.status(500).send({message:` error al salvar la bd: ${err} `})
    res.status(200).send({aula :aulaStored})
  })
}

function updateAula (res, req) {
  let aulaId = req.params.aulaId
  let update = req.body
  Aula.findByIdAndUpdate(aulaId, update, (err,aulaUpdate) => {
    if(err) res.status(500),send({message:`error al actualizar al aula ${err}`})
    res.status(200).send({ aula: aulaId })
  })
}

function deleteAula (req, res) {
  let aulaId = req.params.aulaId
  Aula.findById(aulaId, (err, aula) =>{
    if(err) res.status(500),send({message:`error al borrar al aula ${err}`})
    aula.remove(err => {
      if(err) res.status(500),send({message:`error al borrar al aula ${err}`})
        res.status(200).send({message: `El aula ha sido eliminado`})
    })
  })
}

module.exports = {
  getAula,
  getAulas,
  saveAula,
  updateAula,
  deleteAula
}
