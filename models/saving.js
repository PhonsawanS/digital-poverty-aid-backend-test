'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Saving.belongsTo(models.Financialcapital, { foreignKey: 'finan_capital_id' });
    }
  }
  Saving.init({
    is_has_saving:{
      type:DataTypes.BOOLEAN
    } ,
    saving_type:{
      type:DataTypes.STRING
    },
    amount:{
      type:DataTypes.FLOAT
    } ,
    finan_capital_id:{
      type:DataTypes.INTEGER,
    } 
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Saving',
  });
  return Saving;
};