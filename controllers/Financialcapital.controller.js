const financialcapitalService = require('../services/Financialcapital.service');
const Joi = require('joi');
const { sequelize } = require('../models'); // ต้อง import sequelize เพื่อใช้ transaction
const {CreateFinancialCapitalSchema,UpdateFinancialCapitalSchema,combinedSchema} = require('../validators/Financialcapital/financial.capital.validator')


const FinancialCapitalList = async (req, res) => {
    await financialcapitalService.getFinalcapital()
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

const findOneFinancialCapital = async (req, res) => {
    await financialcapitalService.findOneById(req.params.id)
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

const createFinancialCapital = async (req, res) => {
    // Validate request body
    const { error, value } = CreateFinancialCapitalSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const financialcapitalObj = {
        formId: value.formId
    };
    await financialcapitalService.create(financialcapitalObj)
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

const updateFinancialCapital = async (req, res) => {
    const id = req.params.id;

    // Validate request body
    const { error, value } = UpdateFinancialCapitalSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const financialcapitalObj = {
        formId: value.formId
    };
    await financialcapitalService.update(financialcapitalObj, id)
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

const deleteFinancialCapital = async (req, res) => {
    await financialcapitalService.deleted(req.params.id)
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

//Create 3 table
const createCombined = async (req, res) => {
    try {
      const { error, value } = combinedSchema.validate(req.body);
      if (error) {
        return res.status(400).send({ msg: "Validation error", error: error.details });
      }
  
      // เรียกใช้ Service เพื่อสร้างข้อมูลรวม
      const result = await financialcapitalService.createCombined(value); //ส่งค่าที่ Validate ผ่านแล้ว
  
      res.status(201).send({
        msg: "success",
        status: 201,
        data: {
          Financialcapital: result.Financialcapital,
          Saving: result.Saving,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: "error", status: 500, err: err.message });
    }
  };


module.exports = {
    FinancialCapitalList,
    findOneFinancialCapital,
    createFinancialCapital,
    updateFinancialCapital,
    deleteFinancialCapital,
    createCombined,
};
