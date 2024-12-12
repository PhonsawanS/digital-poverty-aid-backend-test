'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UtilityWater extends Model {
   
    static associate(models) {
      UtilityWater.belongsTo(models.PhysicalCapital,{foreignKey:'phy_capital_id'})
    }
  }
  UtilityWater.init({
    plumbing_water: DataTypes.STRING,
    water_other_sources: DataTypes.STRING,
    water_purchase: DataTypes.BOOLEAN,
    phy_capital_id: DataTypes.INTEGER,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'UtilityWater',
  });
  return UtilityWater;
};