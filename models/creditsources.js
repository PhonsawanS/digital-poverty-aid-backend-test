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
    form: DataTypes.STRING,
    outstanding_amount: DataTypes.FLOAT,
    debt_id:DataTypes.INTEGER
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'creditsources',
  });
  return creditsources;
};