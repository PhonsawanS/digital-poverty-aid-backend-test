const express = require('express');
const router = express.Router();
const FormController = require('../../controllers/form.controller')

const { auth,allowRole } = require('../../middleware/auth')


router
    //CRUD
    .get("/list",FormController.formList)
    .get("findOne/:id",FormController.findOneForm)
    .post("/create",FormController.create)
    .patch("/update/:id", FormController.updateForm)
    .delete("/delete/:id", FormController.deleteForm)

    //Others
    .get('/sumCapital',auth,FormController.sumCapital)
    .get('/map',FormController.getMap)

module.exports = router;