const { where } = require("sequelize");
const db = require("../models");
const pbresourceforlive_model = db.PBresourceforlive;
const naturalresourcecapital_model = db.Naturalresourcecapital;


exports.get = () => {
  try {
    return pbresourceforlive_model.findAll({ include: naturalresourcecapital_model });
  } catch (err) {
    return err;
  }
};



exports.findOneById = async (id) => {
  return pbresourceforlive_model.findOne({
    where: { id: id },
    include: naturalresourcecapital_model
  });
};

exports.create = async (pbresourceforliveObj) => {
  try {
    return await pbresourceforlive_model.create(pbresourceforliveObj);
  } catch (err) {
    return err;
  }
}

exports.update = async (pbresourceforliveObj, id) => {
  return await pbresourceforlive_model
    .update(pbresourceforliveObj, {
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
  await pbresourceforlive_model
    .destroy({
      where: { id: id },
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    })
};