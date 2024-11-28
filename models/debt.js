'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Debt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Debt.hasOne(models.creditsources,{foreignKey:'debt_id'})
      Debt.belongsTo(models.Financialcapital, { foreignKey: 'finan_capital_id' });
    }
  }
  Debt.init({
    firstis_has_debt: {
      type: DataTypes.FLOAT,
      allowNull: false // เปลี่ยนตามความต้องการ
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false // เปลี่ยนตามความต้องการ
    },
    finan_capital_id: {
      type: DataTypes.INTEGER,
      allowNull: false // เปลี่ยนตามความต้องการ
    }
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'Debt',
  });
  return Debt;
};