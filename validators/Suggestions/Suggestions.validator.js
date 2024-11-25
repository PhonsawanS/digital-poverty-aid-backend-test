const Joi = require('joi');

const suggesSchema = Joi.object({
    suggest_informer: Joi.string().required(),
    suggest_surway_team: Joi.string().required(),
    resource: Joi.array().items(Joi.string()).required(),
    form_id: Joi.number().required()
}); // นอกเหนือจากที่กำหนดจะกรองออกหมด

const updatesuggesSchema = Joi.object({
    suggest_informer: Joi.string(),
    suggest_surway_team: Joi.string(),
    resource: Joi.array().items(Joi.string()),
    form_id: Joi.number(),
});

module.exports ={
    suggesSchema,
    updatesuggesSchema
};