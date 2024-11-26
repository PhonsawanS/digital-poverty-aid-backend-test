const express = require('express');
const router = express.Router();
const socialcapitalController = require('../../controllers/Socialcapital.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
//http://localhost:8080/api/socialcapital/
    .get("/lists", socialcapitalController.socialcapitalList)
    .get("/findOne/:id", socialcapitalController.findOnesocialcapital)
    .post("/create", socialcapitalController.createsocialcapital)
    .patch("/update/:id", socialcapitalController.updatesocialcapital)
    .delete("/delete/:id", socialcapitalController.deletesocialcapital)

module.exports = router;