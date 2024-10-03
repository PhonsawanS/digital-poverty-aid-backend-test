const Joi = require('joi');
//Create Validators
const CreateSchema = Joi.object({
    is_has_saving: Joi.boolean().required(), 
    saving_type: Joi.string().required(),
    amount: Joi.number().precision(2).required(),
    finan_capital_id: Joi.number().integer().required(), 
});

//Update Validators
const UpdateSchema = Joi.object({
    is_has_saving: Joi.boolean().optional(), 
    saving_type: Joi.string().optional(), 
    amount: Joi.number().precision(2).optional(), 
    finan_capital_id: Joi.number().integer().optional(), 
});
module.exports = {
    CreateSchema,
    UpdateSchema,
};