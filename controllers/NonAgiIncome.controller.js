const nonAgiIncomeService =require('../services/NonAgiIncome.service')
const Joi = require('joi');


//Create Validators
const CreateSchema = Joi.object({
    income_type: Joi.string().required(),
    amount_per_yaer: Joi.number().precision(2).required(), // FLOAT type
    cost_per_year: Joi.number().precision(2).required(),   // FLOAT type
    finan_capital_id: Joi.number().integer().required()    // INTEGER type
});

//Update Validators
const UpdateSchema = Joi.object({
    income_type: Joi.string().required().optional(),
    amount_per_yaer: Joi.number().precision(2).required().optional(), // FLOAT type
    cost_per_year: Joi.number().precision(2).required().optional(),  // FLOAT type
    finan_capital_id: Joi.number().integer().required().optional(),    // INTEGER type
});


const  NonAgiIncomeList = async (req, res) => {
    await nonAgiIncomeService.get()
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

const findOneNonAgiIncome= async (req, res) => {
    await nonAgiIncomeService.findOneById(req.params.id)
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


const createNonAgiIncome = async (req, res) => {

    // Validate request body
const { error, value } = CreateSchema.validate(req.body);

if (error) {
    return res.status(400).send({
        msg: "Validation error",
        error: error.details
    });
}
   const nonAgiIncomeObj ={
    income_type: value.income_type,
    amount_per_yaer:value.amount_per_yaer,
    cost_per_year:value.cost_per_year,
    finan_capital_id:value.finan_capital_id
   };
   await nonAgiIncomeService.create(nonAgiIncomeObj)
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

const updateNonAgiIncome = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateSchema.validate(req.body);

 if (error) {
     return res.status(400).send({
         msg: "Validation error",
         error: error.details
     });
 }
    const nonAgiIncomeObj ={
        income_type: value.income_type,
        amount_per_yaer:value.amount_per_yaer,
        cost_per_year:value.cost_per_year,
        finan_capital_id:value.finan_capital_id
    };
    await nonAgiIncomeService.update(nonAgiIncomeObj,id)
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


const deleteNonAgiIncome= async (req, res) => {
    await nonAgiIncomeService.deleted(req.params.id)
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
    NonAgiIncomeList,
    findOneNonAgiIncome,
    createNonAgiIncome,
    updateNonAgiIncome,
    deleteNonAgiIncome,
};


