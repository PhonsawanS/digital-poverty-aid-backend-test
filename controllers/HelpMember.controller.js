const { Op } = require("sequelize");
const db = require("../models");
const help_member_model = db.HelpMember;
const member_model = db.MemberHousehold;
const household_model = db.Household;

const {
  createSchema,
  updateSchema,
} = require("../validators/HelpMember/HelpMember.validatoe");

const list = async (req, res) => {
  try {
    const results = await help_member_model.findAll({
      include: {
        model: member_model,
      },
    });
    return res.status(200).send({ message: "success", results });
  } catch (err) {
    return res.status(500).send({ message: "Sever error", error: err.message });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await help_member_model.findOne({
      where: {
        id,
      },
    });

    return res.status(200).send({ message: "success", result });
  } catch (err) {
    return res.status(500).send({ message: "Sever error", error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { error, value } = createSchema.validate(req.body);

    if (error) {
      return res.status(400).send({
        message: "Validation error",
        error: error.details,
      });
    }

    const result = await help_member_model.create(value);
    return res.status(200).send({ message: "success", result });
  } catch (err) {
    return res.status(500).send({ message: "Sever error", error: err.message });
  }
};

const deleteHelp = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await help_member_model.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).send({ message: "success", result });
  } catch (err) {
    return res.status(500).send({ message: "Sever error", error: err.message });
  }
};

//ค้นหาสมาชิกเพื่อจะทำการช่วยเหลือ
const searchMemberForHelp = async (req, res) => {
  try {
    //ดึงข้อมูลที่ส่งมาจาก query str
    const { 
      district, subdistrict, year, house_code, national_id, fname 
    } =req.query;

    let {page,limit} = req.query;
    page = parseInt(page)
    limit = parseInt(limit)
    const offset = (page-1)*limit

    //เงื่อนไขหาสมาชิก
    const memberCondition = {};

    if (national_id) {
      memberCondition.national_id = national_id;
    }
    if (fname) {
      memberCondition.fname = {
        [Op.like] : `%${fname}%`
      }
    }

    //เงื่อนไขหาครัวเรือน
    const householdCondition = {};
    if (district) {
      householdCondition.district = district;
    }
    if (subdistrict) {
      householdCondition.subdistrict = subdistrict;
    }
    if (house_code) {
      householdCondition.house_code = {
        [Op.iLike]: `%${house_code}%`,
      }
    }

    if (year) {
      let startDate = new Date(year, 0, 1); //เริ่มปี
      let endDate = new Date(year, 11, 31); //สิ้นปี

      memberCondition.createdAt = {
        [Op.between]: [startDate, endDate],
      };
    }

    //แยกนับและค้นหา

    const totalItems = await member_model.count({
      where: memberCondition,
      include: [
        {
          model: household_model,
          where: householdCondition,
          required: true,
        },
      ],
    })

    const rows = await member_model.findAll({
      where: memberCondition,
      include: [
        {
          model: household_model,
          where: householdCondition,
          required: true,
          //incude เพื่อเก็บจำนวนสมาชิกในครัวเรือน
          include: [
            {
              model: member_model,
              attributes: ["id"],
            },
          ],
        },
        //ดูข้อมูลการช่วยเหลือ
        {
          model:help_member_model,
          attributes:['id'],
          require:false
        }
      ],
      limit,
      offset,
    });

    if (rows.length === 0) {
      return res
        .status(200)
        .send({ message: "success", results: [], totalItems: 0 });
    }

    // เพิ่มข้อมูลจำนวนสมาชิกในแต่ละครัวเรือน
    const results = rows.map((member) => {
      const household = member.Household;
      const memberCount = household.MemberHouseholds.length;
     
      //สถานะการได้รับความช่วยเหลือ
      const helpStatus = member.HelpMembers && member.HelpMembers.length > 0
      ? 'ได้รับการช่วยเหลือแล้ว'
      : 'ยังไม่ได้รับการช่วยเหลือ'

      return {
        ...member.toJSON(),
          memberCount, 
          helpStatus
      };
    });

    return res.status(200).send({
       message: "success", 
       results: results ,
       currentPage: page,
       totalPage: Math.ceil(totalItems/limit),
       totalItems:totalItems
      });
  } catch (err) {
    return res.status(500).send({ message: "Sever error", error: err.message });
  }
};

//ค้นหาการช่วยเหลือของ member ที่ได้รับ
const findHelpMember = async(req,res)=>{
  try{
    const {memberId} = req.params;
    
    const result = await member_model.findOne({
      where:{
        id:memberId
      },
      include:[
        {
          model:household_model
        },
        {
          model:help_member_model
        }
      ]
    }) 

    //หาจำนวนการได้รับความช่วยเหลือของสมาชิกในครัวเรือนนี้
    const plainResult = result.toJSON();
    const houseId = plainResult.Household.id   

    const householdHelp = await member_model.findAll({
      where:{
        houseId:houseId
      },
      include:[
        {
          model: help_member_model,
          attributes:['id']
        }
      ]
    })

    //sum help
    const totalHelpInHousehold = householdHelp.reduce((total,member)=>{
      return total+ member.HelpMembers.length;
    },0)


    return res.status(200).send({
      message:'success',
      result:{
        ...result.toJSON(),
        totalGetHelp: totalHelpInHousehold    
      }
    })
    
  }catch(err){
    return res.status(500).send({message:'Sever error',error:err.message})
  }
}

module.exports = {
  list,
  create,
  deleteHelp,
  findOne,
  searchMemberForHelp,
  findHelpMember
};
