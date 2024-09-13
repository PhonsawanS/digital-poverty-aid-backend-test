const { where } = require("sequelize");
const db = require("../models");
const form_model = db.Form;

//relation table
const household_model = db.Household;

exports.getForms = async () => {
  try {
    return form_model.findAll();
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  return form_model.findOne({
    where: { id: id },
  });
};

exports.create = async (formObj) => {
  return await form_model.create(formObj);
};

exports.update = async (formObj, id) => {
  return await form_model
    .update(formObj, {
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
  await form_model
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

exports.create = async (formObj) => {
  return await form_model.create(formObj);
};


//สร้าง2ตารางโดยการ Destruture แล้วโยนข้อมูลไปสร้าง
exports.createFWH = async (formObj, houseObj) => {
  return await form_model.create(
    {
      ...formObj, // สร้าง Form 
      Household: { ...houseObj } // สร้าง Household 
    },

    {
      include: [household_model] // ให้ Sequelize รู้ว่าต้องการสร้าง Household พร้อมกับ Form
    }
    
  );
};
