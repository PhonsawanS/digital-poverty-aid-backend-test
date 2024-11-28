const db = require("../models");  //dbคือฐานข้อมูล
const suggestions_model = db.Suggestions
const form_model = db.Form

exports.getSugges = () => {
    try {
      return suggestions_model.findAll({include:form_model});
    } catch (err) {
      return err;
    }
  };
  
  exports.findOneById = async (id) => {
    return suggestions_model.findOne({
      where: { id: id },
      include:form_model
    });
  };
  
  exports.create = async (Obj) => {
    try {
      return await suggestions_model.create(Obj);
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.update = async (Obj, id) => {
  
    return await suggestions_model
      .update(Obj, {
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
    await suggestions_model
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