const express = require('express');
const router = express.Router();
const HouseHygieneController = require('../../controllers/HouseHygiene.controller')



// const { auth,allowRole } = require('../../middleware/auth')


router
    .get("/lists", HouseHygieneController.List)
    .get("/findOne/:id", HouseHygieneController.findOne)
    .post("/create", HouseHygieneController.create)
    .patch("/update/:id", HouseHygieneController.updateHygiene)
    .delete("/delete/:id", HouseHygieneController.deleteHygiene)



module.exports = router;