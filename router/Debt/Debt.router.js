const express = require('express');
const router = express.Router();
const debtController = require('../../controllers/debt.controller');

router
    //http://localhost:8080/api/debt/
    .get("/lists", debtController.NonAgiIncomeList)
    .get("/findOne/:id", debtController.findOneNonAgiIncome)
    .post("/create", debtController.createNonAgiIncome)
    .patch("/update/:id", debtController.updateNonAgiIncome)
    .delete("/delete/:id", debtController.deleteNonAgiIncome)

module.exports = router;

