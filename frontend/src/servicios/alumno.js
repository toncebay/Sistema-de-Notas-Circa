// import axios from 'axios'
const axios = require('axios')
const rutaGeneral = require('./general')
var ruta = rutaGeneral.rutaGeneral + 'alumno/'
function getAlumnos () {
  return axios.get(ruta, {
    headers: {'content-type': 'application/json;charset=UTF-8'}
  })
}
function getAlumno (idAlumno) {
  return axios.get(ruta + idAlumno, {
    headers: {'content-type': 'application/json;charset=UTF-8'}
  })
}
function deleteAlumno (idAlumno) {
  return axios.delete(ruta + idAlumno, {
    headers: {'content-type': 'application/json;charset=UTF-8'}
  })
}
function addAlumno (user) {
  return axios.post(ruta, user, {
    headers: {'content-type': 'application/json;charset=UTF-8'}
  })
}
function updateAlumno (idAlumno, user) {
  return axios.put(ruta + idAlumno, user, {
    headers: {'content-type': 'application/json;charset=UTF-8'}
  })
}
function ingresoLogin (user) {
  var rutaLogin = rutaGeneral.rutaGeneral + 'loginUser/'
  return axios.post(rutaLogin, user, {
    headers: {'content-type': 'application/json;charset=UTF-8'}
  })
}
module.exports = {
  getAlumno,
  getAlumnos,
  addAlumno,
  deleteAlumno,
  updateAlumno,
  ingresoLogin
}
