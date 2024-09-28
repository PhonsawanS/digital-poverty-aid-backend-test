const { where } = require("sequelize");
const db = require("../models");
const debt_model = db.Debt
const financialcapital_model = db.Financialcapital;


exports.get = () => {
    try {
        return debt_model.findAll({ include: financialcapital_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return debt_model.findOne({
    where: { id: id },
    include: financialcapital_model 
  });
};

exports.create = async (debtObj) => {
  try{
    return await debt_model.create(debtObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (debtObj, id) => {
  return await debt_model
    .update(debtObj, {
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
  await debt_model
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