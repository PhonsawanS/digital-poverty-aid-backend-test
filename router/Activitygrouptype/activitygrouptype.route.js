const express = require('express');
const router = express.Router();
const activitygrouptypeController = require('../../controllers/Activitygrouptype.controller')

router
    //http://localhost:8080/api/houseHoldexpenses/
    .get("/lists", activitygrouptypeController.ActivitygrouptypeList)
    .get("/findOne/:id", activitygrouptypeController.findOneActivitygrouptypeList)
    .post("/create", activitygrouptypeController.createActivitygrouptype)
    .patch("/update/:id", activitygrouptypeController.updateActivitygrouptype)
    .delete("/delete/:id", activitygrouptypeController.deleteActivitygrouptype)

module.exports = router