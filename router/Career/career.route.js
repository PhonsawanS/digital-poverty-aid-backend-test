const express = require('express');
const router = express.Router()
const CareerController = require('../../controllers/Career.controller')

router 
    .get('/list',CareerController.list)
    .post('/create',CareerController.create)

    module.exports = router