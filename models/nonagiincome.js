'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NonAGIincome extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NonAGIincome.belongsTo(models.Financialcapital, { foreignKey: 'finan_capital_id' });
    }
  }
  NonAGIincome.init({
    income_type:{
      type: DataTypes.STRING,
    }, 
    amount_per_yaer:{
      type: DataTypes.FLOAT
    },
    cost_per_year:{
      type:DataTypes.FLOAT,
    } ,
    finan_capital_id:{
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'NonAGIincome',
  });
  return NonAGIincome;
};