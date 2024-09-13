const express = require('express');
const router = express.Router();
const FormController = require('../../controllers/form.controller')

// const { auth,allowRole } = require('../../middleware/auth')


router
    .get("/list",FormController.formList)
    .get("/:id",FormController.findOneForm)
    .post("/create",FormController.create)
    .patch("/update/:id", FormController.updateForm)
    .delete("/delete/:id", FormController.deleteForm)

    //create form with household
    .post("/create-form-with-hh",FormController.createFWH)
module.exports = router;