const db = require("../models");
const user_model = db.User;
const token_model = db.Token;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET; //for gen token
const { Op } = require("sequelize");

//validate input
const {
  createUserSchema,
  updateUserSchema,
  loginSchema,
} = require("../validators/User/User.validator");
const { errors } = require("pg-promise");



const loginHistory = async(req,res)=>{
  try{
    const results = await token_model.findAll({
      where:{
        user_id: req.user.id
      },
      order:[["createdAt","DESC"]], //ล่าสุดมาก่อน
      attributes:["createdAt","expiresAt"]
    })

    if (results.length === 0) {
      return res.status(404).send({ message: "ไม่พบประวัติการเข้าสู่ระบบ" });
    }

    return res.status(200).send({message:'success',results:results})

  }catch(err){
    return res.status(500).send({message:"Sever error",errors:err.message})
  }
}

const userList = async(req,res)=>{
  try{
    const user = await user_model.findAll({
      attributes:{exclude:['password']},
      where:{
        role:{
          [Op.not]:null
        }
      }
    })

    return res.status(200).send({message:'success',user:user})
  }catch(err){
    return res.status(500).send({message:'Sever error',errors:err})
  }
}

const findOneUser = async(req,res)=>{
  try{
    const userId = req.params.id

    const user = await user_model.findOne({
      where:{id:userId},
      attributes:{exclude:['password']}
    })

    return res.status(200).send({message:'success',user:user})

  }catch(err){
    return res.status(500).send({message:'Sever error',errors:err})
  }
}

const deleteUser = async(req,res)=>{
  try{
    const userId = req.params.id

    const user = await user_model.destroy({
      where:{id:userId}
    })
    return res.status(200).send({message:'User deleted',user})

  }catch(err){
    return res.status(500).send({message:'Sever error',err})
  }
}

const findNonApprove = async(req,res)=>{
  try{
    const results = await user_model.findAll({
      where:{
        role:{
          [Op.is]:null
        }
      }
    })

    return res.status(200).send({message:'success',results:results})
  }catch(err){
    return res.status(500).send({message:'Sever Error',errors:err})
  }
}

const approveUser = async(req,res)=>{
  try{
    const id = req.params.id
    const user = await user_model.findByPk(id)

    if(user === null){
      return res.status(404).send({message:'User not found'})
    }

    //Assign role
    const adminStatus = ['อสม', 'อพม', 'พอช', 'ผู้ใหญ่บ้าน']
    const superAdminStatus = ['ทีมวิจัย', 'ศึกษาธิการจังหวัด', 'พมจ', 'พช']

    if(adminStatus.includes(user.status)){
      user.role = 'admin'
    }else if(superAdminStatus.includes(user.status)){
      user.role = 'superAdmin'
    }else{
      return res.status(400).send({message:'Invalid user status for role assignment'})
    }

    user.approveBy = req.user.id
    await user.save()

    return res.status(200).send({message:'success',user})
    
  }catch(err){
    return res.status(500).send({message:'Sever Error',errors:err.message})
  }
}

module.exports = { 
   userList,
   findOneUser,
   deleteUser,
   findNonApprove,
   approveUser,
   loginHistory
   };
