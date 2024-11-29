const Joi = require('joi');

//Create Validators
const CreateInformantSchema = Joi.object({
    title: Joi.string().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    national_id: Joi.string().length(13).required(), 
    phone: Joi.string().pattern(/^\d{10}$/).required(),
    fam_total_member: Joi.number().integer().required(),  
    fam_total_live: Joi.number().integer().required(),    
    total_has_name_not_live: Joi.number().integer().required(),
    live_but_has_no_name_in_fam: Joi.number().integer().required(),
    form_id: Joi.number().integer().optional()
});


//Update Validators
const UpdateInformantSchema = Joi.object({
    title: Joi.string().optional(),
    fname: Joi.string().optional(),
    lname: Joi.string().optional(),
    national_id: Joi.string().length(13).optional(), 
    phone: Joi.string().pattern(/^\d{10}$/).optional(),
    fam_total_member: Joi.number().integer().optional(),  
    fam_total_live: Joi.number().integer().optional(),    
    total_has_name_not_live: Joi.number().integer().optional(),
    live_but_has_no_name_in_fam: Joi.number().integer().optional(),
    form_id: Joi.number().integer().optional()
});

module.exports = {
    UpdateInformantSchema,
    CreateInformantSchema,
};