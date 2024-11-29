const farmlandindisasterareasServices = require('../services/farmlandindisasterareas.service')
const { CreateSchema, UpdateSchema } = require('../validators/Farmlandindisasterareas/farmlandindisasterareas.validator')


const farmlandList = async (req, res) => {
    await farmlandindisasterareasServices.get()
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

const findOnefarmlandList = async (req, res) => {
    await farmlandindisasterareasServices.findOneById(req.params.id)
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


const createfarmland = async (req, res) => {

    // Validate request body
    const { error, value } = CreateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const farmlandindisasterareasObj = {
        is_in_disaster: value.is_in_disaster,
        disaster_type: value.disaster_type,
        frequncy_disaster: value.frequncy_disaster,
        disaster_response: value.disaster_response,
        national_res_id: value.national_res_id
    };
    await farmlandindisasterareasServices.create(farmlandindisasterareasObj)
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

const updatefarmland = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const farmlandindisasterareasObj = {
        is_use_PB_resoc: value.is_use_PB_resoc,
        disaster_type: value.disaster_type,
        frequncy_disaster: value.frequncy_disaster,
        disaster_response: value.disaster_response,
        national_res_id: value.national_res_id
    };
    await farmlandindisasterareasServices.update(farmlandindisasterareasObj, id)
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


const deletefarmland = async (req, res) => {
    await farmlandindisasterareasServices.deleted(req.params.id)
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
    farmlandList,
    findOnefarmlandList,
    createfarmland,
    updatefarmland,
    deletefarmland,
};




