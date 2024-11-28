const Joi = require('joi');

const createSchema = Joi.object({
    is_use_area_to_work: Joi.string().required(),
    has_prolem_in_area: Joi.string().required(),
    phy_capital_id: Joi.number().integer().required()
}).options({ stripUnknown: true }); // นอกเหนือจากที่กำหนดจะกรองออกหมด

const updateSchema = Joi.object({
    is_use_area_to_work: Joi.string().optional(),
    has_prolem_in_area: Joi.string().optional(),
    phy_capital_id: Joi.number().integer().optional()
}).options({ stripUnknown: true });





module.exports = {
    createSchema,
    updateSchema
};