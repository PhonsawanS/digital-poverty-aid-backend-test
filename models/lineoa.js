'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LineOA extends Model {

    static associate(models) {
      LineOA.belongsTo(models.Household,{foreignKey:'house_code'})
      LineOA.hasMany(models.LineUserLog, {
        foreignKey: 'userId',
        sourceKey: 'userId'  // เพิ่ม sourceKey
      })
    }
  }
  LineOA.init({
    userId: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    house_code: DataTypes.STRING,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'LineOA',
  });
  return LineOA;
};