const Joi = require('joi');


//Create Validators
const CreateSchema = Joi.object({
    firstis_has_debt: Joi.number().precision(2).required(),  // FLOAT type
    description: Joi.string().required(),                    // STRING type
    finan_capital_id: Joi.number().integer().required()      // INTEGER type
});

//Update Validators 
// .optional()
const UpdateSchema = Joi.object({
    firstis_has_debt: Joi.number().precision(2).required().optional(),  // FLOAT type
    description: Joi.string().required().optional(),                    // STRING type
    finan_capital_id: Joi.number().integer().required().optional()      // INTEGER type
});
module.exports = {
    CreateSchema,
    UpdateSchema,
};