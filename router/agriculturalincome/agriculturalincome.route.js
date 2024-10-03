const express = require('express');
const router = express.Router();
const agriculturalincomeController = require('../../controllers/agriculturalincome.controller')

router
//http://localhost:8080/api/agriculturalincome/
    .get("/lists", agriculturalincomeController.AgriculturalincomeList)
    .get("/findOne/:id", agriculturalincomeController.findOneAgriculturalincome)
    .post("/create", agriculturalincomeController.createAgriculturalincome)
    .patch("/update/:id", agriculturalincomeController.updateAgriculturalincome)
    .delete("/delete/:id", agriculturalincomeController.deleteAgriculturalincome)
module.exports = router;