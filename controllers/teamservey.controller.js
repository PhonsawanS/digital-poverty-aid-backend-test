const Joi = require('joi'); //Validate
const teamserveyService = require('../services/teamservey.services')


// Create Validator 
const teamServeySchema = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    agency: Joi.string().required(),
    job_position: Joi.string().required(),
    phone: Joi.string().length(10).required(), // ตรวจสอบว่ามี 10 ตัวอักษร
    formId: Joi.number().integer().optional()
});


// Update Validator
const updateteamServeySchema = Joi.object({
    fname: Joi.string().required().optional(),
    lname: Joi.string().required().optional(),
    agency: Joi.string().required().optional(),
    job_position: Joi.string().required().optional(),
    phone: Joi.string().length(10).required().optional(), // ตรวจสอบว่ามี 13 ตัวอักษร
    formId: Joi.number().integer().optional()
});


const List = async (req, res) => {
    await teamserveyService.getTeamServey()
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
const findOne = async (req, res) => {
    await teamserveyService.findOneById(req.params.id)
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
    const { error, value } = teamServeySchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }

    const teamserveyObj = {
        fname: value.fname,
        lname: value.lname,
        agency: value.agency,
        job_position: value.job_position,
        phone: value.phone,
        formId: value.formId
    };

    await teamserveyService.create(teamserveyObj)
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

const update = async (req, res) => {
    const id = req.params.id;

    // Validate ข้อมูลจาก req.body ก่อน
    const { error, value } = updateteamServeySchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }

    const teamserveyObj = {
        fname: value.fname,
        lname: value.lname,
        agency: value.agency,
        job_position: value.job_position,
        phone: value.phone,
        formId: value.formId
    };

    await teamserveyService.update(teamserveyObj, id)
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

const deleteTeam= async (req, res) => {
    await teamserveyService.deleted(req.params.id)
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
    findOne,
    create,
    update,
    deleteTeam
};