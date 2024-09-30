const humancapitalService = require('../services/humancapital.services')
const Joi = require('joi');

//Create Validators
const CreateSchema = Joi.object({
    max_education: Joi.string().required(),
    current_edu_level: Joi.string().required(),
    edu_status: Joi.string().required(),
    work_status:Joi.string().required(),
    work_can_made_income:Joi.array().items(Joi.string()).required(), //Array
    agv_income:Joi.number().required(),
    can_write_TH:Joi.string().required(),
    can_read_TH:Joi.string().required(),
    can_speak_TH:Joi.string().required(),
    member_house_id:Joi.number().optional(),
    form_id:  Joi.number().optional()
});


//Update Validators
const UpdateSchema = Joi.object({
    max_education: Joi.string().optional(),
    current_edu_level: Joi.string().optional(),
    edu_status: Joi.string().optional(),
    work_status:Joi.string().optional(),
    work_can_made_income:Joi.array().items(Joi.string()).optional(), //Array
    agv_income:Joi.number(),
    can_write_TH:Joi.string(),
    can_read_TH:Joi.string(),
    can_speak_TH:Joi.string(),
    member_house_id:Joi.number().optional(),
    form_id:  Joi.number().optional()
});


const List = async (req, res) => {
    await humancapitalService.getAll()
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
    await humancapitalService.findOneById(req.params.id)
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
    try {
        // Validate data from req.body
        const { error, value } = CreateSchema.validate(req.body, { abortEarly: false });

        if (error) {
            const missingFields = error.details.map(detail => detail.context.key);
            return res.status(400).send({
                msg: "Validation error",
                missingFields: missingFields,
                error: error.details
            });
        }

        const humanCapitalObj = {
            max_education: value.max_education,
            current_edu_level: value.current_edu_level,
            edu_status: value.edu_status,
            work_status: value.work_status,
            work_can_made_income: value.work_can_made_income,
            agv_income: value.agv_income,
            can_write_TH: value.can_write_TH,
            can_read_TH: value.can_read_TH,
            can_speak_TH: value.can_speak_TH,
            member_house_id: value.member_house_id,
            form_id: value.form_id
        };

        const data = await humancapitalService.create(humanCapitalObj);
        res.status(200).send({
            data: data,
            msg: "success",
            status: 200,
            err: ''
        });
    } catch (err) {
        if (err.name === 'SequelizeForeignKeyConstraintError') {
            return res.status(400).send({
                data: null,
                msg: "Foreign key constraint error",
                status: 400,
                err: "The specified member_house_id does not exist in the MemberHousehold table."
            });
        }
        res.status(500).send({
            data: null,
            msg: "error",
            status: 500,
            err: err.message
        });
    }
}

const update = async (req, res) => {
    const id = req.params.id;

    // Validate ข้อมูลจาก req.body ก่อน
    const { error, value } = UpdateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }

    const humanCapitalObj = {
        max_education: value.max_education,
        current_edu_level: value.current_edu_level,
        edu_status: value.edu_status,
        work_status: value.work_status,
        work_can_made_income: value.work_can_made_income,
        agv_income: value.agv_income,
        can_write_TH: value.can_write_TH,
        can_read_TH: value.status_in_house,
        can_speak_TH: value.health,
        member_house_id: value.career,
        form_id: value.houseId
    };

    await humancapitalService.update(humanCapitalObj, id)
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

const deleteCapital= async (req, res) => {
    await humancapitalService.deleted(req.params.id)
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
    deleteCapital
};