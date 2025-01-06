const memberHouseService = require("../services/member.house.services");
const { memberSchema, updateMemberSchema,combinedSchema} = require("../validators/MemberHousehold/member.house.validator"); //Validator

const db = require('../models')
const member_model = db.MemberHousehold
const household_model = db.Household
const { Op } = require("sequelize");


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

const findByAge = async(req,res)=>{
  try{ 
    const today = new Date()
    //convert year 
    const yearBE = today.getFullYear()+ 543
    const month = today.getMonth() +1
    const day = today.getDate()


    let {minAge , maxAge } = req.params
    
    let { page = 1 , limit=30} = req.query //Paginatetion
    page = parseInt(page)
    limit = parseInt(limit)
    const offset = (page-1) * limit

    //หาวันที่ min,max 
    const maxBirthDate = new Date()
    maxBirthDate.setFullYear(today.getFullYear() - minAge)
    maxBirthDate.setMonth(today.getMonth());
    maxBirthDate.setDate(today.getDate() + 1);

    const minBirthDate = new Date();
    minBirthDate.setFullYear(today.getFullYear() - maxAge - 1); //(อายุมาก->เลขปีน้อย) 
    minBirthDate.setMonth(today.getMonth());
    minBirthDate.setDate(today.getDate());

    // แปลง คศ->พศ
    const startDateBE = new Date(minBirthDate)
    startDateBE.setFullYear(minBirthDate.getFullYear() + 543)
    
    const endDateBE = new Date(maxBirthDate)
    endDateBE.setFullYear(maxBirthDate.getFullYear() + 543)

    // ใช้ findAndCountAll เพื่อรับทั้งข้อมูลและจำนวนรวม
    const {count , rows} = await member_model.findAndCountAll({
      where:{
        birthdate:{
          [Op.between]:[startDateBE,endDateBE]
        }
      },
      attributes:[
        'title',
        'fname',
        'lname',
        'sex',
        'status_in_house',
        'health',
        'work_status',
        'phone',
        'birthdate'
      ],
      include:[{
        model:household_model,
        attributes:['house_code','house_number','subdistrict','district','province','postcode']
      }],
      //ตรงนี้เพิ่มมา
      limit,
      offset,
      order:[['birthdate','DESC']]
    })

    const totalPages = Math.ceil(count / limit);
    
    //return ไปแค่ช่วงอายุที่อยู่ในเกณฑ์เท่านั้น
    const fillterResults = rows.map(member=>{
      const birthdate = new Date(member.birthdate)
      let age = yearBE - birthdate.getFullYear()

      if(//ยังไม่ถึงวันเกิด -1
        month < (birthdate.getMonth()+1) ||
        (month ===(birthdate.getMonth()+1) && (day < birthdate.getDate()))
      ){
        age--;
      }
      return {
        ...member.toJSON(),
        age:age
      }
    }).filter(member => member.age >= minAge && member.age <= maxAge);

    

    return res.status(200).send({message:'success',
      month,
      day,
      currentPage:page,
      totalPages,
      totalItems:count,
      results:fillterResults})
  
  }catch(err){
    return res.status(500).send({message:"Sever errors",errors:err.message})
  }
}

module.exports = {
  List,
  findOneMember,
  create,
  updateMember,
  deleteMember,
  createCombined,
  findByAge
};
