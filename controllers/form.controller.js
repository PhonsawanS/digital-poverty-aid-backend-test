const formService = require("../services/form.services");
const Joi = require('joi');

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

// ติดตั้ง plugin
dayjs.extend(utc);
dayjs.extend(timezone);

//Create  Validators
const CreateFormSchema = Joi.object({
  time_rec: Joi.date().required(), // Ensures that time_start is a valid date and required
  recder_title: Joi.string().required(),
  recder_fname: Joi.string().required(), 
  recder_lname: Joi.string().required(), 
  recder_phone: Joi.string().required(),  
});

//Update Validators
const UpdateFormSchema = Joi.object({
  time_rec: Joi.date().optional(), // Ensures that time_start is a valid date and required
  recder_title: Joi.string().optional(),
  recder_fname: Joi.string().optional(), 
  recder_lname: Joi.string().optional(), 
  recder_phone: Joi.string().optional(),  
});

const formList = async (req, res) => {
  await formService
    .getForms()
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
const findOneForm = async (req, res) => {
  await formService
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
  // Validate request body
  const { error, value } = CreateFormSchema.validate(req.body);

  if (error) {
      return res.status(400).send({
          msg: "Validation error",
          error: error.details
      });
  }
  const formObj = {
      time_rec: dayjs.tz(value.time_start, "Asia/Bangkok").toDate(),
      recder_title: (value.recder_title),
      recder_fname: (value.recder_fname),
      recder_lname: (value.recder_lname),
      recder_phone: (value.recder_phone),
  };


  await formService
    .create(formObj)
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

const updateForm = async (req, res) => {
  const id = req.params.id

  // Validate request body
  const { error, value } = UpdateFormSchema.validate(req.body);

  if (error) {
      return res.status(400).send({
          msg: "Validation error",
          error: error.details
      });
  }

  const formObj = {
    time_rec: dayjs.tz(value.time_start, "Asia/Bangkok").toDate(),
    recder_title: (value.recder_title),
    recder_fname: (value.recder_fname),
    recder_lname: (value.recder_lname),
    recder_phone: (value.recder_phone),
};


  await formService
    .update(formObj, id)
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

const deleteForm = async (req, res) => {
  await formService
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

//create form with household
const createFWH = async (req, res) => {
  try {
    //แยกข้อมูลในส่วนของ form และ HH

    const formObj = {
      time_start: dayjs.tz(req.body.time_start, "Asia/Bangkok").toDate(),
      time_end: dayjs.tz(req.body.time_end, "Asia/Bangkok").toDate(),
    };

    const houseObj = {
      house_code: req.body.house_code,
      host_title: req.body.host_title,
      host_fname: req.body.host_fname,
      host_lname: req.body.host_lname,
      host_national_id: req.body.host_national_id,
      green_book_id: req.body.green_book_id,
      postcode: req.body.postcode,
      subdistrict: req.body.subdistrict,
      district: req.body.district,
      province: req.body.province,
      house_number: req.body.house_number,
      village: req.body.village,
      alley: req.body.alley,
      road: req.body.road,
      total_house_member: req.body.total_house_member,
      total_house_activity: req.body.total_house_activity,
    };

    // เรียกใช้ service เพื่อสร้างข้อมูล
    const data = await formService.createFWH(formObj, houseObj);

    res.status(200).send({
      data: data,
      msg: "success",
      status: 200,
      err: "",
    });
    
  } catch (e) {
    res.status(500).send({
      data: null,
      msg: "error",
      status: 500,
      err: e.msg,
    });
  }
};

module.exports = {
  formList,
  findOneForm,
  create,
  updateForm,
  deleteForm,
  createFWH,
};
