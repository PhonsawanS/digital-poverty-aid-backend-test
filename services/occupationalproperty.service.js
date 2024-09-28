const { where } = require("sequelize");
const db = require("../models");
const occupationalproperty_model = db.Occupationalproperty
const financialcapital_model = db.Financialcapital;


exports.get = () => {
    try {
        return occupationalproperty_model.findAll({ include: financialcapital_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return occupationalproperty_model.findOne({
    where: { id: id },
    include: financialcapital_model 
  });
};

exports.create = async (occupationalpropertyObj) => {
  try{
    return await occupationalproperty_model.create(occupationalpropertyObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (occupationalpropertyObj, id) => {
  return await occupationalproperty_model
    .update(occupationalpropertyObj, {
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
  await occupationalproperty_model
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