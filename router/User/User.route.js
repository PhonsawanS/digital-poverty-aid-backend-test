const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/User.controller')
const { auth, allowRole } = require('../../middleware/auth')



router

    //CRUD
    .get('/list',auth,UserController.userList) //Return only user that has role
    .get('/findOne/:id',UserController.findOneUser)
    .delete('/delete/:id',auth,allowRole(['superAdmin']),UserController.deleteUser)

    //Others
    .get('/findNonAppove',auth,UserController.findNonApprove)
    .put('/approve/:id',auth,allowRole(['superAdmin']),UserController.approveUser)
    .get('/login-history',auth,UserController.loginHistory)


    module.exports = router
