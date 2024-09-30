const { where } = require("sequelize");
const db = require("../models");
const nonAgiIncome_model = db.NonAGIincome
const financialcapital_model = db.Financialcapital;


exports.get = () => {
    try {
        return nonAgiIncome_model.findAll({ include: financialcapital_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return nonAgiIncome_model.findOne({
    where: { id: id },
    include: financialcapital_model 
  });
};

exports.create = async ( nonAgiIncomeObj) => {
  try{
    return await nonAgiIncome_model.create(nonAgiIncomeObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (nonAgiIncomeObj, id) => {
  return await nonAgiIncome_model
    .update(nonAgiIncomeObj, {
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
  await nonAgiIncome_model
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