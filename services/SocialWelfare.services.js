const { where } = require("sequelize");
const db = require("../models");
const socialWelfare_model = db.SocialWelfare;
const humanCapital_model = db.HumanCapital;
const memberHouse_model = db.MemberHousehold

exports.getAll = async () => {
    try {
        return await socialWelfare_model.findAll({
          include: [{
            model: humanCapital_model,
            include: [{
              model: memberHouse_model
            }]
          }]
        });
      } catch (err) {
        console.error("Error in getAll:", err);
        throw err;
      }
};

exports.findOneById = async (id) => {
  return socialWelfare_model.findOne({
    where: { id: id },
    include:humanCapital_model
  });
};

exports.create = async (welfareObj) => {
  try {
    return await socialWelfare_model.create(welfareObj);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (welfareObj, id) => {

  return await socialWelfare_model
    .update(welfareObj, {
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
  await socialWelfare_model
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
