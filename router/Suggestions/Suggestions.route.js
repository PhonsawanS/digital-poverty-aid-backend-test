const express = require('express');
const router = express.Router();
const SuggestionsController = require('../../controllers/Suggestions.controller')

router
    .get("/lists", SuggestionsController.List)
    .get("/findOne/:id", SuggestionsController.findOneSugges)
    .post("/create", SuggestionsController.create)
    .patch("/update/:id", SuggestionsController.updateSugges)
    .delete("/delete/:id", SuggestionsController.deleteSugges)

module.exports = router;