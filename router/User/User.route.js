const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/User.controller')
const { auth } = require('../../middleware/auth')


router
    .post('/register',UserController.register)
    .post('/login',UserController.login)
    .get('/currrentUser',auth,UserController.currentUser)
    // .get('/list',UserController.list)
    // .patch("/update/:id", UserController.updateUser)
    // .delete("/delete/:id", UserController.deleteUser)

    module.exports = router
