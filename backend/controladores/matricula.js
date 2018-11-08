'use strict'
const Matricula = require('../modelos/matricula');

function getMatricula (req, res) {
  let matriculaId = req.params.matriculaId

  Matricula.findById(matriculaId, (err, matricula) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!matricula) return res.status(400).send({message: `el matricula no existe `})

    res.status(200).send({ matricula })
  })
}

function getMatriculas (req, res) {
  Matricula.find({},(err, matriculas) =>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!matriculas) return res.status(404).send({message: `No existen matriculas `})

    res.status(200).send({matriculas})
  })
}

function saveMatricula(req, res) {
  console.log('Post /api/matricula')
  console.log(req.body)
  let matricula =  new Matricula()
  matricula.estudiante = req.body.estudiante
  matricula.grado = req.body.grado
  matricula.seccion = req.body.seccion
  matricula.aula = req.body.aula

  matricula.save((err, matriculaStored) => {
    if(err) res.status(500).send({message:` error al salvar la bd: ${err} `})
    res.status(200).send({matricula :matriculaStored})
  })
}

function updateMatricula (res, req) {
  let matriculaId = req.params.matriculaId
  let update = req.body
  Matricula.findByIdAndUpdate(matriculaId, update, (err,matriculaUpdate) => {
    if(err) res.status(500),send({message:`error al actualizar al matricula ${err}`})
    res.status(200).send({ matricula: matriculaId })
  })
}

function deleteMatricula (req, res) {
  let matriculaId = req.params.matriculaId
  Matricula.findById(matriculaId, (err, matricula) =>{
    if(err) res.status(500),send({message:`error al borrar al matricula ${err}`})
    matricula.remove(err => {
      if(err) res.status(500),send({message:`error al borrar al matricula ${err}`})
        res.status(200).send({message: `El matricula ha sido eliminado`})
    })
  })
}

module.exports = {
  getMatricula,
  getMatriculas,
  saveMatricula,
  updateMatricula,
  deleteMatricula
}
