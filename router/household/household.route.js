const express = require('express');
const router = express.Router();
const HouseholdController = require('../../controllers/household.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
    //CRUD
    .get("/lists", HouseholdController.houseList)
    .get("/findOne/:id", HouseholdController.findOneHouse)
    .post("/create", HouseholdController.create)
    .patch("/update/:id", HouseholdController.updateHouse)
    .delete("/delete/:id", HouseholdController.deleteHouse)

    //Others
    .get("/count", HouseholdController.countHouseholds)
    .get("/countByDistrict", HouseholdController.countHouseholdsByDistrict)
    .get('/searchByHouseCode',HouseholdController.searchByHouseCode)
    .post("/create-nonagiincome/:householdId", HouseholdController.createNonAgiIncome)
    .post("/create-expenses/:householdId", HouseholdController.createHouseholdExpenses)
    .post("/create-saving/:householdId", HouseholdController.createSaving)
    .post("/create-debt/:householdId", HouseholdController.createCreditsource)
    .post("/create-creditsource/:householdId", HouseholdController.createCreditsource)
    .post("/create-member/:householdId", HouseholdController.createMember)
    .get('/:householdId/predict',HouseholdController.predict)
module.exports = router;