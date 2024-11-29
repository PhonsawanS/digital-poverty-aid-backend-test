const { where } = require("sequelize");
const db = require("../models");
const activitytype_model = db.Activitytype;
const Socialcapital_model = db.Socialcapital;


exports.get = () => {
    try {
        return activitytype_model.findAll({ include: Socialcapital_model });
      } catch (err) {
        return err;
      }
};



exports.findOneById = async (id) => {
    return activitytype_model.findOne({
      where: { id: id },
       include: Socialcapital_model 
    });
  };
  
  exports.create = async (ActivitytypeObj) => {
    try{
      return await activitytype_model.create(ActivitytypeObj);
    }catch (err) {
      return err;
    }
  }
  
  exports.update = async (ActivitytypeObj, id) => {
    return await activitytype_model
      .update(ActivitytypeObj, {
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
    await activitytype_model
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