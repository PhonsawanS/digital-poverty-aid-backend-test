const activitygrouptypeService = require('../services/activitygrouptype.service')
const {CreateActivitygrouptypeSchema,UpdateActivitygrouptypeSchema} = require('../validators/Activitygrouptype/activitygrouptype.validator')


const   ActivitygrouptypeList = async (req, res) => {
    await activitygrouptypeService.getActivitygrouptype()
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

const findOneActivitygrouptypeList= async (req, res) => {
    await activitygrouptypeService.findOneById(req.params.id)
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


const createActivitygrouptype = async (req, res) => {

    // Validate request body
const { error, value } = CreateActivitygrouptypeSchema.validate(req.body);

if (error) {
    return res.status(400).send({
        msg: "Validation error",
        error: error.details
    });
}
   const activitygrouptypeObj ={
    activity_group: value.activity_group,
    is_member:value.is_member,
    dependency:value.dependency,
    social_cap_id:value.social_cap_id
   };
   await activitygrouptypeService.create(activitygrouptypeObj)
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

const updateActivitygrouptype = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateActivitygrouptypeSchema.validate(req.body);

 if (error) {
     return res.status(400).send({
         msg: "Validation error",
         error: error.details
     });
 }
    const activitygrouptypeObj ={
        activity_group: value.activity_group,
        is_member:value.is_member,
        dependency:value.dependency,
        social_cap_id:value.social_cap_id
    };
    await activitygrouptypeService.update(activitygrouptypeObj,id)
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


const deleteActivitygrouptype= async (req, res) => {
    await activitygrouptypeService.deleted(req.params.id)
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
    ActivitygrouptypeList,
    findOneActivitygrouptypeList,
    createActivitygrouptype,
    updateActivitygrouptype,
    deleteActivitygrouptype,
};


