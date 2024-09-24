const { where } = require("sequelize");
const db = require("../models");
const memberactivity_model = db.MemberActivity;
const household_model = db.Household;

exports.getMemberActivity = () => {
    try {
        return memberactivity_model.findAll({ include: household_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return memberactivity_model.findOne({
    where: { id: id },
    include: household_model
  });
};

exports.create = async (memberactivityObj) => {
  try{
    return await memberactivity_model.create(memberactivityObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (memberactivityObj, id) => {
  return await memberactivity_model
    .update(memberactivityObj, {
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
  await memberactivity_model
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