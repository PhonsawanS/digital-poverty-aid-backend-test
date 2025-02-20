const { where } = require("sequelize");
const db = require("../models");
const creditsources_model = db.Creditsources
const debt_model = db.Debt;


exports.get = async () => {
  try {
      return await creditsources_model.findAll({ include: debt_model });
  } catch (err) {
      throw err; // ใช้ throw error เพื่อให้ error ออกไปจัดการที่ controller
  }
};


exports.findOneById = async (id) => {
  return creditsources_model.findOne({
    where: { id: id },
    include: debt_model 
  });
};

exports.create = async (creditsourcesObj) => {
  try{
    return await creditsources_model.create(creditsourcesObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (creditsourcesObj, id) => {
  return await creditsources_model
    .update(creditsourcesObj, {
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
  await creditsources_model
  .destroy({
    where:{id:id},
  })
  .then((data) => {
    return data;
  })
  .catch((err) => {
    return err;
  })
};