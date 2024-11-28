const physicalCapitalService = require('../services/PhysicalCapital.service')
const {createSchema,updateSchema,combinedSchema } = require('../validators/PhysicalCapital/PhysicalCapital.validator')

const List = async (req, res) => {
  await physicalCapitalService
    .getCapital()
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
const findOneMember = async (req, res) => {
  await physicalCapitalService
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
  const data = await physicalCapitalService.create(value);
  res.send({ data, msg: "success", status: 200 });
};



const updateCapital = async (req, res) => {
    try {
        const { error, value } = updateSchema.validate(req.body);
        if (error) {
            return res.status(400).send({ msg: "Validation error", error: error.details });
        }
        
        const data = await physicalCapitalService.update(value, req.params.id);
        res.send({ data, msg: "success", status: 200 });
    } catch (err) {
        res.status(500).send({ data: null, msg: "error", status: 500, err });
    }
};

const deleteCapital = async (req, res) => {
  await physicalCapitalService
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

// createCombind
const createCombind = async (req, res) => {
  // Validate ข้อมูลจาก req.body ก่อน
  const { error, value } = combinedSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      msg: "Validation error",
      error: error.details,
    });
  }
    // เรียกใช้ Service เพื่อสร้างข้อมูลรวม
    const result = await physicalCapitalService.createCombined(value); //ส่งค่าที่ Validate ผ่านแล้ว

    res.status(201).send({
      msg: "success",
      status: 201,
      data: {
        PhysicalCapital: result.PhysicalCapital,
        HouseHygiene: result.HouseHygiene,
        UtilityWater: result.UtilityWater,
        UrbanArea: result.UrbanArea,
      },
    });
};


module.exports = {
  List,
  findOneMember,
  create,
  updateCapital,
  deleteCapital,
  createCombind
};
