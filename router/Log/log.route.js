const express = require('express');
const router = express.Router();
const logController = require('../../controllers/log.controller')
const { auth } = require('../../middleware/auth');

router
    //http://localhost:8080/api/log/
    .get("/lists", logController.getLoglist)
    .get("/list", auth,logController.listLog)

module.exports = router