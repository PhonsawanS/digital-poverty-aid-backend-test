'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Career extends Model {

    static associate(models) {
      Career.belongsTo(models.MemberHousehold,{foreignKey:'member_house_id'})
      Career.belongsTo(models.User,{
        foreignKey: 'editBy',
        onDelete: 'SET NULL',     
        onUpdate: 'CASCADE',      
      });
    }
  }
  Career.init({
    career_type: DataTypes.STRING,
    member_house_id: DataTypes.INTEGER,
    editBy: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    }
  }, {
    sequelize,
    freezeTableName:true,
    modelName: 'Career',
  });
  return Career;
};