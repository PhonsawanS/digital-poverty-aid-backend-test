const express = require('express');
const router = express.Router();
const savingController = require('../../controllers/Saving.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
//http://localhost:8080/api/saving/
    .get("/lists", savingController.SavingList)
    .get("/findOne/:id", savingController.findOneSaving)
    .post("/create", savingController.createSaving)
    .patch("/update/:id", savingController.updateSaving)
    .delete("/delete/:id", savingController.deleteSaving)

module.exports = router;