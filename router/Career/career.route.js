const express = require('express');
const router = express.Router()
const CareerController = require('../../controllers/Career.controller')
const { auth, allowRole } = require('../../middleware/auth')

router 
    .get('/list',CareerController.list)
    .post('/create',auth,CareerController.create)

    module.exports = router