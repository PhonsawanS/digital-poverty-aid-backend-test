const db = require("../models");
const household_model = db.Household;
const memberHouse_model = db.MemberHousehold;

exports.householdList = async () => {
  try {
    const households = await household_model.findAll({ include: memberHouse_model });
    // เพิ่ม count สำหรับการนับสมาชิกในแต่ละ household
    const householdData = households.map(household => {
      return {
        ...household.toJSON(),
        memberCount: household.MemberHouseholds.length // นับจำนวนสมาชิก
      };
    });
    return householdData;
  } catch (err) {
    throw err;
  }
};

exports.gethousehold = async () => {
  try {
    const households = await household_model.findAll({
      include: memberHouse_model,
      attributes: [
        "id",
        "house_code",
        "host_title",
        "host_fname",
        "host_lname",
        "house_number",
        "subdistrict",
        "district",
        "createdAt",
      ],
    });

    // เพิ่ม count สำหรับการนับสมาชิกในแต่ละ household
    const householdData = households.map((household) => {
      return {
        id: household.id,
        surveyDate: new Date(household.createdAt).getFullYear() + 543, // แปลง ค.ศ. เป็น พ.ศ.
        name: `${household.host_title} ${household.host_fname} ${household.host_lname}`,
        housecode: household.house_code,
        members: household.MemberHouseholds ? household.MemberHouseholds.length : 0, // ตรวจสอบว่ามีสมาชิกหรือไม่
        address: `${household.house_number}, ${household.subdistrict}, ${household.district}`,
      };
    });

    return householdData;
  } catch (err) {
    throw err;
  }
};



