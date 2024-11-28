const Joi = require('joi');

const unresSchema = Joi.object({
    effect: Joi.string().required(),
    form_id: Joi.number().required(),
    urgent_to_do: Joi.string().required(),
    effect_in_life: Joi.array().items(Joi.string()).required(),
    effect_in_work: Joi.array().items(Joi.string()).required()
}); // นอกเหนือจากที่กำหนดจะกรองออกหมด


const updateunresSchema = Joi.object({
    effect: Joi.string().optional(),
    form_id: Joi.number().optional(),
    urgent_to_do: Joi.string().optional(),
    effect_in_life: Joi.array().items(Joi.string()).optional(),
    effect_in_work: Joi.array().items(Joi.string()).optional()
});

module.exports ={
    unresSchema,
    updateunresSchema
};

