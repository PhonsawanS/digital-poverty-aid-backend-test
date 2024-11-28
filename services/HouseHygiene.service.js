const db = require("../models");
const houseHygiene_model = db.HouseHygiene;
const physicalCapital_model = db.PhysicalCapital;




exports.getHygiene = () => {
  try {
    return houseHygiene_model.findAll({include:physicalCapital_model});
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  return houseHygiene_model.findOne({
    where: { id: id },
    include:physicalCapital_model
  });
};

exports.create = async (data) => {
  try {
    return await houseHygiene_model.create(data);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (data, id) => {

  return await houseHygiene_model
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
  await houseHygiene_model
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


