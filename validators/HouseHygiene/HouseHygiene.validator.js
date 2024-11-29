const Joi = require('joi');

const createSchema = Joi.object({
    item_storage: Joi.string().required(),
    drainage_system: Joi.string().required(),
    toilet: Joi.string().required(),
    garbage: Joi.string().required(),
    phy_capital_id: Joi.number().integer().required(),
   
}).options({ stripUnknown: true }); // นอกเหนือจากที่กำหนดจะกรองออกหมด

const updateSchema = Joi.object({
    item_storage: Joi.string().optional(),
    drainage_system: Joi.string().optional(),
    toilet: Joi.string().optional(),
    garbage: Joi.string().optional(),
    phy_capital_id: Joi.number().integer().optional(),
}).options({ stripUnknown: true });





module.exports = {
    createSchema,
    updateSchema
};