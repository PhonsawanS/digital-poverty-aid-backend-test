const express = require('express');
const router = express.Router();
const HouseholdController = require('../../controllers/household.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
    .get("/lists", HouseholdController.houseList)
    .get("/findOne/:id", HouseholdController.findOneHouse)
    .post("/create", HouseholdController.create)
    .patch("/update/:id", HouseholdController.updateHouse)
    .delete("/delete/:id", HouseholdController.deleteHouse)
    .get("/count", HouseholdController.countHouseholds)
    .get("/countByDistrict", HouseholdController.countHouseholdsByDistrict);
module.exports = router;