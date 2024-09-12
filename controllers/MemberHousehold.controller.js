const Joi = require('joi'); //Validate
const memberHouseService = require('../services/member.house.services')


// Validate Create
const memberSchema = Joi.object({
    title: Joi.string().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    sex: Joi.string().valid('ชาย', 'หญิง').required(),
    national_id: Joi.string().length(13).required(), // ตรวจสอบว่ามี 13 ตัวอักษร
    age: Joi.number().integer().min(0).required(),
    birthdate: Joi.date().required(),
    status_in_house: Joi.string().required(),
    health: Joi.string().required(),
    career: Joi.array().items(Joi.string()).required(), // ตรวจสอบว่า career เป็น array ของ string
    houseId: Joi.number().integer().optional()
});


//Validate Update
const updateMemberSchema = Joi.object({
    title: Joi.string().optional(),
    fname: Joi.string().optional(),
    lname: Joi.string().optional(),
    sex: Joi.string().valid('Male', 'Female').optional(),
    national_id: Joi.string().length(13).optional(), // ตรวจสอบว่ามี 13 ตัวอักษร
    age: Joi.number().integer().min(0).optional(),
    birthdate: Joi.date().optional(),
    status_in_house: Joi.string().optional(),
    health: Joi.string().optional(),
    career: Joi.array().items(Joi.string()).optional(), // ตรวจสอบว่า career เป็น array ของ string
    houseId: Joi.number().integer().optional()
});


const List = async (req, res) => {
    await memberHouseService.getMember()
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}
const findOneMember = async (req, res) => {
    await memberHouseService.findOneById(req.params.id)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}

const create = async (req, res) => {
  
    // Validate ข้อมูลจาก req.body ก่อน
    const { error, value } = memberSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }

    const memberObj = {
        title: value.title,
        fname: value.fname,
        lname: value.lname,
        sex: value.sex,
        national_id: value.national_id,
        age: value.age,
        birthdate: value.birthdate,
        status_in_house: value.status_in_house,
        health: value.health,
        career: value.career,
        houseId: value.houseId
    };

    await memberHouseService.create(memberObj)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}

const updateMember = async (req, res) => {
    const id = req.params.id;

    // Validate ข้อมูลจาก req.body ก่อน
    const { error, value } = updateMemberSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }

    const memberObj = {
        title: value.title,
        fname: value.fname,
        lname: value.lname,
        sex: value.sex,
        national_id: value.national_id,
        age: value.age,
        birthdate: value.birthdate,
        status_in_house: value.status_in_house,
        health: value.health,
        career: value.career,
        houseId: value.houseId
    };

    await memberHouseService.update(memberObj, id)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}

const deleteMember= async (req, res) => {
    await memberHouseService.deleted(req.params.id)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}


module.exports = {
    List,
    findOneMember,
    create,
    updateMember,
    deleteMember
};