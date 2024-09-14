'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Informant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Informant.belongsTo(models.Form, { foreignKey: 'formId' });
    }
  }
  Informant.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    title: DataTypes.STRING,
    national_id: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    number_total_fam: DataTypes.INTEGER,  
    total_live_fam: DataTypes.INTEGER,    
    total_not_live_fam: DataTypes.INTEGER, 
    formId: DataTypes.INTEGER,            
  }, {
    sequelize,
    freezeTableName: true,
    modelName:'Informant',
    tableName:'Informant'
  });
  return Informant;
};