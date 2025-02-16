const Joi = require('joi')

const createSchema = Joi.object({
    userId: Joi.string().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    house_code: Joi.string().required(),
})


const updateSchema = Joi.object({
    userId: Joi.string().allow('').required(),
    fname: Joi.string().allow('').required(),
    lname: Joi.string().allow('').required(),
    house_code: Joi.string().allow('').required(),
})

module.exports = {
    createSchema,
    updateSchema
}