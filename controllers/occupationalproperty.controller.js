const occupationalpropertyService =require('../services/occupationalproperty.service')
const {CreateSchema,UpdateSchema} = require('../validators/occupationalproperty/occupationalproperty.validator')

const OccupationalpropertylList = async (req, res) => {
    await occupationalpropertyService.get()
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

const findOneOccupationalproperty= async (req, res) => {
    await occupationalpropertyService.findOneById(req.params.id)
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


const createOccupationalproperty = async (req, res) => {

    // Validate request body
const { error, value } = CreateSchema.validate(req.body);

if (error) {
    return res.status(400).send({
        msg: "Validation error",
        error: error.details
    });
}
   const occupationalpropertyObj ={
       formId: value.formId,
       property_type: value.property_type
   };
   await occupationalpropertyService.create(occupationalpropertyObj)
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

const updateOccupationalproperty = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

 if (error) {
     return res.status(400).send({
         msg: "Validation error",
         error: error.details
     });
 }
    const occupationalpropertyObj ={
        formId: value.formId,
        property_type: value.property_type
    };
    await occupationalpropertyService.update(occupationalpropertyObj,id)
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


const deleteOccupationalproperty= async (req, res) => {
    await occupationalpropertyService.deleted(req.params.id)
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
    OccupationalpropertylList,
    findOneOccupationalproperty,
    createOccupationalproperty,
    updateOccupationalproperty,
    deleteOccupationalproperty,
};


