'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LineOA extends Model {

    static associate(models) {
      LineOA.belongsTo(models.Household,{foreignKey:'house_code'})
    }
  }
  LineOA.init({
    userId: DataTypes.STRING,
    house_code: DataTypes.STRING,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'LineOA',
  });
  return LineOA;
};