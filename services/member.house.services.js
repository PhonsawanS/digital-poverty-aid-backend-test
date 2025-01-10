const { where } = require("sequelize");
const db = require("../models");
const memberHouse_model = db.MemberHousehold;
const household_model = db.Household;
const humanCapital_model = db.HumanCapital;
const socialWelfare_model = db.SocialWelfare
const carrer_model = db.Career


exports.getMember = () => {
  try {
    return memberHouse_model.findAll({include:household_model});
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  
  return  await memberHouse_model.findOne({
    where: { id: id },
    include: [
      household_model,
      socialWelfare_model,
      {
        model: carrer_model,
        separate: true,
        order:[['createdAt', 'DESC']]
      }
    ],
  
  }) 
};

exports.create = async (houseObj) => {
  try {
    return await memberHouse_model.create(houseObj);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (houseObj, id) => {

  return await memberHouse_model
    .update(houseObj, {
      where: { id: id },
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

exports.deleted = async (id) => {
  await memberHouse_model
    .destroy({
      where: { id: id },
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

exports.createCombined = async (data) => {
  try {
    // เริ่ม transaction
    const result = await db.sequelize.transaction(async (t) => {
      // สร้างข้อมูลใน MemberHousehold
      const memberHousehold = await memberHouse_model.create(
        {
          title: data.title,
          fname: data.fname,
          lname: data.lname,
          sex: data.sex,
          national_id: data.national_id,
          age_yaer: data.age_yaer,
          age_month: data.age_month,
          birthdate: data.birthdate,
          status_in_house: data.status_in_house,
          health: data.health,
          career: data.career,
          houseId: data.houseId,
        },
        { transaction: t }
      );

      // สร้างข้อมูลใน HumanCapital
      const humanCapital = await humanCapital_model.create(
        {
          max_education: data.max_education,
          current_edu_level: data.current_edu_level,
          edu_status: data.edu_status,
          work_status: data.work_status,
          work_can_made_income: data.work_can_made_income,
          agv_income: data.agv_income,
          can_write_TH: data.can_write_TH,
          can_read_TH: data.can_read_TH,
          can_speak_TH: data.can_speak_TH,
          form_id: data.form_id,
          member_house_id: memberHousehold.id,
        },
        { transaction: t }
      );

      // สร้างข้อมูลใน SocialWelfare (หลายรายการ)
      const socialWelfarePromises = data.SocialWelfare.map(async (welfareData) => {
        return await socialWelfare_model.create(
          {
            welfare: welfareData.welfare,
            amount: welfareData.amount,
            frequency: welfareData.frequency,
            human_capital_id: humanCapital.id,
          },
          { transaction: t }
        );
      });

      const socialWelfareArray = await Promise.all(socialWelfarePromises);

      return {
        memberHousehold,
        humanCapital,
        socialWelfareArray,
      };
    });

    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

//นับจำนวนข้อมูลใน memberHouse_model
exports.countMemberHousehold = async () => {
  try {
    return await memberHouse_model.count();
  } catch (err) {
    console.log(err);
    return err;
  }
}



// ใน service file
exports.countMembersByDistrict = async () => {
  try {
    const data = await memberHouse_model.findAll({
      include: {
        model: household_model,
        attributes: ["district"], // Only include the district field
      },
    });

    const districtCounts = data.reduce((acc, member) => {
      const district = member.Household?.district || "Unknown";
      acc[district] = (acc[district] || 0) + 1;
      return acc;
    }, {});

    return districtCounts;
  } catch (error) {
    throw new Error(`Error counting members by district: ${error.message}`);
  }
};
