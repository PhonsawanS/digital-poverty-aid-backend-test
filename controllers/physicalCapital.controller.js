const physicalCapitalService = require('../services/PhysicalCapital.service')
const db = require('../models')
const phy_capital_model = db.PhysicalCapital
const hosehold_model = db.Household
const subdis_cordinate_model = db.SubdistrictCoordinates //หาพิกัดหากไม่มีข้อมูล pin

const { Op } = require("sequelize");
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


const getAllLocation = async(req,res)=>{
  try{
    const results = await phy_capital_model.findAll({
      where:{
        lat:{[Op.ne]:null},
        lon:{[Op.ne]:null}
      },
      attributes:['id','lat','lon'],
      include:{
        model:hosehold_model,
        attributes:['id','host_fname','host_lname']
      },
    })

    return res.status(200).send({message:'success',results})
  }catch(err){
    return res.status(500).send({message:'Sever error',error:err.message})
  }
}

const getLocationById = async (req,res)=>{
  try{

    const { id } = req.params;

    let result = await hosehold_model.findByPk(id, {
      attributes:['id','host_fname','host_lname','subdistrict','district'],
      include: {
        model: phy_capital_model,
        attributes:['id','lat','lon']
      }
    });

    // แปลง result เป็น plain object
    result = result.get({ plain: true });

    //หากไม่มีข้อมูล pin ไปค้นหา pin ที่เตรียมไว้ใน DB
    if(!result.PhysicalCapital?.lat || !result.PhysicalCapital?.lon){

      const cordinates = await subdis_cordinate_model.findOne({
        where:{
          subdistrict: result.subdistrict,
          district: result.district
        },
        attributes:['lat','lon']
      })
      //แทนที่ค่า lat lon
      if (cordinates) {
        result.PhysicalCapital.lat = cordinates.lat;
        result.PhysicalCapital.lon = cordinates.lon;
      }
    }

    return res.status(200).send({
      message:'success',
      result: result
    });

  }catch(err){
    return res.status(500).send({message:'Server error',error:err.message})
  }
}

module.exports = {
  List,
  findOneMember,
  create,
  updateCapital,
  deleteCapital,
  createCombind,
  getAllLocation,
  getLocationById
};
