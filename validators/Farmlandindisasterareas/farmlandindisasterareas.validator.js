const Joi = require('joi');

// Create Validators
const CreateSchema = Joi.object({
    is_in_disaster: Joi.boolean().optional(),
    disaster_type: Joi.string().optional(),
    frequncy_disaster: Joi.string().optional(),
    disaster_response: Joi.string().optional(),
    national_res_id: Joi.number().integer().required(),  // Required field, must be a number
  });

// Update Validators
const UpdateSchema = Joi.object({
    is_in_disaster: Joi.boolean().optional(),
    disaster_type: Joi.string().optional(),
    frequncy_disaster: Joi.string().optional(),
    disaster_response: Joi.string().optional(),
    national_res_id: Joi.number().integer().optional(), // Can be omitted in updates, but must be a number if provided
  });
  

module.exports = {
    CreateSchema,
    UpdateSchema,
};