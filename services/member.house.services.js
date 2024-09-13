const { where } = require("sequelize");
const db = require("../models");
const memberHouse_model = db.MemberHousehold;
const household_model = db.Household;


exports.getMember = () => {
  try {
    return memberHouse_model.findAll({include:household_model});
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  return memberHouse_model.findOne({
    where: { id: id },
    include:household_model
  });
};

exports.create = async (houseObj) => {
  try {
    return await memberHouse_model.create(houseObj);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (houseObj, id) => {

  return await memberHouse_model
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
  await memberHouse_model
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
