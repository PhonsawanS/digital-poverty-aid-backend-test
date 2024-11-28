const db = require("../models");
const utilityWater_model = db.UtilityWater;
const physicalCapital_model = db.PhysicalCapital;




exports.getUtilWater = () => {
  try {
    return utilityWater_model.findAll({include:physicalCapital_model});
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  return utilityWater_model.findOne({
    where: { id: id },
    include:physicalCapital_model
  });
};

exports.create = async (data) => {
  try {
    return await utilityWater_model.create(data);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (data, id) => {

  return await utilityWater_model
    .update(data, {
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
  await utilityWater_model
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


