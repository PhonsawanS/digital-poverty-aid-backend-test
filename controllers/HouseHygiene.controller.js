const houseHygieneService = require('../services/HouseHygiene.service')
const {createSchema,updateSchema } = require('../validators/HouseHygiene/HouseHygiene.validator')


const List = async (req, res) => {
  await houseHygieneService
    .getHygiene()
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
const findOne = async (req, res) => {
  await houseHygieneService
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
  const { error, value } = createSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      msg: "Validation error",
      error: error.details,
    });
  }
  //ส่ง value ไปสร้างตามฟิลด์
  const data = await houseHygieneService.create(value);
  res.send({ data, msg: "success", status: 200 });
};



const updateHygiene = async (req, res) => {
    try {
        const { error, value } = updateSchema.validate(req.body);
        if (error) {
            return res.status(400).send({ msg: "Validation error", error: error.details });
        }
        
        const data = await houseHygieneService.update(value, req.params.id);
        res.send({ data, msg: "success", status: 200 });
    } catch (err) {
        res.status(500).send({ data: null, msg: "error", status: 500, err });
    }
};

const deleteHygiene = async (req, res) => {
  await houseHygieneService
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
  findOne,
  create,
  updateHygiene,
  deleteHygiene
};
