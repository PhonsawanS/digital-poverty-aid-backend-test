const Joi = require('joi');

const createSchema = Joi.object({
    plumbing_water: Joi.boolean().required(),
    sufficiency: Joi.string().required(),
    water_purchase : Joi.boolean().required(),
    phy_capital_id: Joi.number().integer().required()
}).options({ stripUnknown: true }); // นอกเหนือจากที่กำหนดจะกรองออกหมด

const updateSchema = Joi.object({
    plumbing_water: Joi.boolean().optional(),
    sufficiency: Joi.string().optional(),
    water_purchase : Joi.boolean().optional(),
    phy_capital_id: Joi.number().integer().optional()
}).options({ stripUnknown: true });





module.exports = {
    createSchema,
    updateSchema
};