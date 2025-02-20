'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AGIFinancial extends Model {

    static associate(models) {
      AGIFinancial.belongsTo(models.Financialcapital, { foreignKey: 'finan_capital_id' })
      AGIFinancial.hasMany(models.Log, { foreignKey: 'record_id' })
    }
  }
  AGIFinancial.init({
    type: DataTypes.STRING,
    amount_per_year: DataTypes.FLOAT,
    finan_capital_id: DataTypes.INTEGER,
    editBy: DataTypes.INTEGER

  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'AGIFinancial',
  });
  return AGIFinancial;
};