const Joi = require('joi');

// Create Validators
const CreateSchema = Joi.object({
    plants: Joi.array().items(Joi.string()).required(),
    livestock: Joi.array().items(Joi.string()).required(),
    fishing: Joi.array().items(Joi.string()).required(), // ฟิลด์นี้ต้องมีข้อมูล
    work: Joi.string().required(),
    work_area: Joi.string().required(),
    rent: Joi.number().required(),
    finan_capital_id: Joi.number().integer().required(), 
  });
  

// Update Validators
const UpdateSchema = Joi.object({
    plants: Joi.array().items(Joi.string()).optional(),       // ฟิลด์ plants สามารถเป็น array ของ string และเลือกอัปเดตได้
    livestock: Joi.array().items(Joi.string()).optional(),    // ฟิลด์ livestock สามารถเป็น array ของ string และเลือกอัปเดตได้
    fishing: Joi.array().items(Joi.string()).optional(),      // ฟิลด์ Fishing สามารถเป็น array ของ string และเลือกอัปเดตได้
    work: Joi.string().optional(),                            // ฟิลด์ work สามารถเป็น string ที่อัปเดตได้
    work_area: Joi.string().optional(),                       // ฟิลด์ work_area สามารถเป็น string ที่อัปเดตได้
    rent: Joi.number().precision(2).optional(),               // ฟิลด์ rent สามารถเป็นจำนวนที่อัปเดตได้
    finan_capital_id: Joi.number().integer().optional()       // ฟิลด์ finan_capital_id สามารถเป็น integer ที่อัปเดตได้
});


module.exports = {
    UpdateSchema,
    CreateSchema,
};