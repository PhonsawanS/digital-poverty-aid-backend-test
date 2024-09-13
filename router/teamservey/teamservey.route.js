const express = require('express');
const router = express.Router();
const TeamServeyController = require('../../controllers/teamservey.controller')


// const { auth,allowRole } = require('../../middleware/auth')


router
    .get("/lists", TeamServeyController.List)
    .get("/findOne/:id", TeamServeyController.findOne)
    .post("/create", TeamServeyController.create)
    .patch("/update/:id", TeamServeyController.update)
    .delete("/delete/:id", TeamServeyController.deleteTeam)

module.exports = router;