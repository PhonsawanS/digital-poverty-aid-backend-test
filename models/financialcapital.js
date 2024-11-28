'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Financialcapital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Financialcapital.hasOne(models.Agriculturalincome,{foreignKey:'finan_capital_id'})
      Financialcapital.hasOne(models.Debt,{foreignKey:'finan_capital_id'})
      Financialcapital.hasOne(models.Householdexpenses,{foreignKey:'finan_capital_id'})
      Financialcapital.hasOne(models.NonAGIincome,{foreignKey:'finan_capital_id'})
      Financialcapital.hasOne(models.Occupationalproperty,{foreignKey:'finan_capital_id'})
      Financialcapital.hasOne(models.Saving,{foreignKey:'finan_capital_id'})
      Financialcapital.belongsTo(models.Form, { foreignKey: 'formId' });
    }
  }
  Financialcapital.init({
    formId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'Financialcapital',
    tableName:'Financialcapital'
  });
  return Financialcapital;
};