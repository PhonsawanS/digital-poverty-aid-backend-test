const Joi = require('joi');

const memberSchema = Joi.object({
    title: Joi.string().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    sex: Joi.string().valid('ชาย', 'หญิง').required(),
    national_id: Joi.string().length(13).required(),
    age: Joi.number().integer().min(0).required(),
    birthdate: Joi.date().required(),
    status_in_house: Joi.string().required(),
    health: Joi.string().required(),
    career: Joi.array().items(Joi.string()).required(),
    houseId: Joi.number().integer().optional()
}); // นอกเหนือจากที่กำหนดจะกรองออกหมด

const updateMemberSchema = Joi.object({
    title: Joi.string(),
    fname: Joi.string(),
    lname: Joi.string(),
    sex: Joi.string().valid('Male', 'Female'),
    national_id: Joi.string().length(13),
    age: Joi.number().integer().min(0),
    birthdate: Joi.date(),
    status_in_house: Joi.string(),
    health: Joi.string(),
    career: Joi.array().items(Joi.string()),
    houseId: Joi.number().integer()
});


//กรองข้อมูลจาก 3 ตาราง
const combinedSchema = Joi.object({
    // MemberHousehold fields
    title: Joi.string().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    sex: Joi.string().valid('ชาย', 'หญิง').required(),
    national_id: Joi.string().length(13).required(),
    age_yaer: Joi.number().integer().min(0).required(),
    age_month: Joi.number().integer().min(0).required(),
    birthdate: Joi.date().required(),
    status_in_house: Joi.string().required(),
    health: Joi.string().required(),
    career: Joi.array().items(Joi.string()).required(),
    houseId: Joi.number().integer().optional(),

    // HumanCapital fields
    max_education: Joi.string().required(),
    current_edu_level: Joi.string().required(),
    edu_status: Joi.string().required(),
    work_status: Joi.string().required(),
    work_can_made_income: Joi.array().items(Joi.string()).required(),
    agv_income: Joi.number().required(),
    can_write_TH: Joi.string().required(),
    can_read_TH: Joi.string().required(),
    can_speak_TH: Joi.string().required(),
    form_id: Joi.number().optional(),

    // SocialWelfare ชื่อต้องตรงกับ Model
    SocialWelfare: Joi.array().items(
        Joi.object({
            welfare: Joi.string().required(),
            amount: Joi.number().required(),
            frequency: Joi.string().required(),
        })
    ).required() // Ensure it must be an array
}).options({ stripUnknown: true });




module.exports = {
    memberSchema,
    updateMemberSchema,
    combinedSchema
};