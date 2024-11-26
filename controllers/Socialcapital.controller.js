const socialcapitalService = require('../services/Socialcapital.service')
const { UpdateSocialcapitalSchema, CreateSocialcapitalSchema } = require('../validators/Socialcapital/socialcapital.validator')


const socialcapitalList = async (req, res) => {
    await socialcapitalService.getSocialcapital()
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

const findOnesocialcapital = async (req, res) => {
    await socialcapitalService.findOneById(req.params.id)
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

const createsocialcapital = async (req, res) => {

    // Validate request body
    const { error, value } = CreateSocialcapitalSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const socialcapitalObj = {
        formId: value.formId
    };
    await socialcapitalService.create(socialcapitalObj)
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


const updatesocialcapital = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSocialcapitalSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const socialcapitalObj = {
        formId: value.formId
    };
    await socialcapitalService.update(socialcapitalObj, id)
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


const deletesocialcapital = async (req, res) => {
    await socialcapitalService.deleted(req.params.id)
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
    socialcapitalList,
    findOnesocialcapital,
    createsocialcapital,
    updatesocialcapital,
    deletesocialcapital
};
