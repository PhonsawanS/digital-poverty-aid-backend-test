'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HouseHygiene extends Model {

    static associate(models) {
      HouseHygiene.belongsTo(models.PhysicalCapital,{foreignKey:'phy_capital_id'})
    }
  }
  HouseHygiene.init({
    item_storage: DataTypes.STRING,
    drainage_system: DataTypes.STRING,
    toilet: DataTypes.STRING,
    garbage: DataTypes.STRING,
    phy_capital_id: DataTypes.INTEGER,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'HouseHygiene',
  });
  return HouseHygiene;
};