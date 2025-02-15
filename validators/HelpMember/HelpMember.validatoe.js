const Joi = require("joi")

const createSchema = Joi.object({
    capital: Joi.string().required(),
    components: Joi.string().required(),
    help_name: Joi.string().required(),
    amount: Joi.number().required(),
    description: Joi.string().required(),
    agency: Joi.string().required(),
    member_house_id: Joi.number().optional(),
})

const updateSchema = Joi.object({
    capital: Joi.string().allow('').optional(),
    components: Joi.string().allow('').optional(),
    help_name: Joi.string().allow('').optional(),
    amount: Joi.number().optional(),
    description: Joi.string().allow('').optional(),
    agency: Joi.string().allow('').optional(),
    member_house_id: Joi.number().optional(),
})


module.exports = {
    createSchema,
    updateSchema
}