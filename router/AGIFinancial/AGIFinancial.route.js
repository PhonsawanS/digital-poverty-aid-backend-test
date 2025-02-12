const express = require('express')
const router = express.Router()
const AGIFinancialController = require('../../controllers/AGIFinancial.controller')

router
    .post('/create',AGIFinancialController.create)
    .get('/list',AGIFinancialController.list)


module.exports = router