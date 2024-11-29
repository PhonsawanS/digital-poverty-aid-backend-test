const express = require('express');
const router = express.Router();
const houseindisasterareasController = require('../../controllers/Houseindisasterareas.controller')

router
    //http://localhost:8080/api/pbresourceforincome/
    .get("/lists", houseindisasterareasController.houseindisasterList)
    .get("/findOne/:id", houseindisasterareasController.findOnehouseindisasterList)
    .post("/create", houseindisasterareasController.createhouseindisaster)
    .patch("/update/:id", houseindisasterareasController.updatehouseindisaster)
    .delete("/delete/:id", houseindisasterareasController.deletehouseindisaster)

module.exports = router