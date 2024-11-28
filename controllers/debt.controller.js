const debtService = require('../services/Debt.service')
const Joi = require('joi');
const {CreateSchema,UpdateSchema} = require('../validators/Debt/Debt.validator')

const  NonAgiIncomeList = async (req, res) => {
    await debtService.get()
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
    await debtService.findOneById(req.params.id)
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
   const debtObj ={
    firstis_has_debt: value.firstis_has_debt,
    description: value.description,
    finan_capital_id:valuefinan_capital_id
   };
   await debtService.create(debtObj)
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
    const debtObj ={
        firstis_has_debt: value.firstis_has_debt,
        description: value.description,
        finan_capital_id:valuefinan_capital_id
    };
    await debtService.update(debtObj,id)
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
    await debtService.deleted(req.params.id)
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


