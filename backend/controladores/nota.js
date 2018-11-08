'use strict'
const Nota = require('../modelos/nota');

function getNota (req, res) {
  let notaId = req.params.notaId

  Nota.findById(notaId, (err, nota) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!nota) return res.status(400).send({message: `el nota no existe `})

    res.status(200).send({ nota })
  })
}

function getNotas (req, res) {
  Nota.find({},(err, notas) =>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!notas) return res.status(404).send({message: `No existen notas `})

    res.status(200).send({notas})
  })
}

function saveNota(req, res) {
  console.log('Post /api/nota')
  console.log(req.body)
  let nota =  new Nota()
  nota.curso = req.body.curso
  nota.periodo = req.body.periodo
  nota.competenciaA = req.body.competenciaA
  nota.competenciaB = req.body.competenciaB
  nota.competenciaC = req.body.competenciaC
  nota.competenciaD = req.body.competenciaD
  nota.competenciaE = req.body.competenciaE
  nota.promedio = req.body.promedio

  nota.save((err, notaStored) => {
    if(err) res.status(500).send({message:` error al salvar la bd: ${err} `})
    res.status(200).send({nota :notaStored})
  })
}

function updateNota (res, req) {
  let notaId = req.params.notaId
  let update = req.body
  Nota.findByIdAndUpdate(notaId, update, (err,notaUpdate) => {
    if(err) res.status(500),send({message:`error al actualizar al nota ${err}`})
    res.status(200).send({ nota: notaId })
  })
}

function deleteNota (req, res) {
  let notaId = req.params.notaId
  Nota.findById(notaId, (err, nota) =>{
    if(err) res.status(500),send({message:`error al borrar al nota ${err}`})
    nota.remove(err => {
      if(err) res.status(500),send({message:`error al borrar al nota ${err}`})
        res.status(200).send({message: `El nota ha sido eliminado`})
    })
  })
}

module.exports = {
  getNota,
  getNotas,
  saveNota,
  updateNota,
  deleteNota
}
