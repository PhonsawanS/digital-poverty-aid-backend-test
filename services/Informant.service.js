const { where } = require("sequelize");
const db = require("../models");
const informant_model = db.Informant;
const form_model = db.Form;


exports.getInformant = () => {
    try {
        return informant_model.findAll({ include: form_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return informant_model.findOne({
    where: { id: id },
    include: form_model 
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