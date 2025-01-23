const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/auth.controller')
const { auth,allowRole } = require('../../middleware/auth')


router
    .post("/register",AuthController.register)
    .post("/login", AuthController.login)
    .get("/current-user",auth, AuthController.currentUser)

module.exports = router;