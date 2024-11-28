const Joi = require('joi');

const unresSchema = Joi.object({
    effect: Joi.string().required(),
    form_id: Joi.number().required(),
    effect_in_life: Joi.array().items(Joi.string()).required()
}); 

const updateunresSchema = Joi.object({
    effect: Joi.string(),
    form_id: Joi.number(),
    effect_in_life: Joi.array().items(Joi.string())
});

module.exports = {
    unresSchema,
    updateunresSchema
};
