const express = require('express');
const router = express.Router();
const naturalresourcecapitalController = require('../../controllers/Naturalresourcecapital.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
//http://localhost:8080/api/naturalresourcecapital/
    .get("/lists", naturalresourcecapitalController.naturalresourcecapitalList)
    .get("/findOne/:id", naturalresourcecapitalController.findOnenaturalresourcecapital)
    .post("/create", naturalresourcecapitalController.createnaturalresourcecapital)
    .patch("/update/:id", naturalresourcecapitalController.updatenaturalresourcecapital)
    .delete("/delete/:id", naturalresourcecapitalController.deletenaturalresourcecapital)

module.exports = router;