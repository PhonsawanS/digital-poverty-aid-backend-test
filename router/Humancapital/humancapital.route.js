const express = require('express');
const router = express.Router();
const humancapitalController = require('../../controllers/humancapital.controller')


router
    .get("/lists", humancapitalController.List)
    .get("/findOne/:id", humancapitalController.findOne)
    .post("/create", humancapitalController.create)
    .patch("/update/:id", humancapitalController.update)
    .delete("/delete/:id", humancapitalController.deleteCapital)

module.exports = router;