'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvgMemberIncome extends Model {

    static associate(models) {
      // define association here
    }
  }
  AvgMemberIncome.init({
    district_name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'AvgMemberIncome',
  });
  return AvgMemberIncome;
};