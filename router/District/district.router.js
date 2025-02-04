const express = require('express');
const router = express.Router();
const districtController = require('../../controllers/district.controller'); // Path แก้ไข

router
    .get("/fetch", districtController.fetchDistrictData)
    .get("/get", districtController.getDistrictData)
    .get("/getlatest", districtController.getDatalatest)
    .post("/fetch-data", districtController.fetchDataFromApi);

module.exports = router;