const { where } = require("sequelize");
const db = require("../models");
const teamServey_model = db.TeamServey;
const form_model = db.Form;


exports.getTeamServey = () => {
  try {
    return teamServey_model.findAll({include:form_model});
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  return teamServey_model.findOne({
    where: { id: id },
    include:form_model
  });
};

exports.create = async (teamserveyObj) => {
  try {
    return await teamServey_model.create(teamserveyObj);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (teamserveyObj, id) => {

  return await teamServey_model
    .update(teamserveyObj, {
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
  await teamServey_model
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
