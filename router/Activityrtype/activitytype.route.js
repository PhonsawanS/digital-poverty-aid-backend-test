const express = require('express');
const router = express.Router();
const activitytypeController = require('../../controllers/Activitytype.controller')

router
    //http://localhost:8080/api/activitytype/
    .get("/lists", activitytypeController.ActivitytypeList)
    .get("/findOne/:id", activitytypeController.findOneActivitytypeList)
    .post("/create", activitytypeController.createActivitytype)
    .patch("/update/:id", activitytypeController.updateActivitytype)
    .delete("/delete/:id", activitytypeController.deleteActivitytype)

module.exports = router