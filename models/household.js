'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Household extends Model {
  
    static associate(models) {
      Household.belongsTo(models.Form,{foreignKey:'formId'}),
      Household.hasOne(models.MemberHousehold,{foreignKey:'houseId'})
      Household.hasOne(models.MemberActivity,{foreignKey:'houseId'})
      Household.hasOne(models.HouseHoldProblem,{foreignKey:'houseId'})
    }
  }
  Household.init({
    house_code: DataTypes.STRING,
    host_title: DataTypes.STRING,
    host_fname: DataTypes.STRING,
    host_lname: DataTypes.STRING,
    host_national_id: DataTypes.STRING,
    green_book_id: DataTypes.STRING,
    postcode: DataTypes.INTEGER,
    subdistrict: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    house_number: DataTypes.STRING,
    village: DataTypes.STRING,
    alley: DataTypes.STRING,
    road: DataTypes.STRING,
    total_house_member: DataTypes.INTEGER,
    total_house_activity: DataTypes.INTEGER,
    formId: DataTypes.INTEGER
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Household',
  });
  return Household;
};