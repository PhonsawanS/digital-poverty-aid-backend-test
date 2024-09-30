const express = require('express');
const router = express.Router();
const occupationalpropertyController = require('../../controllers/occupationalproperty.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
//http://localhost:8080/api/occupationalproperty/
    .get("/lists", occupationalpropertyController.OccupationalpropertylList)
    .get("/findOne/:id", occupationalpropertyController.findOneOccupationalproperty)
    .post("/create", occupationalpropertyController.createOccupationalproperty)
    .patch("/update/:id", occupationalpropertyController.updateOccupationalproperty)
    .delete("/delete/:id", occupationalpropertyController.deleteOccupationalproperty)

module.exports = router;