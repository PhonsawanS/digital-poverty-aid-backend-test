const Joi = require('joi');

const unresSchema = Joi.object({
    effect: Joi.string().required(),
    form_id: Joi.number().required(),
    urgent_to_do: Joi.string().required(),
    effect_in_life: Joi.array().items(Joi.string()).required(),
    effect_in_work: Joi.array().items(Joi.string()).required()
}); // นอกเหนือจากที่กำหนดจะกรองออกหมด

const updateunresSchema = Joi.object({
    effect: Joi.string(),
    form_id: Joi.number(),
    urgent_to_do: Joi.string(),
    effect_in_life: Joi.array().items(Joi.string()),
    effect_in_work: Joi.array().items(Joi.string())
});

module.exports ={
    unresSchema,
    updateunresSchema
};