const Joi = require('joi');

//Create Validators
const CreateInformantSchema = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    title: Joi.string().required(),
    national_id: Joi.string().length(13).required(), 
    phone: Joi.string().pattern(/^\d{10}$/).required(),
    address:Joi.string().required(),
    number_total_fam: Joi.number().integer().required(),  
    total_live_fam: Joi.number().integer().required(),    
    total_not_live_fam: Joi.number().integer().required(),
    formId: Joi.number().integer().optional()
});


//Update Validators
const UpdateInformantSchema = Joi.object({
    fname: Joi.string().required().optional(),
    lname: Joi.string().required().optional(),
    title: Joi.string().required().optional(),
    national_id: Joi.string().length(13).required().optional(), 
    phone: Joi.string().pattern(/^\d{10}$/).required().optional(),
    address:Joi.string().required().optional(),
    number_total_fam: Joi.number().integer().required().optional(),  
    total_live_fam: Joi.number().integer().required().optional(),    
    total_not_live_fam: Joi.number().integer().required().optional(),
    formId: Joi.number().integer().optional()
});

module.exports = {
    UpdateInformantSchema,
    CreateInformantSchema,
};