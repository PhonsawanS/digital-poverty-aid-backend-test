const { where } = require("sequelize");
const db = require("../models");
const financialcapital_model = db.Financialcapital;
const form_model = db.Form;


exports.getFinalcapital = () => {
    try {
        return financialcapital_model.findAll({ include: form_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return financialcapital_model.findOne({
    where: { id: id },
    include: form_model 
  });
};

exports.create = async (financialcapitalObj) => {
  try{
    return await financialcapital_model.create(financialcapitalObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (financialcapitalObj, id) => {
  return await financialcapital_model
    .update(financialcapitalObj, {
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
  await financialcapital_model
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