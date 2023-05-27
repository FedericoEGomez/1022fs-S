const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')
const {validarId}= require('../middlewares/validarId')
const checks = require('../middlewares/cheks')
const {validarChecks}= require('../middlewares/validarChecks')



// metodo http - una expresion - middleware - callback
router.get('/hello', apiController.hello)
router.get('/ver', apiController.verListado)
router.get('/listado/categoria/:categoria', apiController.listadoPorCategoria)
router.get('/buscar/id/:id',validarId,apiController.buscarPorId)
router.get('/buscar/nombre/:nombre',apiController.buscarPorClub)
router.post('/crear',checks,validarChecks,apiController.crear)
router.put('/editar/:id',validarId,checks,validarChecks,apiController.editar)
router.delete('/borrar/:id',validarId, apiController.borrar)

module.exports = router