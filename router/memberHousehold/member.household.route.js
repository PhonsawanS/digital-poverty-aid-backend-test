const express = require('express');
const router = express.Router();
const MemberHousController = require('../../controllers/MemberHousehold.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
    .get("/lists", MemberHousController.List)
    .get("/findOne/:id", MemberHousController.findOneMember)
    .post("/create", MemberHousController.create)
    .patch("/update/:id", MemberHousController.updateMember)
    .delete("/delete/:id", MemberHousController.deleteMember)

    .post("/create-capital", MemberHousController.createCombined)

module.exports = router;