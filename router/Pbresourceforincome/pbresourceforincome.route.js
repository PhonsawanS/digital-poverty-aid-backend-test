const express = require('express');
const router = express.Router();
const pbresourceforincomeController = require('../../controllers/pbresourceforincome.controller')

router
    //http://localhost:8080/api/pbresourceforincome/
    .get("/lists", pbresourceforincomeController.PbresourceforincomeList)
    .get("/findOne/:id", pbresourceforincomeController.findOnePbresourceforincomeList)
    .post("/create", pbresourceforincomeController.createPbresourceforincome)
    .patch("/update/:id", pbresourceforincomeController.updatePbresourceforincome)
    .delete("/delete/:id", pbresourceforincomeController.deletePbresourceforincome)

module.exports = router