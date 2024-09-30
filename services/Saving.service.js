const { where } = require("sequelize");
const db = require("../models");
const saving_model = db.Saving
const financialcapital_model = db.Financialcapital;


exports.get = () => {
    try {
        return saving_model.findAll({ include: financialcapital_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return saving_model.findOne({
    where: { id: id },
    include: financialcapital_model 
  });
};

exports.create = async (savingObj) => {
  try{
    return await saving_model.create(savingObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (savingObj, id) => {
  return await saving_model
    .update(savingObj, {
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
  await saving_model
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