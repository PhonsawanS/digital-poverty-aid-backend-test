const express = require('express');
const router = express.Router();
const ExportExcelController = require('../../controllers/ExportExcel.controller')

router
    .get("/get", ExportExcelController.householdList)
    .get("/gethousehold", ExportExcelController.gethousehold)

module.exports = router;