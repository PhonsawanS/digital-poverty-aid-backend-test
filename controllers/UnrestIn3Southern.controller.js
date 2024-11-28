const unrestIn3SouthernService = require("../services/UnrestIn3Southern.services")

const { unresSchema, updateunresSchema} = require("../validators/UnrestIn3Southern/UnrestIn3Southern.validator"); //Validator

const List = async (req, res) => {
    await unrestIn3SouthernService

      .getUnres()  //เรียกเข้าฟังก์ชัน
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
  const findOneUnres = async (req, res) => {
    await unrestIn3SouthernService
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
    const { error, value } = unresSchema.validate(req.body);
  
    if (error) {
      return res.status(400).send({
        msg: "Validation error",
        error: error.details,
      });
    }
    //ส่ง value ไปสร้างตามฟิลด์
    const data = await unrestIn3SouthernService.create(value);
    res.send({ data, msg: "success", status: 200 });
  };
  
 
  const updateUnres = async (req, res) => {
      try {
          const { error, value } = updateunresSchema.validate(req.body);
          if (error) {
              return res.status(400).send({ msg: "Validation error", error: error.details });
          }
          
          const data = await unrestIn3SouthernService.update(value, req.params.id);
          res.send({ data, msg: "success", status: 200 });
      } catch (err) {
          res.status(500).send({ data: null, msg: "error", status: 500, err });
      }
  };
  
  const deleteUnres = async (req, res) => {
    await unrestIn3SouthernService
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
    findOneUnres,
    create,
    updateUnres,
    deleteUnres,

  };
  