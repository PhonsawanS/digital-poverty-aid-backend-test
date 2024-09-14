const express = require('express');
const router = express.Router();
const houseHoldProblemController = require('../../controllers/houseHoldProblem.controller');

router
//http://localhost:8080/api/houseHoldProblem/update/1
    .get("/lists", houseHoldProblemController.houseHoldProblemList)
    .get("/findOne/:id", houseHoldProblemController.findOnehouseHoldProblem)
    .post("/create", houseHoldProblemController.createhouseHoldProblem)
    .patch("/update/:id", houseHoldProblemController.updatehouseHoldProblem)
    .delete("/delete/:id", houseHoldProblemController.deletehouseHoldProblem)

module.exports = router;