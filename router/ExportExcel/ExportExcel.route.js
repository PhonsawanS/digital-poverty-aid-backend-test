const express = require('express');
const router = express.Router();
const ExportExcelController = require('../../controllers/ExportExcel.controller')

router
    .get("/get", ExportExcelController.householdList)
    .get("/gethousehold", ExportExcelController.gethousehold)
    .get("/getFind", ExportExcelController.getFindhousehold)
    .get("/getYears", ExportExcelController.getYears);
module.exports = router;