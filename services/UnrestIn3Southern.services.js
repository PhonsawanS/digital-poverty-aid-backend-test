const db = require("../models");  //dbคือฐานข้อมูล
const unret3sortern_model = db.UnrestIn3Southern
const form_model = db.Form


exports.getUnres = () => {
    try {
      return unret3sortern_model.findAll({include:form_model});
    } catch (err) {
      return err;
    }
  };
  
  exports.findOneById = async (id) => {
    return unret3sortern_model.findOne({
      where: { id: id },
      include:form_model
    });
  };
  
  exports.create = async (Obj) => {
    try {
      return await unret3sortern_model.create(Obj);
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.update = async (Obj, id) => {
  
    return await unret3sortern_model
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
    await unret3sortern_model
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