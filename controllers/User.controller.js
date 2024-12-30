const db = require("../models");
const user_model = db.User;

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



const register = async (req, res) => {
  const { error, value } = createUserSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      message: "Validation error",
      error: error.details,
    });
  }

  try {
    // Hash password with salt rounds 10
    const hashedPassword = await bcrypt.hash(value.password, 10);

    // Check email
    const existingEmail = await user_model.findOne({
      where: { email: value.email },
    });

    if (existingEmail) {
      return res
        .status(400)
        .send({
          message: "มีอีเมลล์นี้อยู่ในระบบอยู่แล้วกรุณากรอกอีเมลล์อื่น",
        });
    }

    // Check username
    const existingUsername = await user_model.findOne({
      where: { username: value.username },
    });

    if (existingUsername) {
      return res
        .status(400)
        .send({ message: "มี username นี้อยู่ในระบบอยู่แล้วกรุณาใช้ชื่ออื่น" });
    }

    // If both email and username are available, create the user
    const user = await user_model.create({
      email: value.email,
      username: value.username,
      password: hashedPassword,
      title: value.title,
      fname: value.fname,
      lname: value.lname,
      phone: value.phone,
      role: value.role,
      status: value.status,
    });

    return res.status(201).send({
      message: "success"
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: "Server error", error: err.message });
  }
};

const login = async (req, res) => {
  const { error, value } = loginSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .send({ message: "Validation error", error: error.details });
  }

  try {
    const username = value.username;

    const user = await user_model.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง" });
    }

    const passwordValit = await bcrypt.compare(value.password, user.password);

    if (!passwordValit) {
      return res.status(401).send({ message: "รหัสผ่านไม่ถูกต้อง" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
        status: user.status,
      },
      secret,
      { expiresIn: "24h" }
    );

    return res.status(200).send({
      message: "Login success",
      data: {
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
          status:user.status
        },
      },
      Token: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Sever error", err: err.message });
  }
};

const currentUser = async(req,res)=>{
  try{
    const user = await user_model.findOne({
      where:{
        id: req.user.id
      },
      attributes:{exclude:['password','phone']}
    })

    return res.status(200).send(user)

  }catch(e){
    return res.status(500).send({message:'Sever error',errors:e})
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
  register,
   login,currentUser,
   userList,
   findOneUser,
   deleteUser,
   findNonApprove,
   approveUser
   };
