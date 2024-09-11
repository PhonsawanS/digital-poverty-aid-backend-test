const express = require('express');
const router = express.Router();
const memberactivityController = require('../../controllers/memberActivitie.controller');

router
//http://localhost:8080/api/memberactivity/
    .get("/lists", memberactivityController.memberactivityList)
    .get("/findOne/:id", memberactivityController.findOneMemberactivity)
    .post("/create", memberactivityController.createMemberactivity)
    .patch("/update/:id", memberactivityController.updateMemberactivity)
    .delete("/delete/:id", memberactivityController.deleteMemberactivity)



module.exports = router;
