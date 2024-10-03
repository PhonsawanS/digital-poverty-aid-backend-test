'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creditsources extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      creditsources.belongsTo(models.Debt,{foreignKey:'debt_id'})
    }
  }
  creditsources.init({
    form: {
      type: DataTypes.STRING,
      allowNull: false // ถ้าฟิลด์นี้ไม่ต้องการให้เป็น null สามารถเปลี่ยนเป็น false ได้
    },
    outstanding_amount: {
      type: DataTypes.FLOAT,
      allowNull: false // ถ้าฟิลด์นี้ไม่ต้องการให้เป็น null สามารถเปลี่ยนเป็น false ได้
    },
    debt_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'creditsources',
  });
  return creditsources;
};