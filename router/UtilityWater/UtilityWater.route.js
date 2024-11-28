const express = require('express');
const router = express.Router();
const UtilityWaterController = require('../../controllers/UtilityWater.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
    .get("/lists", UtilityWaterController.List)
    .get("/findOne/:id", UtilityWaterController.findOne)
    .post("/create", UtilityWaterController.create)
    .patch("/update/:id", UtilityWaterController.updateUtilWater)
    .delete("/delete/:id", UtilityWaterController.deleteUtilWater)



module.exports = router;