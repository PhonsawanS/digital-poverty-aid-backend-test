'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
   
    static associate(models) {
      Form.hasOne(models.Household,{foreignKey:'form_id'})
      Form.hasOne(models.TeamServey,{foreignKey:'form_id'})
      Form.hasOne(models.Informant,{foreignKey:'form_id'}),
      Form.hasOne(models.HumanCapital,{foreignKey:'form_id'})
      Form.hasOne(models.PhysicalCapital,{foreignKey:'formId'})
      Form.hasOne(models.UnresIn3Southern,{foreignKey:'form_id'})
    }
  }
  Form.init({
    time_rec: DataTypes.DATE,  
    recder_title: DataTypes.STRING,
    recder_fname: DataTypes.STRING, 
    recder_lname: DataTypes.STRING, 
    recder_phone: DataTypes.STRING,  
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Form',
  });
  return Form;
};