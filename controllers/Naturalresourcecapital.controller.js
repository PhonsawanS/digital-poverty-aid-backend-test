const naturalresourcecapitalService = require('../services/naturalresourcecapital.service')
const { UpdateSchema, CreateSchema } = require('../validators/Naturalresourcecapital/naturalresourcecapital.validator')


const naturalresourcecapitalList = async (req, res) => {
    await naturalresourcecapitalService.get()
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

const findOnenaturalresourcecapital = async (req, res) => {
    await naturalresourcecapitalService.findOneById(req.params.id)
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

const createnaturalresourcecapital = async (req, res) => {

    // Validate request body
    const { error, value } = CreateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const naturalresourcecapitalObj = {
        formId: value.formId
    };
    await naturalresourcecapitalService.create(naturalresourcecapitalObj)
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


const updatenaturalresourcecapital = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const naturalresourcecapitalObj = {
        formId: value.formId
    };
    await naturalresourcecapitalService.update(naturalresourcecapitalObj, id)
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


const deletenaturalresourcecapital = async (req, res) => {
    await naturalresourcecapitalService.deleted(req.params.id)
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
    naturalresourcecapitalList,
    findOnenaturalresourcecapital,
    createnaturalresourcecapital,
    updatenaturalresourcecapital,
    deletenaturalresourcecapital
};
