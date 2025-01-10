'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Career extends Model {

    static associate(models) {
      Career.belongsTo(models.MemberHousehold,{foreignKey:'member_house_id'})
    }
  }
  Career.init({
    career_type: DataTypes.STRING,
    member_house_id: DataTypes.INTEGER,
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'Career',
  });
  return Career;
};