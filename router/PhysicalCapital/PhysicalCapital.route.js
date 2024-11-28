const express = require('express');
const router = express.Router();
const PhysicalController = require('../../controllers/physicalCapital.controller')


// const { auth,allowRole } = require('../../middleware/auth')


router
    .get("/lists", PhysicalController.List)
    .get("/findOne/:id", PhysicalController.findOneMember)
    .post("/create", PhysicalController.create)
    .patch("/update/:id", PhysicalController.updateCapital)
    .delete("/delete/:id", PhysicalController.deleteCapital)

    // สร้างข้อมูล 3ตาราง
    .post('/create-combind', PhysicalController.createCombind)

module.exports = router;