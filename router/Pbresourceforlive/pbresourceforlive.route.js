const express = require('express');
const router = express.Router();
const pbresourceforliveController = require('../../controllers/pbresourceforlive.controller')

router
    //http://localhost:8080/api/pbresourceforlive/
    .get("/lists", pbresourceforliveController.PbresourceforliveList)
    .get("/findOne/:id", pbresourceforliveController.findOnePbresourceforliveList)
    .post("/create", pbresourceforliveController.createPbresourceforlive)
    .patch("/update/:id", pbresourceforliveController.updatePbresourceforlive)
    .delete("/delete/:id", pbresourceforliveController.deletePbresourceforlive)

module.exports = router