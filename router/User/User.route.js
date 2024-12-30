const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/User.controller')
const { auth, allowRole } = require('../../middleware/auth')

const MailController = require('../../controllers/MailerController/Mail.controller')


router
    //Auth
    .post('/register',UserController.register)
    .post('/login',UserController.login)
    .get('/currrentUser',auth,UserController.currentUser)
    
    //CRUD
    .get('/list',auth,UserController.userList) //Return only user that has role
    .get('/findOne/:id',UserController.findOneUser)
    .delete('/delete/:id',auth,allowRole(['superAdmin']),UserController.deleteUser)

    //Others
    .get('/findNonAppove',auth,UserController.findNonApprove)
    .put('/approve/:id',auth,allowRole(['superAdmin']),UserController.approveUser)


    module.exports = router
