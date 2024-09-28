const { where } = require("sequelize");
const db = require("../models");
const householdexpenses_model = db.Householdexpenses
const financialcapital_model = db.Financialcapital;


exports.get = () => {
    try {
        return householdexpenses_model.findAll({ include: financialcapital_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return householdexpenses_model.findOne({
    where: { id: id },
    include: financialcapital_model 
  });
};

exports.create = async ( householdexpensesObj) => {
  try{
    return await householdexpenses_model.create(householdexpensesObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (householdexpensesObj, id) => {
  return await householdexpenses_model
    .update(householdexpensesObj, {
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
  await householdexpenses_model
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