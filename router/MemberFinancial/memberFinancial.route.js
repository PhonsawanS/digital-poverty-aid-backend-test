const express = require('express')
const router = express.Router()
const MemberFinancialController = require('../../controllers/MemberFinancial.controller')

router
    .get('/list',MemberFinancialController.list)
    .post('/create',MemberFinancialController.create)

module.exports = router