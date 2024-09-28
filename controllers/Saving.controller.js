const savingService =require('../services/Saving.service')
const Joi = require('joi');


//Create Validators
const CreateSchema = Joi.object({
    is_has_saving: Joi.boolean().required(), 
    saving_type: Joi.string().required(),
    amount: Joi.number().precision(2).required(),
    finan_capital_id: Joi.number().integer().required(), 
});

//Update Validators
const UpdateSchema = Joi.object({
    is_has_saving: Joi.boolean().optional(), 
    saving_type: Joi.string().optional(), 
    amount: Joi.number().precision(2).optional(), 
    finan_capital_id: Joi.number().integer().optional(), 
});


const SavingList = async (req, res) => {
    await savingService.get()
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

const findOneSaving= async (req, res) => {
    await savingService.findOneById(req.params.id)
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


const createSaving = async (req, res) => {

    // Validate request body
const { error, value } = CreateSchema.validate(req.body);

if (error) {
    return res.status(400).send({
        msg: "Validation error",
        error: error.details
    });
}
   const savingObj ={
    finan_capital_id: value.finan_capital_id,
       is_has_saving: value.is_has_saving,
       saving_type: value.saving_type,
       amount:value.amount,

   };
   await savingService.create(savingObj)
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

const updateSaving = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

 if (error) {
     return res.status(400).send({
         msg: "Validation error",
         error: error.details
     });
 }
    const savingObj ={
        finan_capital_id: value.finan_capital_id,
        is_has_saving: value.is_has_saving,
        saving_type: value.saving_type,
        amount:value.amount,
    };
    await savingService.update(savingObj,id)
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


const deleteSaving= async (req, res) => {
    await savingService.deleted(req.params.id)
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
    SavingList,
    findOneSaving,
    createSaving,
    updateSaving,
    deleteSaving,
};


