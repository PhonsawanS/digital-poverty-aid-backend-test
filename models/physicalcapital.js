'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhysicalCapital extends Model {

    static associate(models) {
      PhysicalCapital.belongsTo(models.Form,{foreignKey:'form_id'})
      PhysicalCapital.hasOne(models.HouseHygiene,{foreignKey:'phy_capital_id'})
      PhysicalCapital.hasOne(models.UtilityWater,{foreignKey:'phy_capital_id'})
      PhysicalCapital.hasOne(models.UrbanArea,{foreignKey:'phy_capital_id'})
      PhysicalCapital.belongsTo(models.Household,{foreignKey:'houseId'})
      PhysicalCapital.hasMany(models.Log,{foreignKey:'record_id'})
    }
  }
  PhysicalCapital.init({
    lat: DataTypes.DECIMAL,
    lon: DataTypes.DECIMAL,
    is_has_house: DataTypes.STRING,
    house_rent: DataTypes.FLOAT,
    house_status_law: DataTypes.STRING,
    house_status: DataTypes.STRING,
    electricity_status: DataTypes.STRING,
    alternative_energy: DataTypes.STRING,
    has_home_phone: DataTypes.BOOLEAN,
    phone: DataTypes.STRING,
    water_for_agriculture: DataTypes.STRING,
    house_access_road: DataTypes.STRING,
    workplace_access_road: DataTypes.STRING,
    use_tech_get_benefit_gov: DataTypes.BOOLEAN,
    benefit_form_tech: DataTypes.BOOLEAN,
    news: DataTypes.ARRAY(DataTypes.STRING),  // ARRAY(Str)
    agricultural_land: DataTypes.ARRAY(DataTypes.STRING),
    land_use_issuse: DataTypes.ARRAY(DataTypes.STRING),
    form_id: DataTypes.INTEGER,
    houseId: DataTypes.INTEGER,
    editBy:  DataTypes.INTEGER

  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'PhysicalCapital',
  });
  return PhysicalCapital;
};