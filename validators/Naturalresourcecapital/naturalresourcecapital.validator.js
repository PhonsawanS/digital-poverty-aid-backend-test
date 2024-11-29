const Joi = require('joi');

// Create Validators
const CreateSchema = Joi.object({
    formId: Joi.number().integer().required()
});

// Update Validators
const UpdateSchema = Joi.object({
    formId: Joi.number().integer().optional()
});


module.exports = {
    CreateSchema,
    UpdateSchema,
};