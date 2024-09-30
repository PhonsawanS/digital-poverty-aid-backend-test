const SocialWelfareService = require('../services/SocialWelfare.services')
const Joi = require('joi');

//Create Validators
const CreateSchema = Joi.object({
    welfare: Joi.string().required(),
    amount: Joi.number().required(),
    frequency: Joi.string().required(),
    human_capital_id:Joi.number().required()
});


//Update Validators
const UpdateSchema = Joi.object({
    welfare: Joi.string().optional(),
    amount: Joi.number().optional(),
    frequency: Joi.string().optional(),
    human_capital_id:Joi.number().optional()
});


const List = async (req, res) => {
    await SocialWelfareService.getAll()
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
    await SocialWelfareService.findOneById(req.params.id)
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

        const welfareObj = {
            welfare: value.welfare,
            amount: value.amount,
            frequency: value.frequency,
            human_capital_id: value.human_capital_id
        };

        const data = await SocialWelfareService.create(welfareObj);
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

    const welfareObj = {
        welfare: value.welfare,
        amount: value.amount,
        frequency: value.frequency,
        human_capital_id: value.human_capital_id
    };

    await SocialWelfareService.update(welfareObj, id)
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
    await SocialWelfareService.deleted(req.params.id)
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