const express = require('express');
const router = express.Router();
const informantController = require('../../controllers/Informant.controller')

router
//http://localhost:8080/api/informant/
    .get("/lists", informantController.informantList)
    .get("/findOne/:id", informantController.findOneinformant)
    .post("/create", informantController.createinformant)
    .patch("/update/:id", informantController.updateinformant)
    .delete("/delete/:id", informantController.deleteinformant)

module.exports = router;