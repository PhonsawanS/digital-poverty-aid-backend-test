const db = require("../models");
const urbanArea_model = db.UrbanArea;
const physicalCapital_model = db.PhysicalCapital;




exports.getUrbanArea = () => {
  try {
    return urbanArea_model.findAll({include:physicalCapital_model});
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  return urbanArea_model.findOne({
    where: { id: id },
    include:physicalCapital_model
  });
};

exports.create = async (data) => {
  try {
    return await urbanArea_model.create(data);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (data, id) => {

  return await urbanArea_model
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
  await urbanArea_model
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


