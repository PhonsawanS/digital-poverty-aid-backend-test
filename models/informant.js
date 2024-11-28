'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Informant extends Model {

    static associate(models) {
      // define association here
      Informant.belongsTo(models.Form, { foreignKey: 'form_id' });
    }
  }

  Informant.init({
    title: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    national_id: DataTypes.STRING,
    phone: DataTypes.STRING,
    fam_total_member: DataTypes.INTEGER,  
    fam_total_live: DataTypes.INTEGER,    
    total_has_name_not_live: DataTypes.INTEGER, 
    live_but_has_no_name_in_fam: DataTypes.INTEGER, 
    form_id: DataTypes.INTEGER,            

  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Informant',
    tableName: 'Informant'
  });
  
  return Informant;
};
