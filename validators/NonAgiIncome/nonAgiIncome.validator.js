const Joi = require('joi');


//Create Validators
const CreateSchema = Joi.object({
    income_type: Joi.string().required(),
    amount_per_yaer: Joi.number().precision(2).required(), // FLOAT type
    cost_per_year: Joi.number().precision(2).required(),   // FLOAT type
    finan_capital_id: Joi.number().integer().required()    // INTEGER type
});

//Update Validators
const UpdateSchema = Joi.object({
    income_type: Joi.string().required().optional(),
    amount_per_yaer: Joi.number().precision(2).required().optional(), // FLOAT type
    cost_per_year: Joi.number().precision(2).required().optional(),  // FLOAT type
    finan_capital_id: Joi.number().integer().required().optional(),    // INTEGER type
});



module.exports = {
    CreateSchema,
    UpdateSchema,
};