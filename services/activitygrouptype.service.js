const { where } = require("sequelize");
const db = require("../models");
const activitygrouptype_model = db.Activitygrouptype;
const Socialcapital_model = db.Socialcapital;


exports.getActivitygrouptype = () => {
    try {
        return activitygrouptype_model.findAll({ include: Socialcapital_model });
      } catch (err) {
        return err;
      }
};



exports.findOneById = async (id) => {
    return activitygrouptype_model.findOne({
      where: { id: id },
       include: Socialcapital_model 
    });
  };
  
  exports.create = async (ActivitygrouptypeObj) => {
    try{
      return await activitygrouptype_model.create(ActivitygrouptypeObj);
    }catch (err) {
      return err;
    }
  }
  
  exports.update = async (ActivitygrouptypeObj, id) => {
    return await activitygrouptype_model
      .update(ActivitygrouptypeObj, {
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
    await activitygrouptype_model
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