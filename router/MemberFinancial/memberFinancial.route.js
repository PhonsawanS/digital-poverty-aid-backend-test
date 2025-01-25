const express = require('express')
const router = express.Router()
const { auth, allowRole } = require('../../middleware/auth')
const MemberFinancialController = require('../../controllers/MemberFinancial.controller')

router
    .get('/list',MemberFinancialController.list)
    .post('/create',auth,MemberFinancialController.create)
    .get('/LastFinancial/:id',MemberFinancialController.getLastFinancial)

module.exports = router