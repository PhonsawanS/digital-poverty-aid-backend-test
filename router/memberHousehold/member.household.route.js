const express = require('express');
const router = express.Router();
const MemberHousController = require('../../controllers/MemberHousehold.controller')
const { auth,allowRole } = require('../../middleware/auth')


router
    .get("/lists",auth, MemberHousController.List)
    .get("/findOne/:id",auth, MemberHousController.findOneMember)
    .post("/create",auth, MemberHousController.create)
    .patch("/update/:id",auth, MemberHousController.updateMember)
    .delete("/delete/:id",auth, MemberHousController.deleteMember)

    //find member
    .get('/findByAge/:minAge/:maxAge',auth,MemberHousController.findByAge)
    .get('/findCapital/:id',auth,MemberHousController.findCapital) 
    .get("/count", MemberHousController.conuntMemberHousehold)
    .post("/create-capital", MemberHousController.createCombined)
    .get("/district-count", MemberHousController.getMembersCountByDistrict)
module.exports = router;