'use strict'
const Profesor = require('../modelos/profesor');

function getProfesor (req, res) {
  let profesorId = req.params.profesorId

  Profesor.findById(profesorId, (err, profesor) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!profesor) return res.status(400).send({message: `el profesor no existe `})

    res.status(200).send({ profesor })
  })
}

function getProfesores (req, res) {
  Profesor.find({},(err, profesors) =>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!profesors) return res.status(404).send({message: `No existen profesors `})

    res.status(200).send({profesors})
  })
}

function saveProfesor(req, res) {
  console.log('Post /api/profesor')
  console.log(req.body)

  let profesor =  new Profesor()
  profesor.ProfDni = req.body.ProfDni
  profesor.ProfNom = req.body.ProfNom
  profesor.ProfApe = req.body.ProfApe
  profesor.ProfEdad = req.body.ProfEdad
  profesor.ProfFecNacDia = req.body.ProfFecNacDia
  profesor.ProfFecNacMes = req.body.ProfFecNacMes
  profesor.ProfFecNacAnio = req.body.ProfFecNacAnio
  profesor.ProfGenero = req.body.ProfGenero
  profesor.ProfCorreo = req.body.ProfCorreo

  profesor.save((err, profesorStored) => {
    if(err) res.status(500).send({message:` error al salvar la bd: ${err} `})

    res.status(200).send({profesor :profesorStored})
  })
}

function updateProfesor (res, req) {
  let profesorId = req.params.profesorId
  let update = req.body
  Profesor.findByIdAndUpdate(profesorId, update, (err,profesorUpdate) => {
    if(err) res.status(500),send({message:`error al actualizar al profesor ${err}`})

    res.status(200).send({ profesor: profesorId })
  })
}

function deleteProfesor (req, res) {
  let profesorId = req.params.profesorId
  Profesor.findById(profesorId, (err, profesor) =>{
    if(err) res.status(500),send({message:`error al borrar al profesor ${err}`})
    profesor.remove(err => {
      if(err) res.status(500),send({message:`error al borrar al profesor ${err}`})
        res.status(200).send({message: `El profesor ha sido eliminado`})
    })
  })
}

module.exports = {
  getProfesor,
  getProfesores,
  saveProfesor,
  updateProfesor,
  deleteProfesor
}
