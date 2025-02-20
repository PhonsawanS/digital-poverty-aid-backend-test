const db = require("../models");
const household_model = db.Household;
const memberHouse_model = db.MemberHousehold;
const { Op, Sequelize } = require("sequelize");


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


exports.getFindHouseHold = async (year, houseCode, subdistrict, district, page = 1, pageSize = 10, getAll = false) => {
  try {
    const whereClause = {};

    if (year) {
      const yearCE = parseInt(year) - 543;
      whereClause.createdAt = {
        [Op.gte]: new Date(`${yearCE}-01-01`),
        [Op.lt]: new Date(`${yearCE + 1}-01-01`),
      };
    }

    if (houseCode) {
      const houseCodeLower = houseCode.toLowerCase();
      whereClause[Op.or] = [
        {
          [Op.and]: [
            Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("house_code")), {
              [Op.like]: `%${houseCodeLower}%`,
            }),
          ],
        },
        {
          [Op.and]: [
            Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("house_code")), {
              [Op.like]: `%hc-${houseCodeLower}%`,
            }),
          ],
        },
      ];
    }

    if (subdistrict) {
      whereClause.subdistrict = {
        [Op.like]: `%${subdistrict}%`,
      };
    }

    if (district) {
      whereClause.district = {
        [Op.like]: `%${district}%`,
      };
    }

    // ✅ ถ้า `getAll=true` ดึงข้อมูลทั้งหมด ไม่ใช้ Pagination
    const limit = getAll ? null : pageSize;
    const offset = getAll ? 0 : (page - 1) * pageSize;

    const { count, rows: households } = await household_model.findAndCountAll({
      where: whereClause,
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
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });

    const householdData = households.map((household) => ({
      id: household.id,
      surveyDate: new Date(household.createdAt).getFullYear() + 543,
      name: `${household.host_title} ${household.host_fname} ${household.host_lname}`,
      housecode: household.house_code,
      members: household.MemberHouseholds ? household.MemberHouseholds.length : 0,
      address: `${household.house_number}, ${household.subdistrict}, ${household.district}`,
    }));

    return {
      totalItems: count,
      totalPages: Math.ceil(count / pageSize),
      currentPage: page,
      data: householdData,
    };
  } catch (err) {
    throw err;
  }
};


exports.getAvailableYears = async () => {
  try {
    // ดึงปีจากฟิลด์ `createdAt` และใช้ EXTRACT(YEAR) ใน PostgreSQL
    const years = await household_model.findAll({
      attributes: [
        [Sequelize.literal("EXTRACT(YEAR FROM \"createdAt\")"), "year"]
      ],
      group: [Sequelize.literal("EXTRACT(YEAR FROM \"createdAt\")")],
      order: [[Sequelize.literal("EXTRACT(YEAR FROM \"createdAt\")"), "DESC"]]
    });

    // แปลง ค.ศ. เป็น พ.ศ. และตัดค่าที่เป็น null
    const availableYears = years
      .map(y => y.getDataValue("year"))
      .filter(y => y !== null)
      .map(y => parseInt(y) + 543); // แปลง ค.ศ. เป็น พ.ศ.

    return availableYears;
  } catch (error) {
    throw new Error("Error fetching years: " + error.message);
  }
};


