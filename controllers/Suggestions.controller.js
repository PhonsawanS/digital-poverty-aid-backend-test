const suggestionsService = require("../services/Suggestions.service")
const { suggesSchema, updatesuggesSchema} = require("../validators/Suggestions/Suggestions.validator"); //Validator

const List = async (req, res) => {
    await suggestionsService
      .getSugges()  //เรียกเข้าฟังก์ชัน
      .then((data) => {
        res.send({
          data: data,
          msg: "success",
          status: 200,
        });
      })
      .catch((err) => {
        res.send({
          data: null,
          msg: "error",
          status: 500,
          err: err,
        });
      });
  };
  const findOneSugges = async (req, res) => {
    await suggestionsService
      .findOneById(req.params.id)
      .then((data) => {
        res.send({
          data: data,
          msg: "success",
          status: 200,
          err: "",
        });
      })
      .catch((err) => {
        res.send({
          data: null,
          msg: "error",
          status: 500,
          err: err,
        });
      });
  };
  
  const create = async (req, res) => {
    // Validate ข้อมูลจาก req.body ก่อน
    const { error, value } = suggesSchema.validate(req.body);
  
    if (error) {
      return res.status(400).send({
        msg: "Validation error",
        error: error.details,
      });
    }
    //ส่ง value ไปสร้างตามฟิลด์
    const data = await suggestionsService.create(value);
    res.send({ data, msg: "success", status: 200 });
  };
  
  const updateSugges = async (req, res) => {
      try {
          const { error, value } = updatesuggesSchema.validate(req.body);
          if (error) {
              return res.status(400).send({ msg: "Validation error", error: error.details });
          }
          
          const data = await suggestionsService.update(value, req.params.id);
          res.send({ data, msg: "success", status: 200 });
      } catch (err) {
          res.status(500).send({ data: null, msg: "error", status: 500, err });
      }
  };
  
  const deleteSugges = async (req, res) => {
    await suggestionsService
      .deleted(req.params.id)
      .then((data) => {
        res.send({
          data: data,
          msg: "success",
          status: 200,
          err: "",
        });
      })
      .catch((err) => {
        res.send({
          data: null,
          msg: "error",
          status: 500,
          err: err,
        });
      });
  };
  
  module.exports = {
    List,
    findOneSugges,
    create,
    updateSugges,
    deleteSugges
  };
  