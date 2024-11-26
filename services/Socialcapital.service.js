const { where } = require("sequelize");
const db = require("../models");
const Socialcapital_model = db.Socialcapital;
const form_model = db.Form;


exports.getSocialcapital = () => {
    try {
        return Socialcapital_model.findAll({ include: form_model });
      } catch (err) {
        return err;
      }
};



exports.findOneById = async (id) => {
    return Socialcapital_model.findOne({
      where: { id: id },
       include: form_model 
    });
  };
  
  exports.create = async (socialcapitalObj) => {
    try{
      return await Socialcapital_model.create(socialcapitalObj);
    }catch (err) {
      return err;
    }
  }
  
  exports.update = async (socialcapitalObj, id) => {
    return await Socialcapital_model
      .update(socialcapitalObj, {
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
    await Socialcapital_model
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