const { where } = require("sequelize");
const db = require("../models");
const informant_model = db.Informant;


exports.getInformant = () => {
    try {
        return informant_model.findAll();
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return informant_model.findOne({
    where: { id: id },
  });
};

exports.create = async (informantObj) => {
  try{
    return await informant_model.create(informantObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (informantObj, id) => {
  return await informant_model
    .update(informantObj, {
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
  await informant_model
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