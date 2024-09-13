'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
   
    static associate(models) {
      Form.hasOne(models.Household,{foreignKey:'formId'})
      // Form.hasOne(models.TeamServey,{foreignKey:'formId'})
      Form.hasOne(models.Informant,{foreignKey:'formId'})
    }
  }
  Form.init({
    time_start: DataTypes.DATE,  
    time_end: DataTypes.DATE 
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Form',
  });
  return Form;
};