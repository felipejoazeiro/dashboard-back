const router = require('express').Router()

const EntregaController = require('../../../controllers/EntregaController')

const {LojaValidation} = require('../../../controllers/validacoes/lojaValidation')
const Validation = require('express')
const {EntregaValidation} = require('../../../controllers/validacoes/entregaValidation')
const auth = require('../../auth')

const entregaController = new EntregaController()

router.get('/:id', auth.required, Validation(EntregaValidation.show), entregaController.show)
router.put('/:id', auth.required, Validation(EntregaValidation.update), LojaValidation.admin, entregaController.update)
router.post('/calcular', Validation(EntregaValidation.calcular), entregaController.calcular)

module.exports = router