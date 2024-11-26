const pbresourceforincomeServices = require('../services/pbresourceforincome.service')
const { CreateSchema, UpdateSchema } = require('../validators/Pbresourceforincome/pbresourceforincome.validator')


const PbresourceforincomeList = async (req, res) => {
    await pbresourceforincomeServices.get()
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

const findOnePbresourceforincomeList = async (req, res) => {
    await pbresourceforincomeServices.findOneById(req.params.id)
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


const createPbresourceforincome = async (req, res) => {

    // Validate request body
    const { error, value } = CreateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const pbresourceforincomeObj = {
        is_use_PB_resoc: value.is_use_PB_resoc,
        rescource: value.rescource,
        distanceKM: value.distanceKM,
        description: value.description,
        national_res_id: value.national_res_id
    };
    await pbresourceforincomeServices.create(pbresourceforincomeObj)
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

const updatePbresourceforincome = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const pbresourceforincomeObj = {
        is_use_PB_resoc: value.is_use_PB_resoc,
        rescource: value.rescource,
        distanceKM: value.distanceKM,
        description: value.description,
        national_res_id: value.national_res_id
    };
    await pbresourceforincomeServices.update(pbresourceforincomeObj, id)
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


const deletePbresourceforincome = async (req, res) => {
    await pbresourceforincomeServices.deleted(req.params.id)
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
    PbresourceforincomeList,
    findOnePbresourceforincomeList,
    createPbresourceforincome,
    updatePbresourceforincome,
    deletePbresourceforincome,
};




