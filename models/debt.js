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
      Debt.hasMany(models.Creditsources,{foreignKey:'debt_id'})
      Debt.belongsTo(models.Financialcapital, { foreignKey: 'finan_capital_id' });
    }
  }
  Debt.init({
    is_has_debt: {
      type: DataTypes.BOOLEAN,  //เปลี่ยนชื่อ/type
      allowNull: false 
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    finan_capital_id: {
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'Debt',
  });
  return Debt;
};