const { where } = require("sequelize");
const db = require("../models");
const houseHoldProblem_model = db.HouseHoldProblem;
const household_model = db.Household;
const team_servery = db.TeamServey

exports.gethouseHoldProblem = () => {
    try {
        return houseHoldProblem_model.findAll({
          include: [household_model, team_servery], 
        });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
    return houseHoldProblem_model.findOne({
      where: { id: id },
      include: [household_model, team_servery],
    });
};
  

exports.create = async (houseHoldProblemObj) => {
    try{
      return await houseHoldProblem_model.create(houseHoldProblemObj);
    }catch (err) {
      return err;
    }
}


exports.update = async (houseHoldProblemObj, id) => {
    return await houseHoldProblem_model
      .update(houseHoldProblemObj, {
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
    await houseHoldProblem_model
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