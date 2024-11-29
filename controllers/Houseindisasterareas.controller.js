const houseindisasterareasServices = require('../services/houseindisasterareas.service')
const { CreateSchema, UpdateSchema } = require('../validators/Houseindisasterareas/houseindisasterareas.validator')


const houseindisasterList = async (req, res) => {
    await houseindisasterareasServices.get()
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

const findOnehouseindisasterList = async (req, res) => {
    await houseindisasterareasServices.findOneById(req.params.id)
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


const createhouseindisaster = async (req, res) => {

    // Validate request body
    const { error, value } = CreateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const houseindisasterareasObj = {
        is_in_disaster: value.is_in_disaster,
        disaster_type: value.disaster_type,
        frequncy_disaster: value.frequncy_disaster,
        disaster_response: value.disaster_response,
        national_res_id: value.national_res_id
    };
    await houseindisasterareasServices.create(houseindisasterareasObj)
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

const updatehouseindisaster = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const houseindisasterareasObj = {
        is_use_PB_resoc: value.is_use_PB_resoc,
        disaster_type: value.disaster_type,
        frequncy_disaster: value.frequncy_disaster,
        disaster_response: value.disaster_response,
        national_res_id: value.national_res_id
    };
    await houseindisasterareasServices.update(houseindisasterareasObj, id)
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


const deletehouseindisaster = async (req, res) => {
    await houseindisasterareasServices.deleted(req.params.id)
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
    houseindisasterList,
    findOnehouseindisasterList,
    createhouseindisaster,
    updatehouseindisaster,
    deletehouseindisaster,
};