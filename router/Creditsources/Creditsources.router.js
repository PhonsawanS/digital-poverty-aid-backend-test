const express = require('express');
const router = express.Router();
const creditsourcesController = require('../../controllers/Creditsources.controller')

router
    //http://localhost:8080/api/creditsources/
    .get("/lists", creditsourcesController.CreditsourcesList)
    .get("/findOne/:id", creditsourcesController.findOneCreditsources)
    .post("/create", creditsourcesController.createCreditsources)
    .patch("/update/:id", creditsourcesController.updateCreditsources)
    .delete("/delete/:id", creditsourcesController.deleteCreditsources)

module.exports = router;
