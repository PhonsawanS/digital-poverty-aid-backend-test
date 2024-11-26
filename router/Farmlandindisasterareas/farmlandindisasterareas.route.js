const express = require('express');
const router = express.Router();
const farmlandindisasterareasController = require('../../controllers/farmlandindisasterareas.controller')

router
    //http://localhost:8080/api/pbresourceforincome/
    .get("/lists", farmlandindisasterareasController.farmlandList)
    .get("/findOne/:id", farmlandindisasterareasController.findOnefarmlandList)
    .post("/create", farmlandindisasterareasController.createfarmland)
    .patch("/update/:id", farmlandindisasterareasController.updatefarmland)
    .delete("/delete/:id", farmlandindisasterareasController.deletefarmland)

module.exports = router