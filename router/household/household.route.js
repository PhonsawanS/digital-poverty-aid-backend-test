const express = require('express');
const router = express.Router();
const HouseholdController = require('../../controllers/household.controller')

const { auth,allowRole } = require('../../middleware/auth')


router
    //CRUD
    .get("/lists", HouseholdController.houseList)
    .get("/findOne/:id", HouseholdController.findOneHouse)
    .post("/create", HouseholdController.create)
    .patch("/update/:id",auth, HouseholdController.updateHouse)
    .delete("/delete/:id", HouseholdController.deleteHouse)

    //Others
    .get("/count", HouseholdController.countHouseholds)
    .get("/countByDistrict", HouseholdController.countHouseholdsByDistrict)
    .get('/searchByHouseCode',HouseholdController.searchByHouseCode)
    .get('/search-households',auth,HouseholdController.searchHousehold)
    .post("/create-nonagiincome/:householdId", auth,HouseholdController.createNonAgiIncome)
    .post("/create-agi-financial/:householdId",auth,HouseholdController.createAgiFinancial)
    .post("/create-expenses/:householdId", auth, HouseholdController.createHouseholdExpenses)
    .post("/create-saving/:householdId",auth, HouseholdController.createSaving)
    .post("/create-debt/:householdId",auth, HouseholdController.createCreditsource)
    .post("/create-creditsource/:householdId",auth, HouseholdController.createCreditsource)
    .post("/create-member/:householdId", auth,HouseholdController.createMember)
    .post("/createPin/:householdId",auth, HouseholdController.createPin)
    .get("/getPin", HouseholdController.List)
    .get('/:householdId/predict',HouseholdController.predict)
module.exports = router;