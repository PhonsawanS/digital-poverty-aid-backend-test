const express = require('express');
const router = express.Router();
const nonAgiIncomeController = require('../../controllers/NonAgiIncome.controller')

router
    //http://localhost:8080/api/nonAGI/
    .get("/lists", nonAgiIncomeController.NonAgiIncomeList)
    .get("/findOne/:id", nonAgiIncomeController.findOneNonAgiIncome)
    .post("/create", nonAgiIncomeController.createNonAgiIncome)
    .patch("/update/:id", nonAgiIncomeController.updateNonAgiIncome)
    .delete("/delete/:id", nonAgiIncomeController.deleteNonAgiIncome)

module.exports = router