'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Household extends Model {

    static associate(models) {
      Household.belongsTo(models.Form, { foreignKey: 'form_id' }),
        Household.hasMany(models.MemberHousehold, { foreignKey: 'houseId' })
      Household.hasOne(models.MemberActivity, { foreignKey: 'houseId' })
      Household.hasOne(models.HouseHoldProblem, { foreignKey: 'houseId' }),
        Household.hasOne(models.PhysicalCapital, { foreignKey: 'houseId' }),
        Household.hasMany(models.LineOA, { foreignKey: 'house_code' })
      Household.hasMany(models.Log, { foreignKey: 'record_id' })
    }
  }
  Household.init({
    house_code: DataTypes.STRING,
    host_title: DataTypes.STRING,
    host_fname: DataTypes.STRING,
    host_lname: DataTypes.STRING,
    host_national_id: DataTypes.STRING,
    has_greenBook: DataTypes.BOOLEAN,
    green_book_id: DataTypes.STRING,
    postcode: DataTypes.INTEGER,
    subdistrict: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    house_number: DataTypes.STRING,
    village: DataTypes.STRING,
    alley: DataTypes.STRING,
    road: DataTypes.STRING,
    form_id: DataTypes.INTEGER,
    editBy: DataTypes.INTEGER
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Household',
  });
  return Household;
};