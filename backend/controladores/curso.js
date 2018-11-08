'use strict'
const Curso = require('../modelos/curso');

function getCurso (req, res) {
  let cursoId = req.params.cursoId

  Curso.findById(cursoId, (err, curso) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!curso) return res.status(400).send({message: `el curso no existe `})

    res.status(200).send({ curso })
  })
}

function getCursos (req, res) {
  Curso.find({},(err, cursos) =>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!cursos) return res.status(404).send({message: `No existen cursos `})

    res.status(200).send({cursos})
  })
}

function saveCurso(req, res) {
  console.log('Post /api/curso')
  console.log(req.body)

  let curso =  new Curso()
  curso.CurCod = req.body.CurCod
  curso.CurProfId = req.body.CurProfId
  curso.CurNom = req.body.CurNom
  curso.CurEst = req.body.CurEst
  curso.Descripcion = req.body.Descripcion

  curso.save((err, cursoStored) => {
    if(err) res.status(500).send({message:` error al salvar la bd: ${err} `})

    res.status(200).send({curso :cursoStored})
  })
}

function updateCurso (res, req) {
  let cursoId = req.params.cursoId
  let update = req.body
  Curso.findByIdAndUpdate(cursoId, update, (err,cursoUpdate) => {
    if(err) res.status(500),send({message:`error al actualizar al curso ${err}`})

    res.status(200).send({ curso: cursoId })
  })
}

function deleteCurso (req, res) {
  let cursoId = req.params.cursoId
  Curso.findById(cursoId, (err, curso) =>{
    if(err) res.status(500),send({message:`error al borrar al curso ${err}`})
    curso.remove(err => {
      if(err) res.status(500),send({message:`error al borrar al curso ${err}`})
        res.status(200).send({message: `El curso ha sido eliminado`})
    })
  })
}

module.exports = {
  getCurso,
  getCursos,
  saveCurso,
  updateCurso,
  deleteCurso
}
