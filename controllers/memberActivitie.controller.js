const memberactivityService = require('../services/memberActivitie.service')
const Joi = require('joi');

//Create Validators
const CreateMemberactivitySchema = Joi.object({
    activity_name: Joi.string().required(),
    activity_type: Joi.string().required(),
    achievement: Joi.string().required(),
    start_date: Joi.date().required(),
    operator:Joi.string().required(),
    is_poor_households_TPMAP: Joi.boolean().required(),
    houseId: Joi.number().integer().optional()
});


//Update Validators
const UpdateMemberactivitySchema = Joi.object({
    activity_name: Joi.string().required(),
    activity_type: Joi.string().required(),
    achievement: Joi.string().required(),
    start_date: Joi.date().required(),
    operator:Joi.string().required(),
    is_poor_households_TPMAP: Joi.boolean().required(),
    houseId: Joi.number().integer().optional()
});



const memberactivityList = async (req, res) => {
    await memberactivityService.getMemberActivity()
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

const findOneMemberactivity = async (req, res) => {
    await memberactivityService.findOneById(req.params.id)
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


const createMemberactivity = async (req, res) => {
     // Validate request body
 const { error, value } = CreateMemberactivitySchema.validate(req.body);
 if (error) {
    return res.status(400).send({
        msg: "Validation error",
        error: error.details
    });
}

    const memberactivityObj ={
        activity_name: value.activity_name,
        activity_type: value.activity_type,
        achievement: value.achievement,
        start_date: value.start_date,
        operator: value.operator,
        is_poor_households_TPMAP: value.is_poor_households_TPMAP,
        houseId:value.houseId
    };
    await memberactivityService.create(memberactivityObj)
    .then(data => {
        res.send({
            data: data,
            msg:"success",
            status: 200,
            err:''
        })
    })
    .catch(err => {
        res.send({
            data:null,
            msg:"error",
            status:500,
            err:err
        });
    });
}

const updateMemberactivity = async (req, res) => {
    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateMemberactivitySchema.validate(req.body);

 if (error) {
     return res.status(400).send({
         msg: "Validation error",
         error: error.details
     });
 }
    const memberactivityObj ={
        activity_name: value.activity_name,
        activity_type: value.activity_type,
        achievement: value.achievement,
        start_date: value.start_date,
        operator: value.operator,
        is_poor_households_TPMAP: value.is_poor_households_TPMAP,
        houseId:value.houseId
    };
    await memberactivityService.update(memberactivityObj,id)
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



const deleteMemberactivity = async (req, res) => {
    await memberactivityService.deleted(req.params.id)
    .then(data => {
        res.send({
            data:data,
            msg:"success",
            status: 200,
            err: ''
        })
    })
    .catch(err =>{
        res.send({
            data: null,
            msg: "error",
            status: 500,
            err: err
        })
    })
}




module.exports = {
    memberactivityList,
    findOneMemberactivity,
    createMemberactivity,
    deleteMemberactivity,
    updateMemberactivity
};


