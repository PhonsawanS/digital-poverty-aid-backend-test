const { where } = require("sequelize");
const db = require("../models");
const pbresourceforincome_model = db.PBresourceforincome;
const naturalresourcecapital_model = db.Naturalresourcecapital;


exports.get = () => {
  try {
    return pbresourceforincome_model.findAll({ include: naturalresourcecapital_model });
  } catch (err) {
    return err;
  }
};



exports.findOneById = async (id) => {
  return pbresourceforincome_model.findOne({
    where: { id: id },
    include: naturalresourcecapital_model
  });
};

exports.create = async (pbresourceforincomeObj) => {
  try {
    return await pbresourceforincome_model.create(pbresourceforincomeObj);
  } catch (err) {
    return err;
  }
}

exports.update = async (pbresourceforincomeObj, id) => {
  return await pbresourceforincome_model
    .update(pbresourceforincomeObj, {
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
  await pbresourceforincome_model
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