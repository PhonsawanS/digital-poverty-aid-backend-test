const express = require('express');
const router = express.Router();
const FormInsertAllController = require('../../controllers/FormInsertAllController')

// const { auth,allowRole } = require('../../middleware/auth')


router
    .post('/create',FormInsertAllController.create)
module.exports = router;