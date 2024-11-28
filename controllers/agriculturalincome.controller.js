const agriculturalincomeService = require('../services/agriculturalincome.service')
const Joi = require('joi');
const {UpdateSchema,CreateSchema} = require('../validators/agriculturalincome/agricultural.income.validator')


const AgriculturalincomeList = async (req, res) => {
    await agriculturalincomeService.get()
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

const findOneAgriculturalincome = async (req, res) => {
    await agriculturalincomeService.findOneById(req.params.id)
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


const createAgriculturalincome = async (req, res) => {

    // Validate request body
    const { error, value } = CreateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const agriculturalIncomeObj = {

        plants: value.plants,
        livestock: value.livestock,
        fishing:value.fishing,
        work: value.work,
        work_area: value.work_area,
        rent: value.rent,
        finan_capital_id: value.finan_capital_id,


    };
    await agriculturalincomeService.create(agriculturalIncomeObj)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            })
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

const updateAgriculturalincome = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const agriculturalIncomeObj = {
        plants: value.plants,
        livestock: value.livestock,
        fishing:value.fishing,
        work: value.work,
        work_area: value.work_area,
        rent: value.rent,
        finan_capital_id: value.finan_capital_id,

    };
    await agriculturalincomeService.update(agriculturalIncomeObj, id)
        .then(data => {
            res.send({
                data: data,
                msg: "Update success",
                status: 200,
                err: '',
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


const deleteAgriculturalincome = async (req, res) => {
    await agriculturalincomeService.deleted(req.params.id)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            })
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            })
        })
}


module.exports = {
    AgriculturalincomeList,
    findOneAgriculturalincome,
    createAgriculturalincome,
    updateAgriculturalincome,
    deleteAgriculturalincome,
};