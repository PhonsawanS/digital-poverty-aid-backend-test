const { where } = require("sequelize");
const db = require("../models");
const household_model = db.Household;
const form_model = db.Form;

exports.getHouse = () => {
  try {
    return household_model.findAll({ include: form_model });
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  return household_model.findOne({
    where: { id: id },
  });
};

exports.create = async (houseObj) => {
  try {
    return await household_model.create(houseObj);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (houseObj, id) => {
  return await household_model
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
  await household_model
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


// Service function: นับจำนวนข้อมูลใน household_model
exports.countHouseholds = async () => {
  try {
    // ใช้ Sequelize's count() method เพื่อคำนวณจำนวนแถวทั้งหมดใน household_model
    return await household_model.count();
  } catch (err) {
    // หากเกิดข้อผิดพลาด ให้พิมพ์ข้อความแสดงข้อผิดพลาดลงใน console และส่ง error กลับไป
    console.log(err);
    return err;
  }
};


exports.countHouseholdsByDistrict = async () => {
  try {
    return await household_model.findAll({
      attributes: [
        'district',
        [db.Sequelize.fn('COUNT', db.Sequelize.col('id')), 'count']
      ],
      group: ['district']
    });
  } catch (err) {
    console.error(err);
    return err;
  }
};


