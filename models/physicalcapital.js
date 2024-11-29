'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhysicalCapital extends Model {

    static associate(models) {
      PhysicalCapital.belongsTo(models.Form,{foreignKey:'formId'})
      PhysicalCapital.hasOne(models.HouseHygiene,{foreignKey:'phy_capital_id'})
      PhysicalCapital.hasOne(models.UtilityWater,{foreignKey:'phy_capital_id'})
      PhysicalCapital.hasOne(models.UrbanArea,{foreignKey:'phy_capital_id'})
    }
  }
  PhysicalCapital.init({
    pin_latitude: DataTypes.STRING,
    pin_longitude: DataTypes.STRING,
    is_has_house: DataTypes.STRING,
    house_rent: DataTypes.FLOAT,
    house_status_law: DataTypes.STRING,
    house_status: DataTypes.STRING,
    electricity_status: DataTypes.STRING,
    alternative_energy: DataTypes.BOOLEAN,
    has_home_phone: DataTypes.BOOLEAN,
    phone: DataTypes.STRING,
    water_for_agriculture: DataTypes.STRING,
    house_access_road: DataTypes.STRING,
    workplace_access_road: DataTypes.STRING,
    use_tech_get_benrfit_gov: DataTypes.BOOLEAN,
    benefit_form_tech: DataTypes.BOOLEAN,
    news: DataTypes.ARRAY(DataTypes.STRING),  // ARRAY(Str)
    agricultural_land: DataTypes.ARRAY(DataTypes.STRING),
    land_use_issuse: DataTypes.ARRAY(DataTypes.STRING),
    formId: DataTypes.INTEGER,

  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'PhysicalCapital',
  });
  return PhysicalCapital;
};