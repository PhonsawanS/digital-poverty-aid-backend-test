'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
   
    static associate(models) {
      Form.hasOne(models.Household,{foreignKey:'formId'})
      Form.hasOne(models.TeamServey,{foreignKey:'formId'})
      Form.hasOne(models.Informant,{foreignKey:'formId'})
      Form.hasOne(models.Financialcapital,{foreignKey:'formId'})
      Form.hasOne(models.UnrestIn3Southern,{foreignKey:'form_id'})
      Form.hasOne(models.Suggestions,{foreignKey:'form_id'})
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