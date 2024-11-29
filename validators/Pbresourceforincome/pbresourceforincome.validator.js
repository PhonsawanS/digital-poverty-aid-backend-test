const Joi = require('joi');

// Create Validators
const CreateSchema = Joi.object({
    is_use_PB_resoc: Joi.boolean().optional(), // เป็นค่าที่อนุญาตให้เป็น null ได้
    rescource: Joi.string().optional().allow(null), // อนุญาตให้เป็น null หรือ string
    distanceKM: Joi.number().optional().allow(null), // อนุญาตให้เป็น null หรือ float
    description: Joi.string().optional().allow(null), // อนุญาตให้เป็น null หรือ string
    national_res_id: Joi.number().integer().required(), // ค่านี้ต้องไม่เป็น null และเป็น integer
  });
  
  // Update Validators
  const UpdateSchema = Joi.object({
    is_use_PB_resoc: Joi.boolean().optional(), // optional เพราะอัปเดตไม่จำเป็นต้องส่งทุกฟิลด์
    rescource: Joi.string().optional().allow(null),
    distanceKM: Joi.number().optional().allow(null),
    description: Joi.string().optional().allow(null),
    national_res_id: Joi.number().integer().optional(), // optional เพราะอัปเดตสามารถข้ามได้
  });


module.exports = {
    CreateSchema,
    UpdateSchema,
};