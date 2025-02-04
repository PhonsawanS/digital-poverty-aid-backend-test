'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvgHouseIncome extends Model {

    static associate(models) {

    }
  }
  AvgHouseIncome.init({
    district_name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'AvgHouseIncome',
  });
  return AvgHouseIncome;
};