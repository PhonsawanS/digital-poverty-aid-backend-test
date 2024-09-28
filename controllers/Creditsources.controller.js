const creditsourcesService = require('../services/Creditsources.service')
const Joi = require('joi');


//Create Validators
const CreateSchema = Joi.object({
    form: Joi.string().required(),                            // STRING type
    outstanding_amount: Joi.number().precision(2).required(), // FLOAT type
    debt_id: Joi.number().integer().required()                // INTEGER type
  });
  

//Update Validators 
// .optional()
const UpdateSchema = Joi.object({
    form: Joi.string().required().optional(),                            // STRING type
    outstanding_amount: Joi.number().precision(2).required().optional(), // FLOAT type
    debt_id: Joi.number().integer().required().optional()                // INTEGER type
});


const  CreditsourcesList = async (req, res) => {
    await creditsourcesService.get()
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

const findOneCreditsources= async (req, res) => {
    await creditsourcesService.findOneById(req.params.id)
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


const createCreditsources = async (req, res) => {

    // Validate request body
const { error, value } = CreateSchema.validate(req.body);

if (error) {
    return res.status(400).send({
        msg: "Validation error",
        error: error.details
    });
}
   const creditsourcesObj ={
    form: value.form,
    outstanding_amount:value.outstanding_amount,
    debt_id:value.debt_id,
   };
   await creditsourcesService.create(creditsourcesObj)
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

const updateCreditsources = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

 if (error) {
     return res.status(400).send({
         msg: "Validation error",
         error: error.details
     });
 }
    const creditsourcesObj ={
        form: value.form,
        outstanding_amount:value.outstanding_amount,
        debt_id:value.debt_id,
    };
    await creditsourcesService.update(creditsourcesObj,id)
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


const deleteCreditsources= async (req, res) => {
    await creditsourcesService.deleted(req.params.id)
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
    CreditsourcesList,
    findOneCreditsources,
    createCreditsources,
    updateCreditsources,
    deleteCreditsources,
};


