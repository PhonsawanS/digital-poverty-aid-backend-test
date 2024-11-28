const { where } = require("sequelize");
const db = require("../models");
const agriculturalIncome_model = db.Agriculturalincome
const financialcapital_model = db.Financialcapital;


exports.get = () => {
    try {
        return agriculturalIncome_model.findAll({ include: financialcapital_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return agriculturalIncome_model.findOne({
    where: { id: id },
    include: financialcapital_model 
  });
};

exports.create = async (agriculturalIncomeObj) => {
  try{
    return await agriculturalIncome_model.create(agriculturalIncomeObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (agriculturalIncomeObj, id) => {
  return await agriculturalIncome_model
    .update(agriculturalIncomeObj, {
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
  await agriculturalIncome_model
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