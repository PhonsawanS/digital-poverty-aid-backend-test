'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Occupationalproperty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Occupationalproperty.belongsTo(models.Financialcapital, { foreignKey: 'finan_capital_id' });
    }
  }
  Occupationalproperty.init({
    is_has_property:{
      type:DataTypes.BOOLEAN
    },
    property_type:{
      type:DataTypes.ARRAY(DataTypes.STRING)
    },
    finan_capital_id:{
      type:DataTypes.INTEGER
    } 
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Occupationalproperty',
  });
  return Occupationalproperty;
};