const Joi = require('joi');


//Create Validators
const CreateSchema = Joi.object({
    property_type: Joi.string().required(),
    formId: Joi.number().integer().required().optional()
});

//Update Validators
const UpdateSchema = Joi.object({
    property_type: Joi.string().required().optional(),
    formId: Joi.number().integer().optional()
});



module.exports = {
    CreateSchema,
    UpdateSchema,
};