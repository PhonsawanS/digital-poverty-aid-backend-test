const Joi = require('joi');


//Create Validators
const CreateSchema = Joi.object({
    form: Joi.string().required(),                            // STRING type
    outstanding_amount: Joi.number().precision(2).required(), // FLOAT type
    debt_id: Joi.number().integer().required()                // INTEGER type
  });
  

//Update Validators 
// .optional()
const UpdateSchema = Joi.object({
    form: Joi.string().required().optional(),                            // STRING type
    outstanding_amount: Joi.number().precision(2).required().optional(), // FLOAT type
    debt_id: Joi.number().integer().required().optional()                // INTEGER type
});

module.exports = {
    CreateSchema,
    UpdateSchema,
};