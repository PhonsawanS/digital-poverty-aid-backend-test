const Joi = require('joi');


//Create Validators
const CreateSchema = Joi.object({
    expenses_type: Joi.string().required(),               // STRING type
    amount_per_month: Joi.number().precision(2).required(),  // FLOAT type with 2 decimal precision
    finan_capital_id: Joi.number().integer().required()   // INTEGER type
  });
  

//Update Validators
const UpdateSchema = Joi.object({
    expenses_type: Joi.string().required().optional(),               
    amount_per_month: Joi.number().precision(2).required().optional(), 
    finan_capital_id: Joi.number().integer().required().optional(),  
});

module.exports = {
    CreateSchema,
    UpdateSchema,
};