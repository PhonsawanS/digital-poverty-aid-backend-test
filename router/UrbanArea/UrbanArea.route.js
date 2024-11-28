const express = require('express');
const router = express.Router();
const UrbanAreaController = require('../../controllers/UrbanArea.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
    .get("/lists", UrbanAreaController.List)
    .get("/findOne/:id", UrbanAreaController.findOne)
    .post("/create", UrbanAreaController.create)
    .patch("/update/:id", UrbanAreaController.updateUrbanArea)
    .delete("/delete/:id", UrbanAreaController.deleteUrbanArea)



module.exports = router;