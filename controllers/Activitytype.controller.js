const activitytypeService = require('../services/activitytype.service')
const { CreateSchema, UpdateSchema } = require('../validators/Activitytype/activitytype.validator')


const ActivitytypeList = async (req, res) => {
    await activitytypeService.get()
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

const findOneActivitytypeList = async (req, res) => {
    await activitytypeService.findOneById(req.params.id)
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


const createActivitytype = async (req, res) => {

    // Validate request body
    const { error, value } = CreateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const activitytypeObj = {
        activity: value.activity,
        participation_level: value.participation_level,
        frequncy: value.frequncy,
        social_cap_id: value.social_cap_id
    };
    await activitytypeService.create(activitytypeObj)
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

const updateActivitytype = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const activitytypeObj = {
        activity: value.activity,
        participation_level: value.participation_level,
        frequncy: value.frequncy,
        social_cap_id: value.social_cap_id
    };
    await activitytypeService.update(activitytypeObj, id)
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


const deleteActivitytype = async (req, res) => {
    await activitytypeService.deleted(req.params.id)
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
    ActivitytypeList,
    findOneActivitytypeList,
    createActivitytype,
    updateActivitytype,
    deleteActivitytype,
};
