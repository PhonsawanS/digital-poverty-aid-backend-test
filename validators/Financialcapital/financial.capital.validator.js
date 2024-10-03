const Joi = require('joi');

// Create Validators
const CreateFinancialCapitalSchema = Joi.object({
    formId: Joi.number().integer().required()
});

// Update Validators
const UpdateFinancialCapitalSchema = Joi.object({
    formId: Joi.number().integer().optional()
});

//กรองข้อมูลจาก 3 ตาราง
const combinedSchema = Joi.object({
    // FinancialCapital fields
    formId: Joi.number().integer().required(),

    // Saving ชื่อต้องตรงกับ Model
    Saving: Joi.array().items(
        Joi.object({
            is_has_saving: Joi.boolean().required(), 
            saving_type: Joi.string().required(),
            amount: Joi.number().precision(2).required(),
        })
    ).required() // Ensure it must be an array
}).options({ stripUnknown: true });


module.exports = {
    CreateFinancialCapitalSchema,
    UpdateFinancialCapitalSchema,
    combinedSchema,
};