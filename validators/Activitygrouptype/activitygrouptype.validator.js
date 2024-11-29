const Joi = require('joi');

// Create Validator
const CreateActivitygrouptypeSchema = Joi.object({
  activity_group: Joi.string().allow(null), // ตรงกับ allowNull: true
  is_member: Joi.boolean().allow(null), // ตรงกับ allowNull: true
  dependency: Joi.string().allow(null), // ตรงกับ allowNull: true
  social_cap_id: Joi.number().integer().required(), // ตรงกับ allowNull: false
});

// Update Validator
const UpdateActivitygrouptypeSchema = Joi.object({
  activity_group: Joi.string().allow(null).optional(), // optional สำหรับการอัปเดต
  is_member: Joi.boolean().allow(null).optional(),
  dependency: Joi.string().allow(null).optional(),
  social_cap_id: Joi.number().integer().optional(),
});

module.exports = {
  CreateActivitygrouptypeSchema,
  UpdateActivitygrouptypeSchema,
};
