'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Householdexpenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Householdexpenses.belongsTo(models.Financialcapital, { foreignKey: 'finan_capital_id' });
      Householdexpenses.hasMany(models.Log, { foreignKey: 'record_id' })
    }
  }
  Householdexpenses.init({
    expenses_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount_per_month: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    finan_capital_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    editBy: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Householdexpenses',
  });
  return Householdexpenses;
};