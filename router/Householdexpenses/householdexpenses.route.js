const express = require('express');
const router = express.Router();
const householdexpensesController = require('../../controllers/Householdexpenses.controller')

router
    //http://localhost:8080/api/houseHoldexpenses/
    .get("/lists", householdexpensesController.HouseholdexpensesList)
    .get("/findOne/:id", householdexpensesController.findOneHouseholdexpenses)
    .post("/create", householdexpensesController.createHouseholdexpenses)
    .patch("/update/:id", householdexpensesController.updateHouseholdexpenses)
    .delete("/delete/:id", householdexpensesController.deleteHouseholdexpenses)

module.exports = router