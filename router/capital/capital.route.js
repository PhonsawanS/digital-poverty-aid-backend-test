const express = require('express')
const router = express.Router()
const capitalController = require('../../controllers/capital.controller')

router
    .get('/lists', capitalController.getCapital)

module.exports = router