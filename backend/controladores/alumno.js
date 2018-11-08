'use strict'
const Alumno = require('../modelos/alumno');

function getAlumno (req, res) {
  let alumnoId = req.params.alumnoId

  Alumno.findById(alumnoId, (err, alumno) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!alumno) return res.status(400).send({message: `el alumno no existe `})

    res.status(200).send({ alumno })
  })
}

function getAlumnos (req, res) {
  Alumno.find({},(err, alumnos) =>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!alumnos) return res.status(404).send({message: `No existen alumnos `})

    res.status(200).send({alumnos})
  })
}

function saveAlumno(req, res) {
  //console.log('Post /api/alumno')
  //console.log(req.body)
  let alumno =  new Alumno()
  alumno.dni = req.body.dni
  alumno.nombre = req.body.nombre
  alumno.apellido = req.body.apellido
  alumno.edad = req.body.edad
  alumno.genero = req.body.genero
  alumno.ciclo = req.body.ciclo
  alumno.save((err, alumnoStored) => {
    if(err) res.status(500).send({message:` error al salvar la bd: ${err} `})
    res.status(200).send({alumno :alumnoStored})
  })
}

function updateAlumno (res, req) {
  let alumnoId = req.params.alumnoId
  let update = req.body
  Alumno.findByIdAndUpdate(alumnoId, update, (err,alumnoUpdate) => {
    if(err) res.status(500),send({message:`error al actualizar al alumno ${err}`})
    res.status(200).send({ alumno: alumnoId })
  })
}

function deleteAlumno (req, res) {
  let alumnoId = req.params.alumnoId
  Alumno.findById(alumnoId, (err, alumno) =>{
    if(err) res.status(500),send({message:`error al borrar al alumno ${err}`})
    alumno.remove(err => {
      if(err) res.status(500),send({message:`error al borrar al alumno ${err}`})
        res.status(200).send({message: `El alumno ha sido eliminado`})
    })
  })
}

module.exports = {
  getAlumno,
  getAlumnos,
  saveAlumno,
  updateAlumno,
  deleteAlumno
}
