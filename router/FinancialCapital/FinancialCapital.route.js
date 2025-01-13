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
    .post("/createWith", FinancialCapitalController.createCombined)
    .get("/getFinancialByHouseholdId/:householdId", FinancialCapitalController.findAllByHouseholdId)
    .get("/getIncomeSum/:householdId", FinancialCapitalController.findIncomeSum)
    .get("/getSavingSum/:householdId", FinancialCapitalController.findSavingSum)
    .get("/getDebtSum/:householdId", FinancialCapitalController.findDebtSum)
    .get("/getAllSum/:householdId", FinancialCapitalController.getAllFinancialData)
    .get("/countMember/:householdId", FinancialCapitalController.countMember);
module.exports = router;