const Joi = require('joi');

// Create Validators
const CreateSocialcapitalSchema = Joi.object({
    formId: Joi.number().integer().required()
});

// Update Validators
const UpdateSocialcapitalSchema = Joi.object({
    formId: Joi.number().integer().optional()
});


module.exports = {
    CreateSocialcapitalSchema,
    UpdateSocialcapitalSchema,
};