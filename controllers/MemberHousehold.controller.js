const memberHouseService = require("../services/member.house.services");
const humanCapitalService = require("../services/humancapital.services")
const socialWelfareService = require("../services/SocialWelfare.services")
const { memberSchema, updateMemberSchema,combinedSchema} = require("../validators/MemberHousehold/member.house.validator"); //Validator

const List = async (req, res) => {
  await memberHouseService
    .getMember()
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
  await memberHouseService
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
  const { error, value } = memberSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      msg: "Validation error",
      error: error.details,
    });
  }
  //ส่ง value ไปสร้างตามฟิลด์
  const data = await memberHouseService.create(value);
  res.send({ data, msg: "success", status: 200 });
};

//Create 3 table
const createCombined = async (req, res) => {
  try {
    const { error, value } = combinedSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ msg: "Validation error", error: error.details });
    }

    // เรียกใช้ Service เพื่อสร้างข้อมูลรวม
    const result = await memberHouseService.createCombined(value); //ส่งค่าที่ Validate ผ่านแล้ว

    res.status(201).send({
      msg: "success",
      status: 201,
      data: {
        memberHousehold: result.memberHousehold,
        humanCapital: result.humanCapital,
        SocialWelfare: result.socialWelfareArray,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "error", status: 500, err: err.message });
  }
};


const updateMember = async (req, res) => {
    try {
        const { error, value } = updateMemberSchema.validate(req.body);
        if (error) {
            return res.status(400).send({ msg: "Validation error", error: error.details });
        }
        
        const data = await memberHouseService.update(value, req.params.id);
        res.send({ data, msg: "success", status: 200 });
    } catch (err) {
        res.status(500).send({ data: null, msg: "error", status: 500, err });
    }
};

const deleteMember = async (req, res) => {
  await memberHouseService
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
  findOneMember,
  create,
  updateMember,
  deleteMember,
  createCombined,
};
