const express = require('express');
const router = express.Router();
const FinancialCapitalController = require('../../controllers/Financialcapital.controller')

router
//http://localhost:8080/api/financialCapital/
    .get("/lists", FinancialCapitalController.FinancialCapitalList)
    .get("/findOne/:id", FinancialCapitalController.findOneFinancialCapital)
    .post("/create", FinancialCapitalController.createFinancialCapital)
    .patch("/update/:id", FinancialCapitalController.updateFinancialCapital)
    .delete("/delete/:id", FinancialCapitalController.deleteFinancialCapital)
    .post("/createWith", FinancialCapitalController.createFinancialCapitalWithSavings)
    .patch("/updateWith/:id", FinancialCapitalController.updateFinancialCapitalWithSavings)

module.exports = router;