const { where } = require("sequelize");
const db = require("../models");
const humanCapital_model = db.HumanCapital;
const form_model = db.Form;
const member_house_model = db.MemberHousehold;


exports.getAll = () => {
  try {
    return humanCapital_model.findAll(
        {
        include:form_model,include:member_house_model
    });
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  return humanCapital_model.findOne({
    where: { id: id },
    include:form_model,include:member_house_model
  });
};

exports.create = async (humanCapitalObj) => {
  try {
    return await humanCapital_model.create(humanCapitalObj);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (humanCapitalObj, id) => {

  return await humanCapital_model
    .update(humanCapitalObj, {
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
  await humanCapital_model
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
