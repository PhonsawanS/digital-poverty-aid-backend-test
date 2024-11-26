const pbresourceforliveServices = require('../services/pbresourceforlive.service')
const { CreateSchema, UpdateSchema } = require('../validators/Pbresourceforlive/pbresourceforlive.validator')


const PbresourceforliveList = async (req, res) => {
    await pbresourceforliveServices.get()
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

const findOnePbresourceforliveList = async (req, res) => {
    await pbresourceforliveServices.findOneById(req.params.id)
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


const createPbresourceforlive = async (req, res) => {

    // Validate request body
    const { error, value } = CreateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const pbresourceforliveObj = {
        is_use_PB_resoc: value.is_use_PB_resoc,
        rescource: value.rescource,
        distanceKM: value.distanceKM,
        description: value.description,
        national_res_id: value.national_res_id
    };
    await pbresourceforliveServices.create(pbresourceforliveObj)
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

const updatePbresourceforlive= async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const pbresourceforliveObj = {
        is_use_PB_resoc: value.is_use_PB_resoc,
        rescource: value.rescource,
        distanceKM: value.distanceKM,
        description: value.description,
        national_res_id: value.national_res_id
    };
    await pbresourceforliveServices.update(pbresourceforliveObj, id)
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


const deletePbresourceforlive = async (req, res) => {
    await pbresourceforliveServices.deleted(req.params.id)
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
    PbresourceforliveList,
    findOnePbresourceforliveList,
    createPbresourceforlive,
    updatePbresourceforlive,
    deletePbresourceforlive,
};




