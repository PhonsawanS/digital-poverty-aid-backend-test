const express = require('express');
const router = express.Router();
const UnrestIn3SouthernController =require('../../controllers/UnrestIn3Southern.controller')

router
    .get("/lists", UnrestIn3SouthernController.List)
    .get("/findOne/:id", UnrestIn3SouthernController.findOneUnres)
    .post("/create", UnrestIn3SouthernController.create)
    .patch("/update/:id", UnrestIn3SouthernController.updateUnres)
    .delete("/delete/:id", UnrestIn3SouthernController.deleteUnres)

module.exports = router;