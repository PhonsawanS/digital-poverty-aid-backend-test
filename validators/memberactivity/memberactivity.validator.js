const Joi = require('joi');

//Create Validators
const CreateMemberactivitySchema = Joi.object({
    activity_name: Joi.string().required(),
    activity_type: Joi.string().required(),
    achievement: Joi.string().required(),
    start_date: Joi.date().required(),
    operator:Joi.string().required(),
    is_poor_households_TPMAP: Joi.boolean().required(),
    houseId: Joi.number().integer().optional()
});


//Update Validators
const UpdateMemberactivitySchema = Joi.object({
    activity_name: Joi.string().required().optional(),
    activity_type: Joi.string().required().optional(),
    achievement: Joi.string().required().optional(),
    start_date: Joi.date().required().optional(),
    operator:Joi.string().required().optional(),
    is_poor_households_TPMAP: Joi.boolean().required().optional(),
    houseId: Joi.number().integer().optional()
});

module.exports = {
    CreateMemberactivitySchema,
    UpdateMemberactivitySchema,
};