const express = require('express')
const router = express.Router()
const MailController = require('../../controllers/MailerController/Mail.controller')



router
    //Send Email
    .get('/tester',MailController.sendEmail)

    .post('/forgot-password',MailController.forgotPass) 
    .get('/reset-password/:id/:token',MailController.checkToken)
    .post('/reset-password/:id/:token',MailController.resetPassword)

    module.exports = router