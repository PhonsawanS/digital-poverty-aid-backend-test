const formService = require("../services/form.services");
const Joi = require('joi');

const db = require('../models')
const form_model = db.Form
const member_model = db.MemberHousehold
const phy_capital_model = db.PhysicalCapital
const house_hygiene_model = db.HouseHygiene
const saving_model = db.Saving
const debt_model = db.Debt
const occupation_model = db.Occupationalproperty
const houseIn_disaster = db.HouseInDisasterAreas
const farmland_model = db.Farmlandindisasterareas
const activity_group_model = db.Activitygrouptype
const activity_type_model = db.Activitytype

//TestGPS
const map_model = db.map

const { Op } = require('sequelize');

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

const sumCapital = async(req,res)=>{
  try{

    const counts = await Promise.all([
      // HumenCapital
      member_model.count({ where: { health: 'ผู้ป่วยติดเตียง/พิการพึ่งพาตัวเองไม่ได้' } }), // countHelth

      // Education
      member_model.count({ where: { max_education: 'ไม่ได้เรียน' } }), // countNoSchool
      member_model.count({ where: { max_education: 'ต่ำกว่าประถม' } }), // countLowPrimary
      member_model.count({ where: { max_education: 'ประถมศึกษา' } }), // countPrimary
      member_model.count({ where: { current_edu_level: 'ไม่ได้เรียน' } }), // countCurrentEdu
      member_model.count({ where: { edu_status: 'ออกกลางคัน(Dropout)' } }), // countDropOut

      // WorkStatus
      member_model.count({ where: { work_status: 'ไม่ทำงาน' } }), // countNotEmployed
      member_model.count({ where: { work_status: 'ว่างงาน' } }), // countUnEmployed
      member_model.count({ where: { work_status: 'ทำงาน' } }), // countEmployed
      member_model.count({ where: { work_can_made_income: { [Op.contains]: ['ไม่มี'] } } }), // countNoSkill

      // PhysicalCapital
      phy_capital_model.count({ where: { is_has_house: 'มีบ้านและที่ดินเป็นของตนเอง' } }), // countHouse
      phy_capital_model.count({ where: { house_status: 'บ้านทรุดโทรม หรือ วัสดุก่อสร้างไม่ถาวร' } }), // countStatus
      house_hygiene_model.count({ where: { item_storage: 'ไม่ใช่ (รก)' } }), // countItemStorage
      phy_capital_model.count({ where: { electricity_status: 'ไม่มีไฟฟ้าใช้' } }), // countNoElectric
      phy_capital_model.count({ where: { electricity_status: 'ต่อพ่วงไฟฟ้าจากคนอื่น (ไม่มีมิเตอร์ไฟฟ้าของตนเอง)' } }), // countNoMeter
      phy_capital_model.count({ where: { has_home_phone: false } }), // countNoHomePhone
      phy_capital_model.count({ where: { phone: 'ไม่มีโทรศัทพ์มือถือ' } }), // countNoPhone
      phy_capital_model.count({ where: { agricultural_land: { [Op.contains]: ['ไม่มีที่ทำกินทางการเกษตร/ไม่ได้ทำการเกษตร'] } } }), // countNoAgiLand
      phy_capital_model.count({ where: { agricultural_land: { [Op.contains]: ['ไม่มีพื้นที่ทำกินเป็นของตนเองแต่อาศัยพื้นที่ของบุคคลอื่นทำโดยไม่มีค่าเช่า'] } } }), // countAgiLandNoRent

      // Financial Capital
      saving_model.count({ where: { is_has_saving: false } }), // countNoSaving
      debt_model.count({ where: { is_has_debt: true } }), // countDebt
      occupation_model.count({ where: { is_has_property: false } }), // occupation

      // Natural Capital
      houseIn_disaster.count({ distinct: true, col: 'national_res_id', where: { is_in_disaster: true } }), // countHouseIndisster
      farmland_model.count({ distinct: true, col: 'national_res_id', where: { is_in_disaster: true } }), // countFarmlandInDisaster

      // Social Capital
      activity_group_model.count({ distinct: true, col: 'social_cap_id', where: { activity_group: 'ไม่เข่าร่วมกลุ่มกิจกรรม' } }), // countActivityGroup
      activity_type_model.count({ distinct: true, col: 'social_cap_id', where: { activity: 'ไม่เข้าร่วมกิจกรรม' } }), // countActivityType
    ]);

    // แยกค่าที่นับได้ออกมา
    const [
      countHelth,
      countNoSchool,
      countLowPrimary,
      countPrimary,
      countCurrentEdu,
      countDropOut,
      countNotEmployed,
      countUnEmployed,
      countEmployed,
      countNoSkill,
      countHouse,
      countStatus,
      countItemStorage,
      countNoElectric,
      countNoMeter,
      countNoHomePhone,
      countNoPhone,
      countNoAgiLand,
      countAgiLandNoRent,
      countNoSaving,
      countDebt,
      occupation,
      countHouseIndisster,
      countFarmlandInDisaster,
      countActivityGroup,
      countActivityType,
    ] = counts;

    
    return res.status(200).send({
      message:'success',
      HumenCapital:{
        bedBound:countHelth,
        Education:{
          NoSchool: countNoSchool,
          LowPrimary: countLowPrimary,
          Primary: countPrimary,
          CurrentEduNoStdy: countCurrentEdu,
          DropOut: countDropOut
        },
        WorkStatus:{
          NotEmployed: countNotEmployed,
          UnEmployed : countUnEmployed,
          Employed: countEmployed,
          NoSkill : countNoSkill
        }
      },
      PhysicalCapital:{
        HasHouse:countHouse,
        HouseStatus: countStatus, //สภาพบ้านทรุดโทรม
        ItemStorage: countItemStorage,
        NoElectric: countNoElectric,
        NoMeter:countNoMeter,
        NoHomePhone:countNoHomePhone,
        NoPhone: countNoPhone,
        NoAgiLand : countNoAgiLand,
        AgiLanadNoRent: countAgiLandNoRent
      },
      FinancialCapital:{
        NoSaving: countNoSaving,
        HasDebt: countDebt,
        NoOccupationalproperty : occupation
      },
      NaturalCapital:{
        HouseInDisasterArea: countHouseIndisster,
        FarmLandInDisasterArea: countFarmlandInDisaster
      },
      SocialCapital:{
        NoActivityGroup : countActivityGroup,
        NoActivityType: countActivityType
      }
    })

  }catch(err){
    return res.status(500).send({message:'Sever error',error:err.message})
  }
}

const getMap = async(req,res)=>{
  try{
    const results = await map_model.findAll()
    return res.status(200).send({message:'succrss',results:results})

  }catch(err){
    return res.status(500).send({message:'Sever error',error:err.message})
  }
}


module.exports = {
  formList,
  findOneForm,
  create,
  updateForm,
  deleteForm,
  sumCapital,
  getMap
};
