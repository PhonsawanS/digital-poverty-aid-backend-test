'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubdistrictCoordinates extends Model {

    static associate(models) {

    }
  }
  SubdistrictCoordinates.init({
    subdistrict: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lon: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'SubdistrictCoordinates',
  });
  return SubdistrictCoordinates;
};