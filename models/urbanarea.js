'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrbanArea extends Model {

    static associate(models) {
      UrbanArea.belongsTo(models.PhysicalCapital,{foreignKey:'phy_capital_id'})
    }
  }
  UrbanArea.init({
    is_use_area_to_work: DataTypes.STRING,
    has_prolem_in_area: DataTypes.STRING,
    phy_capital_id: DataTypes.INTEGER,

  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'UrbanArea',
  });
  return UrbanArea;
};