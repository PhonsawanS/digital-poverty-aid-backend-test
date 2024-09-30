const express = require('express');
const router = express.Router();
const SocialWelfareController = require('../../controllers/SocialWelfare.controller')



router
    .get("/lists", SocialWelfareController.List)
    .get("/findOne/:id", SocialWelfareController.findOne)
    .post("/create", SocialWelfareController.create)
    .patch("/update/:id", SocialWelfareController.update)
    .delete("/delete/:id", SocialWelfareController.deleteCapital)

module.exports = router;