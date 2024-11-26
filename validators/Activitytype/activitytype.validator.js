const Joi = require('joi');

// Create Validator
const CreateSchema = Joi.object({
    activity: Joi.string().optional(), // activity สามารถเป็น string หรือ null ได้
    participation_level: Joi.string().optional(), // participation_level สามารถเป็น string หรือ null ได้
    frequncy: Joi.string().optional(), // frequncy สามารถเป็น string หรือ null ได้
    social_cap_id: Joi.number().integer().required(), // social_cap_id ต้องเป็น integer และไม่สามารถเป็น null ได้
});

// Update Validator
const UpdateSchema = Joi.object({
    activity: Joi.string().optional(), // activity สามารถเป็น string หรือ null ได้
    participation_level: Joi.string().optional(), // participation_level สามารถเป็น string หรือ null ได้
    frequncy: Joi.string().optional(), // frequncy สามารถเป็น string หรือ null ได้
    social_cap_id: Joi.number().integer().optional(), // social_cap_id ต้องเป็น integer แต่สามารถไม่ส่งค่ามาได้ในการ update
});

module.exports = {
    CreateSchema,
    UpdateSchema,
};
